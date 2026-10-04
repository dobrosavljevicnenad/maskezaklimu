import { Component, OnDestroy, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { NovostiService, Novost } from '../../services/novosti.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-novosti-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './novosti-detail.component.html',
  styleUrl: './novosti-detail.component.css'
})
export class NovostiDetailComponent implements OnInit, OnDestroy {
  post: Novost | null = null;
  ostaleNovosti: Novost[] = [];

  private currentSlug = '';
  private sub?: Subscription;
  private readonly SITE = 'https://maskezaklimu.rs';

  constructor(private route: ActivatedRoute, private novostiService: NovostiService, private seo: SeoService) {
    // Isti SSR-bezbedni obrazac kao MaskaDetailComponent: novosti signal počinje
    // prazan i asinhrono se popuni, pa se ovde reaguje kad podaci stignu.
    effect(() => {
      const novosti = this.novostiService.novosti();
      if (novosti.length > 0 && this.currentSlug && !this.post) {
        const found = this.novostiService.getBySlug(this.currentSlug);
        if (found) {
          this.post = found;
          this.applySeoAndSchema(found);
        }
      }
    });
  }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (!slug) return;

      this.currentSlug = slug;
      const found = this.novostiService.getBySlug(slug);
      this.post = found || null;

      if (this.post) {
        this.applySeoAndSchema(this.post);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.seo.removeJsonLd('novost-article-schema');
    this.seo.removeJsonLd('novost-faq-schema');
    this.seo.removeJsonLd('novost-breadcrumb-schema');
  }

  private applySeoAndSchema(post: Novost): void {
    this.ostaleNovosti = this.novostiService.novosti()
      .filter(n => n.slug !== post.slug)
      .sort((a, b) => b.datum.localeCompare(a.datum))
      .slice(0, 3);

    const url = `${this.SITE}/novosti/${post.slug}`;
    const image = `${this.SITE}/${post.slika}`;

    this.seo.updateSeo({
      title: `${post.naslov} | maskezaklimu.rs`,
      description: post.opis,
      url,
      image,
      imageAlt: post.slikaAlt,
      imageWidth: post.slikaWidth,
      imageHeight: post.slikaHeight,
      ogType: 'article'
    });

    this.seo.setJsonLd('novost-article-schema', {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.naslov,
      description: post.opis,
      url,
      inLanguage: 'sr-RS',
      author: {
        '@type': 'Organization',
        name: 'Maske za klimu',
        url: this.SITE + '/'
      },
      publisher: {
        '@id': `${this.SITE}/#organization`
      },
      datePublished: post.datum,
      dateModified: post.datumIzmene || post.datum,
      image
    });

    if (post.faq && post.faq.length > 0) {
      this.seo.setJsonLd('novost-faq-schema', {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map(f => ({
          '@type': 'Question',
          name: f.pitanje,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.odgovor
          }
        }))
      });
    }

    this.seo.setJsonLd('novost-breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Maske za klimu', item: `${this.SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Novosti', item: `${this.SITE}/novosti` },
        { '@type': 'ListItem', position: 3, name: post.naslov, item: url }
      ]
    });
  }
}

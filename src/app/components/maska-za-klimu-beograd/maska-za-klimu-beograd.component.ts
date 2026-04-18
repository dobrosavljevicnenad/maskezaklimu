import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maska-za-klimu-beograd',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maska-za-klimu-beograd.component.html',
  styleUrl: './maska-za-klimu-beograd.component.css'
})
export class MaskaZaKlimuBeogradComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maska za klimu Beograd – Dostava i izrada po meri | maskezaklimu.rs',
      description: 'Maska za klimu Beograd – dekorativne i zaštitne maske za spoljne jedinice klima uređaja. Plastificirani lim 1,5 mm, CNC izrada po meri, dostava kurirskom službom u Beograd.',
      url: 'https://maskezaklimu.rs/maska-za-klimu-beograd',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('beograd-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li dostavljate maske za klimu u Beograd?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, dostavljamo maske za klimu u Beograd i sva okolna mesta kurirskom službom. Rok isporuke je 1–2 radna dana od trenutka otpremanja, a rok izrade standardnog modela je 5–7 radnih dana.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kolika je cena maske za klimu sa dostavom u Beograd?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna maska za klimu dimenzija 900 × 650 × 440 mm iznosi 12.480 RSD. Dostava kurirskom službom u Beograd je uključena u cenu.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li mogu da naručim masku za klimu po meri za Beograd?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Izrađujemo maske za klimu po meri prema dimenzijama vaše spoljne jedinice. Pošaljite nam dimenzije i dobićete ponudu. Dostava u Beograd kurirskom službom.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koje šare su dostupne za masku za klimu u Beogradu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nudimo više dekorativnih šara: sitni listovi, krupni listovi, pravougaonici, geometrijska haotična šara, kvadratici i minimalistički rezovi. Sve u RAL bojama po izboru.'
          }
        }
      ]
    });

    this.seo.setJsonLd('beograd-breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Maske za klimu',
          item: 'https://maskezaklimu.rs/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Maska za klimu Beograd',
          item: 'https://maskezaklimu.rs/maska-za-klimu-beograd'
        }
      ]
    });

    this.seo.setJsonLd('beograd-localbusiness-schema', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Maske za klimu – dostava u Beograd',
      url: 'https://maskezaklimu.rs/maska-za-klimu-beograd',
      telephone: '+381659775995',
      areaServed: [
        { '@type': 'City', name: 'Beograd' },
        { '@type': 'Country', name: 'Serbia' }
      ],
      priceRange: 'RSD 10980-12480',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });
  }
}

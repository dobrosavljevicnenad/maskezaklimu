import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maska-za-klimu-novi-sad',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maska-za-klimu-novi-sad.component.html',
  styleUrl: './maska-za-klimu-novi-sad.component.css'
})
export class MaskaZaKlimuNoviSadComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maska za klimu Novi Sad – Dostava i izrada po meri | maskezaklimu.rs',
      description: 'Maska za klimu Novi Sad – dekorativne i zaštitne maske za spoljne jedinice klima uređaja. Plastificirani lim 1,5 mm, CNC izrada po meri, dostava kurirskom službom u Novi Sad.',
      url: 'https://maskezaklimu.rs/maska-za-klimu-novi-sad',
      image: 'https://maskezaklimu.rs/assets/maska_za_klimu_krupni_listovi.webp',
      imageAlt: 'Maska za klimu Novi Sad – dekorativna zaštita za spoljnu jedinicu klima uređaja, model Krupni listovi',
      imageWidth: 650,
      imageHeight: 433
    });

    this.seo.setJsonLd('novi-sad-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li dostavljate maske za klimu u Novi Sad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, dostavljamo maske za klimu u Novi Sad i okolna mesta kurirskom službom. Rok isporuke je 1–2 radna dana od otpremanja, a rok izrade standardnog modela je 5–7 radnih dana.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kolika je cena maske za klimu sa dostavom u Novi Sad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna maska za klimu dimenzija 900 × 650 × 440 mm (S) ili 900 × 650 × 550 mm (M) iznosi 13.480 RSD.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li mogu da naručim masku za klimu po meri za Novi Sad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Izrađujemo maske za klimu po meri prema dimenzijama vaše spoljne jedinice. Pošaljite nam mere i dobićete ponudu. Dostava u Novi Sad kurirskom službom.'
          }
        }
      ]
    });

    this.seo.setJsonLd('novi-sad-breadcrumb-schema', {
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
          name: 'Maska za klimu Novi Sad',
          item: 'https://maskezaklimu.rs/maska-za-klimu-novi-sad'
        }
      ]
    });

    this.seo.setJsonLd('novi-sad-localbusiness-schema', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Maske za klimu – dostava u Novi Sad',
      url: 'https://maskezaklimu.rs/maska-za-klimu-novi-sad',
      telephone: '+381659775995',
      areaServed: [
        { '@type': 'City', name: 'Novi Sad' },
        { '@type': 'Country', name: 'Serbia' }
      ],
      priceRange: 'RSD 13480',
      image: 'https://maskezaklimu.rs/assets/maska_za_klimu_krupni_listovi.webp'
    });
  }
}

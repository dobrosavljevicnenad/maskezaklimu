import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maska-za-klimu-pancevo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maska-za-klimu-pancevo.component.html',
  styleUrl: './maska-za-klimu-pancevo.component.css'
})
export class MaskaZaKlimuPancevoComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maska za klimu Pančevo – Dostava i izrada po meri | maskezaklimu.rs',
      description: 'Maska za klimu Pančevo – dekorativne i zaštitne maske za spoljne jedinice klima uređaja. Plastificirani lim 1,5 mm, CNC izrada po meri, dostava kurirskom službom u Pančevo.',
      url: 'https://maskezaklimu.rs/maska-za-klimu-pancevo',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('pancevo-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li dostavljate maske za klimu u Pančevo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, dostavljamo maske za klimu u Pančevo i Južni Banat kurirskom službom. Rok isporuke je 1–2 radna dana od otpremanja, a rok izrade standardnog modela je 5–7 radnih dana.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kolika je cena maske za klimu sa dostavom u Pančevo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna maska za klimu dimenzija 900 × 650 × 440 mm iznosi 12.480 RSD.'
          }
        },
        {
          '@type': 'Question',
          name: 'Mogu li naručiti masku za klimu po meri za Pančevo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Svaka maska se pravi prema merama vaše spoljne jedinice. Pošaljite dimenzije i odaberite šaru – dostavićemo u Pančevo.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko traje dostava maske za klimu u Pančevo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dostava u Pančevo traje 1–2 radna dana od otpremanja. Ukupno od narudžbine računajte 6–9 radnih dana.'
          }
        }
      ]
    });

    this.seo.setJsonLd('pancevo-breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Maske za klimu', item: 'https://maskezaklimu.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Maska za klimu Pančevo', item: 'https://maskezaklimu.rs/maska-za-klimu-pancevo' }
      ]
    });

    this.seo.setJsonLd('pancevo-localbusiness-schema', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Maske za klimu – dostava u Pančevo',
      url: 'https://maskezaklimu.rs/maska-za-klimu-pancevo',
      telephone: '+381659775995',
      areaServed: [
        { '@type': 'City', name: 'Pančevo' },
        { '@type': 'Country', name: 'Serbia' }
      ],
      priceRange: 'RSD 10980-12480',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });
  }
}

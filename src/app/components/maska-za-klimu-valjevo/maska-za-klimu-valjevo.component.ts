import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maska-za-klimu-valjevo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maska-za-klimu-valjevo.component.html',
  styleUrl: './maska-za-klimu-valjevo.component.css'
})
export class MaskaZaKlimuValjevaComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maska za klimu Valjevo – Dostava i izrada po meri | maskezaklimu.rs',
      description: 'Maska za klimu Valjevo – dekorativne i zaštitne maske za spoljne jedinice klima uređaja. Plastificirani lim 1,5 mm, CNC izrada po meri, dostava kurirskom službom u Valjevo.',
      url: 'https://maskezaklimu.rs/maska-za-klimu-valjevo',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('valjevo-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li dostavljate maske za klimu u Valjevo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, dostavljamo maske za klimu u Valjevo i Kolubarsku oblast kurirskom službom. Rok isporuke je 1–2 radna dana od otpremanja, a rok izrade je 5–7 radnih dana.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kolika je cena maske za klimu sa dostavom u Valjevo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna maska za klimu dimenzija 900 × 650 × 440 mm iznosi 12.480 RSD. Dostava kurirskom službom u Valjevo je uključena u cenu.'
          }
        },
        {
          '@type': 'Question',
          name: 'Mogu li naručiti masku za klimu po meri za Valjevo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Izrađujemo maske prema dimenzijama vaše spoljne jedinice. Pošaljite mere i dobićete ponudu. Dostava u Valjevo kurirskom službom.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko traje dostava maske za klimu u Valjevo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dostava u Valjevo traje 1–2 radna dana od otpremanja. Ukupno od narudžbine računajte 6–9 radnih dana.'
          }
        }
      ]
    });

    this.seo.setJsonLd('valjevo-breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Maske za klimu', item: 'https://maskezaklimu.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Maska za klimu Valjevo', item: 'https://maskezaklimu.rs/maska-za-klimu-valjevo' }
      ]
    });

    this.seo.setJsonLd('valjevo-localbusiness-schema', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Maske za klimu – dostava u Valjevo',
      url: 'https://maskezaklimu.rs/maska-za-klimu-valjevo',
      telephone: '+381659775995',
      areaServed: [
        { '@type': 'City', name: 'Valjevo' },
        { '@type': 'Country', name: 'Serbia' }
      ],
      priceRange: 'RSD 10980-12480',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });
  }
}

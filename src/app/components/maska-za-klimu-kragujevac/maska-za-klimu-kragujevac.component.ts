import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maska-za-klimu-kragujevac',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maska-za-klimu-kragujevac.component.html',
  styleUrl: './maska-za-klimu-kragujevac.component.css'
})
export class MaskaZaKlimuKragujevacComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maska za klimu Kragujevac – Dostava i izrada po meri | maskezaklimu.rs',
      description: 'Maska za klimu Kragujevac – dekorativne i zaštitne maske za spoljne jedinice klima uređaja. Plastificirani lim 1,5 mm, CNC izrada po meri, dostava kurirskom službom u Kragujevac.',
      url: 'https://maskezaklimu.rs/maska-za-klimu-kragujevac',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('kragujevac-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li dostavljate maske za klimu u Kragujevac?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, dostavljamo maske za klimu u Kragujevac i okolinu kurirskom službom. Rok isporuke je 1–2 radna dana od otpremanja, a rok izrade standardnog modela je 5–7 radnih dana.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kolika je cena maske za klimu sa dostavom u Kragujevac?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna maska za klimu dimenzija 900 × 650 × 440 mm iznosi 12.480 RSD.'
          }
        },
        {
          '@type': 'Question',
          name: 'Mogu li naručiti masku za klimu po meri za Kragujevac?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Svaka maska se izrađuje prema dimenzijama vaše spoljne jedinice. Pošaljite mere i odaberite šaru – dostavićemo u Kragujevac.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko traje dostava maske za klimu u Kragujevac?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dostava u Kragujevac traje 1–2 radna dana od otpremanja. Rok izrade je 5–7 radnih dana, ukupno 6–9 dana od narudžbine.'
          }
        }
      ]
    });

    this.seo.setJsonLd('kragujevac-breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Maske za klimu', item: 'https://maskezaklimu.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Maska za klimu Kragujevac', item: 'https://maskezaklimu.rs/maska-za-klimu-kragujevac' }
      ]
    });

    this.seo.setJsonLd('kragujevac-localbusiness-schema', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Maske za klimu – dostava u Kragujevac',
      url: 'https://maskezaklimu.rs/maska-za-klimu-kragujevac',
      telephone: '+381659775995',
      areaServed: [
        { '@type': 'City', name: 'Kragujevac' },
        { '@type': 'Country', name: 'Serbia' }
      ],
      priceRange: 'RSD 10980-12480',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });
  }
}

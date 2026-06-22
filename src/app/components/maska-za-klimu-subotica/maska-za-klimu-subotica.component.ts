import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maska-za-klimu-subotica',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maska-za-klimu-subotica.component.html',
  styleUrl: './maska-za-klimu-subotica.component.css'
})
export class MaskaZaKlimuSuboticaComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maska za klimu Subotica – Dostava i izrada po meri | maskezaklimu.rs',
      description: 'Maska za klimu Subotica – dekorativne i zaštitne maske za spoljne jedinice klima uređaja. Plastificirani lim 1,5 mm, CNC izrada po meri, dostava kurirskom službom u Suboticu.',
      url: 'https://maskezaklimu.rs/maska-za-klimu-subotica',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('subotica-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li dostavljate maske za klimu u Suboticu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, dostavljamo maske za klimu u Suboticu i Vojvodinu kurirskom službom. Rok isporuke je 1–2 radna dana od otpremanja, a rok izrade je 5–7 radnih dana.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kolika je cena maske za klimu sa dostavom u Suboticu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna maska za klimu dimenzija 900 × 650 × 440 mm iznosi 12.480 RSD.'
          }
        },
        {
          '@type': 'Question',
          name: 'Mogu li naručiti masku za klimu po meri za Suboticu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Izrađujemo svaku masku prema dimenzijama vaše spoljne jedinice. Pošaljite mere, odaberite šaru i boju – dostavićemo u Suboticu.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko traje dostava maske za klimu u Suboticu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dostava u Suboticu traje 1–2 radna dana od otpremanja. Ukupno od narudžbine do isporuke računajte 6–9 radnih dana.'
          }
        }
      ]
    });

    this.seo.setJsonLd('subotica-breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Maske za klimu', item: 'https://maskezaklimu.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Maska za klimu Subotica', item: 'https://maskezaklimu.rs/maska-za-klimu-subotica' }
      ]
    });

    this.seo.setJsonLd('subotica-localbusiness-schema', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Maske za klimu – dostava u Suboticu',
      url: 'https://maskezaklimu.rs/maska-za-klimu-subotica',
      telephone: '+381659775995',
      areaServed: [
        { '@type': 'City', name: 'Subotica' },
        { '@type': 'Country', name: 'Serbia' }
      ],
      priceRange: 'RSD 10980-12480',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maska-za-klimu-nis',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maska-za-klimu-nis.component.html',
  styleUrl: './maska-za-klimu-nis.component.css'
})
export class MaskaZaKlimuNisComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maska za klimu Niš – Dostava i izrada po meri | maskezaklimu.rs',
      description: 'Maska za klimu Niš – dekorativne i zaštitne maske za spoljne jedinice klima uređaja. Plastificirani lim 1,5 mm, CNC izrada po meri, dostava kurirskom službom u Niš.',
      url: 'https://maskezaklimu.rs/maska-za-klimu-nis',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('nis-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li dostavljate maske za klimu u Niš?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, dostavljamo maske za klimu u Niš i sva okolna mesta kurirskom službom. Rok isporuke je 1–2 radna dana od otpremanja, a rok izrade standardnog modela je 5–7 radnih dana.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kolika je cena maske za klimu sa dostavom u Niš?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna maska za klimu dimenzija 900 × 650 × 440 mm iznosi 12.480 RSD. Dostava kurirskom službom u Niš je uključena u cenu.'
          }
        },
        {
          '@type': 'Question',
          name: 'Mogu li naručiti masku za klimu po meri za Niš?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Izrađujemo maske za klimu po meri prema dimenzijama vaše spoljne jedinice. Pošaljite nam dimenzije i dobićete ponudu. Dostava u Niš kurirskom službom.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko traje dostava maske za klimu u Niš?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dostava u Niš traje 1–2 radna dana od otpremanja. Rok izrade standardne maske je 5–7 radnih dana, tako da ukupno računajte 6–9 dana od narudžbine.'
          }
        }
      ]
    });

    this.seo.setJsonLd('nis-breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Maske za klimu', item: 'https://maskezaklimu.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Maska za klimu Niš', item: 'https://maskezaklimu.rs/maska-za-klimu-nis' }
      ]
    });

    this.seo.setJsonLd('nis-localbusiness-schema', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Maske za klimu – dostava u Niš',
      url: 'https://maskezaklimu.rs/maska-za-klimu-nis',
      telephone: '+381659775995',
      areaServed: [
        { '@type': 'City', name: 'Niš' },
        { '@type': 'Country', name: 'Serbia' }
      ],
      priceRange: 'RSD 10980-12480',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });
  }
}

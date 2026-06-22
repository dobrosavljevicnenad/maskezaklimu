import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maska-za-klimu-cacak',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maska-za-klimu-cacak.component.html',
  styleUrl: './maska-za-klimu-cacak.component.css'
})
export class MaskaZaKlimuCacakComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maska za klimu Čačak – Dostava i izrada po meri | maskezaklimu.rs',
      description: 'Maska za klimu Čačak – dekorativne i zaštitne maske za spoljne jedinice klima uređaja. Plastificirani lim 1,5 mm, CNC izrada po meri, dostava kurirskom službom u Čačak.',
      url: 'https://maskezaklimu.rs/maska-za-klimu-cacak',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('cacak-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li dostavljate maske za klimu u Čačak?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, dostavljamo maske za klimu u Čačak i zapadnu Srbiju kurirskom službom. Rok isporuke je 1–2 radna dana od otpremanja, a rok izrade je 5–7 radnih dana.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kolika je cena maske za klimu sa dostavom u Čačak?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna maska za klimu dimenzija 900 × 650 × 440 mm iznosi 12.480 RSD.'
          }
        },
        {
          '@type': 'Question',
          name: 'Mogu li naručiti masku za klimu po meri za Čačak?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Svaka maska se pravi prema vašim merama. Pošaljite dimenzije spoljne jedinice i odaberite šaru i boju – dostavićemo u Čačak.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko traje dostava maske za klimu u Čačak?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dostava u Čačak traje 1–2 radna dana od otpremanja. Ukupno od narudžbine računajte 6–9 radnih dana.'
          }
        }
      ]
    });

    this.seo.setJsonLd('cacak-breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Maske za klimu', item: 'https://maskezaklimu.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Maska za klimu Čačak', item: 'https://maskezaklimu.rs/maska-za-klimu-cacak' }
      ]
    });

    this.seo.setJsonLd('cacak-localbusiness-schema', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Maske za klimu – dostava u Čačak',
      url: 'https://maskezaklimu.rs/maska-za-klimu-cacak',
      telephone: '+381659775995',
      areaServed: [
        { '@type': 'City', name: 'Čačak' },
        { '@type': 'Country', name: 'Serbia' }
      ],
      priceRange: 'RSD 10980-12480',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });
  }
}

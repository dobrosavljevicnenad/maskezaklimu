import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maska-za-klimu-krusevac',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maska-za-klimu-krusevac.component.html',
  styleUrl: './maska-za-klimu-krusevac.component.css'
})
export class MaskaZaKlimuKrusevacComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maska za klimu Kruševac – Dostava i izrada po meri | maskezaklimu.rs',
      description: 'Maska za klimu Kruševac – dekorativne i zaštitne maske za spoljne jedinice klima uređaja. Plastificirani lim 1,5 mm, CNC izrada po meri, dostava kurirskom službom u Kruševac i Rasinski okrug.',
      url: 'https://maskezaklimu.rs/maska-za-klimu-krusevac',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp',
      imageAlt: 'Maska za klimu Kruševac – dekorativna zaštita za spoljnu jedinicu klima uređaja, model Sitni listovi',
      imageWidth: 1024,
      imageHeight: 1024
    });

    this.seo.setJsonLd('krusevac-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li dostavljate maske za klimu u Kruševac?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, dostavljamo maske za klimu u Kruševac i ceo Rasinski okrug kurirskom službom. Rok isporuke je 1–2 radna dana od otpremanja, a rok izrade standardnog modela je 5–7 radnih dana.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kolika je cena maske za klimu sa dostavom u Kruševac?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna maska za klimu dimenzija 900 × 650 × 440 mm iznosi 13.480 RSD, bez obzira na grad isporuke.'
          }
        },
        {
          '@type': 'Question',
          name: 'Mogu li naručiti masku za klimu po meri za Kruševac?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Svaka maska se pravi prema merama vaše spoljne jedinice. Pošaljite dimenzije i odaberite šaru i boju – dostavićemo u Kruševac.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko traje dostava maske za klimu u Kruševac?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dostava u Kruševac traje 1–2 radna dana od otpremanja. Ukupno od narudžbine do prijema računajte 6–9 radnih dana.'
          }
        }
      ]
    });

    this.seo.setJsonLd('krusevac-breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Maske za klimu', item: 'https://maskezaklimu.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Maska za klimu Kruševac', item: 'https://maskezaklimu.rs/maska-za-klimu-krusevac' }
      ]
    });

    this.seo.setJsonLd('krusevac-localbusiness-schema', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Maske za klimu – dostava u Kruševac',
      url: 'https://maskezaklimu.rs/maska-za-klimu-krusevac',
      telephone: '+381659775995',
      areaServed: [
        { '@type': 'City', name: 'Kruševac' },
        { '@type': 'Country', name: 'Serbia' }
      ],
      priceRange: 'RSD 13480',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });
  }
}

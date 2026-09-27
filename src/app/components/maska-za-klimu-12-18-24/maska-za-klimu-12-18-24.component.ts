import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maska-za-klimu-12-18-24',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maska-za-klimu-12-18-24.component.html',
  styleUrl: './maska-za-klimu-12-18-24.component.css'
})
export class MaskaZaKlimu121824Component implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maska za klimu 12, 18 i 24 – dimenzije po snazi klime | maskezaklimu.rs',
      description: 'Maska za klimu 12, 18 i 24 (BTU) – tabela okvirnih dimenzija spoljne jedinice i preporučenog razmaka za ventilaciju, uz izradu po meri. Cena od 13.480 RSD.',
      url: 'https://maskezaklimu.rs/maska-za-klimu-12-18-24',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('velicine-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Koja maska za klimu odgovara klimi od 12 (12.000 BTU)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Spoljne jedinice klima uređaja od 9.000–12.000 BTU obično su okvirno 700–800 × 540–600 × 270–300 mm. Naša standardna maska za klimu u veličini S (900 × 650 × 440 mm) u većini slučajeva odgovara ovoj veličini. Tačna dimenzija zavisi od proizvođača i modela, pa preporučujemo da izmerite svoju jedinicu pre porudžbine.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koja maska za klimu odgovara klimi od 18 (18.000 BTU)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Spoljne jedinice od 18.000 BTU najčešće su okvirno 800–900 × 600–700 × 300–350 mm. Maska u veličini S (900 × 650 × 440 mm) u većini slučajeva odgovara i ovoj klasi, a veličina M (900 × 650 × 550 mm) daje više prostora iza dublje jedinice, po istoj ceni. Kod graničnih dimenzija preporučujemo izradu po meri radi sigurnog uklapanja.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li ista maska odgovara i klimi od 24 (24.000 BTU)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ne uvek. Spoljne jedinice od 24.000 BTU i više su znatno veće i variraju po dimenzijama od proizvođača do proizvođača (okvirno 900–970 × 700–810 × 350–410 mm, kod pojedinih modela i više). Za ovu klasu preporučujemo masku za klimu po meri, izrađenu prema tačnim merama vaše jedinice.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliki razmak treba ostaviti između maske i klime radi ventilacije?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kao opštu preporuku, ostavite najmanje 5–10 cm slobodnog prostora sa strane usisa vazduha, a nikako ne zaklanjajte stranu sa koje klima izbacuje vazduh. Za tačan razmak uvek proverite uputstvo proizvođača vašeg klima uređaja – naše maske se projektuju sa dovoljno perforacija za neometan protok vazduha.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kako da budem siguran da će maska tačno odgovarati mojoj klimi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Najsigurnije rešenje je maska za klimu po meri – pošaljete nam širinu, visinu i dubinu spoljne jedinice, a mi izrađujemo masku tačno prema tim merama. Time izbegavate rizik pogrešne procene na osnovu okvirnih tabela po snazi klime.'
          }
        }
      ]
    });

    this.seo.setJsonLd('velicine-breadcrumb-schema', {
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
          name: 'Maska za klimu 12, 18 i 24',
          item: 'https://maskezaklimu.rs/maska-za-klimu-12-18-24'
        }
      ]
    });

    this.seo.setJsonLd('velicine-webpage-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://maskezaklimu.rs/maska-za-klimu-12-18-24#webpage',
      name: 'Maska za klimu 12, 18 i 24 – dimenzije po snazi klime',
      url: 'https://maskezaklimu.rs/maska-za-klimu-12-18-24',
      description: 'Okvirne dimenzije spoljnih jedinica i preporučene mere maske za klimu prema snazi uređaja (12, 18 i 24), uz preporuku za razmak potreban za ventilaciju.',
      inLanguage: 'sr-RS'
    });
  }
}

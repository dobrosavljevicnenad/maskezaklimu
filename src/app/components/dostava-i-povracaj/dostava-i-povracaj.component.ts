import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-dostava-i-povracaj',
  standalone: true,
  imports: [],
  templateUrl: './dostava-i-povracaj.component.html',
  styleUrl: './dostava-i-povracaj.component.css'
})
export class DostavaIPovracajComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Dostava i povraćaj – Maske za klimu | maskezaklimu.rs',
      description: 'Dostava maski za klimu širom Srbije za 5–7 radnih dana. Plaćanje pouzećem. Povraćaj robe u roku od 14 dana bez dodatnih troškova.',
      url: 'https://maskezaklimu.rs/dostava-i-povracaj',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('dostava-webpage-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Dostava i povraćaj',
      url: 'https://maskezaklimu.rs/dostava-i-povracaj',
      description: 'Uslovi dostave i povraćaja robe za maske za klimu.',
      inLanguage: 'sr-RS',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Maske za klimu', item: 'https://maskezaklimu.rs/' },
          { '@type': 'ListItem', position: 2, name: 'Dostava i povraćaj', item: 'https://maskezaklimu.rs/dostava-i-povracaj' }
        ]
      }
    });
  }
}

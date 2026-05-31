import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-o-nama',
  standalone: true,
  imports: [],
  templateUrl: './o-nama.component.html',
  styleUrl: './o-nama.component.css'
})
export class ONamaComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'O nama – SZMR Đorđević | Maske za klimu | maskezaklimu.rs',
      description: 'Saznajte više o nama: SZMR Đorđević iz Smedereva, izrađujemo dekorativne maske za klimu od plastificiranog lima 1.5 mm. CNC izrada po meri, dostava širom Srbije.',
      url: 'https://maskezaklimu.rs/o-nama',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('o-nama-schema', {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'O nama – Maske za klimu',
      url: 'https://maskezaklimu.rs/o-nama',
      description: 'Informacije o proizvođaču dekorativnih maski za klimu SZMR Đorđević, Smederevo.',
      inLanguage: 'sr-RS',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Maske za klimu', item: 'https://maskezaklimu.rs/' },
          { '@type': 'ListItem', position: 2, name: 'O nama', item: 'https://maskezaklimu.rs/o-nama' }
        ]
      }
    });
  }
}

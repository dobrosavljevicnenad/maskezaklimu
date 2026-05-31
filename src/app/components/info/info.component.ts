import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Informacije o maskama za klimu – materijal, dimenzije, izrada | maskezaklimu.rs',
      description: 'Sve što trebate znati o maskama za klimu: standardne dimenzije 90×65×44 cm, plastificirani lim 1.5 mm, CNC izrada po meri, izbor boja, jednostavna montaža. Izrada i dostava širom Srbije.',
      url: 'https://maskezaklimu.rs/info',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('info-webpage-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Informacije o maskama za klimu',
      url: 'https://maskezaklimu.rs/info',
      description: 'Informacije o materijalima, dimenzijama, izradi i montaži maski za klimu.',
      inLanguage: 'sr-RS',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Maske za klimu', item: 'https://maskezaklimu.rs/' },
          { '@type': 'ListItem', position: 2, name: 'Informacije', item: 'https://maskezaklimu.rs/info' }
        ]
      }
    });
  }
}

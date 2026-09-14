import { Component, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NovostiService, Novost } from '../../services/novosti.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-novosti',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './novosti.component.html',
  styleUrl: './novosti.component.css'
})
export class NovostiComponent implements OnInit {
  novosti: Novost[] = [];

  constructor(private novostiService: NovostiService, private seo: SeoService) {
    // Vidi home.component.ts: bez effect()-a bi prerenderovani HTML ostao
    // prazan jer se novosti.json učitava asinhrono preko HttpClient-a.
    effect(() => {
      const n = this.novostiService.novosti();
      if (n.length > 0) {
        this.novosti = [...n].sort((a, b) => b.datum.localeCompare(a.datum));
      }
    });
  }

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Novosti i saveti o maskama za klimu | maskezaklimu.rs',
      description: 'Saveti, vodiči i novosti o dekorativnim i zaštitnim maskama za spoljne jedinice klima uređaja – kada ih postaviti, održavanje i zakonske izmene.',
      url: 'https://maskezaklimu.rs/novosti',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('novosti-breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Maske za klimu', item: 'https://maskezaklimu.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Novosti', item: 'https://maskezaklimu.rs/novosti' }
      ]
    });
  }
}

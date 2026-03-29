import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MaskaService } from '../../services/maska.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  maske: any[] = [];

  constructor(
    private maskaService: MaskaService,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.maske = this.maskaService.getMaske();

    this.seo.updateSeo({
      title: 'Maske za klimu | Dekorativne i zaštitne maske za klime',
      description: 'Maske za klimu od plastificiranog lima za spoljne jedinice klima uređaja. Dekorativne i zaštitne maske za klime, izrada po meri, izbor boja i dostava širom Srbije.',
      url: 'https://maskezaklimu.rs/',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('home-page-schema', {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Maske za klimu',
      url: 'https://maskezaklimu.rs/',
      description: 'Dekorativne i zaštitne maske za spoljne jedinice klima uređaja.',
      inLanguage: 'sr-RS'
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-galerija',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './galerija.component.html',
  styleUrl: './galerija.component.css'
})
export class GalerijaComponent implements OnInit {
    images = [
    'maska_za_klimu_pravougaonici_crna_gora_drvo.webp',
    'maska_za_klimu_pravougaonici_crna_gora_bocna.webp',
    'maska_za_klimu_pravougaonici_crna_gora_nocna.webp',
    'maska_za_klimu_smederevo_instalacija.webp',
    'maska_za_klimu_instalacija_zemun.webp',
    'maska_za_klimu_lestane_instalacija.webp',
    'maska-za-klimu-lekino-brdo-instalacija.webp'
  ];

  positions = [
    'object-[center_top]',   // 1
    'object-[center_20%]',   // 2
    'object-[center_25%]',   // 3
    'object-[center_60%]',   // 4
    'object-[center_40%]',   // 5
    'object-[center_75%]',   // 6
    'object-[center_45%]',   // 7
  ];

  // tagovi po slici – koriste se za pretragu i brze filtere (nezavisno od naziva fajla)
  private readonly tagsMap: Record<string, string[]> = {
    'maska_za_klimu_pravougaonici_crna_gora_drvo.webp': ['ukrasna', 'spoljna', 'kutija', 'pravougaonici', 'metalna', 'drvena fasada'],
    'maska_za_klimu_pravougaonici_crna_gora_bocna.webp': ['ukrasna', 'spoljna', 'kutija', 'pravougaonici', 'metalna'],
    'maska_za_klimu_pravougaonici_crna_gora_nocna.webp': ['ukrasna', 'spoljna', 'kutija', 'pravougaonici', 'metalna'],
    'maska_za_klimu_smederevo_instalacija.webp': ['spoljna', 'zastita', 'instalacija', 'smederevo', 'metalna'],
    'maska_za_klimu_instalacija_zemun.webp': ['spoljna', 'zastita', 'instalacija', 'zemun', 'metalna'],
    'maska_za_klimu_lestane_instalacija.webp': ['spoljna', 'zastita', 'instalacija', 'lestane', 'metalna'],
    'maska-za-klimu-lekino-brdo-instalacija.webp': ['spoljna', 'zastita', 'instalacija', 'lekino brdo', 'metalna']
  };

  filteredImages: string[] = [];
  searchTerm = '';

  // ako već imaš positions[] kao niz, lakše je preći na mapu:
  // image file -> className
  positionsMap: Record<string, string> = {};

  constructor(private route: ActivatedRoute, private router: Router, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Galerija radova – Maske za klimu ugrađene kod kupaca | maskezaklimu.rs',
      description: 'Pogledajte galeriju ugrađenih maski za klimu kod naših kupaca – realne instalacije u Beogradu, Smederevu, Zemunu i drugim mestima širom Srbije.',
      url: 'https://maskezaklimu.rs/galerija',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('galerija-schema', {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: 'Galerija radova – Maske za klimu',
      url: 'https://maskezaklimu.rs/galerija',
      description: 'Galerija instalacija dekorativnih maski za klimu kod kupaca širom Srbije.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Maske za klimu', item: 'https://maskezaklimu.rs/' },
          { '@type': 'ListItem', position: 2, name: 'Galerija', item: 'https://maskezaklimu.rs/galerija' }
        ]
      }
    });

    // inicijalno
    this.filteredImages = [...this.images];

    // uzmi ?s=
    const s = (this.route.snapshot.queryParamMap.get('s') || '').trim();
    if (s) {
      this.searchTerm = s;
      this.applyFilter(s);
    }
  }

  onSearchChange(value: string): void {
    const v = (value || '').trim();
    this.applyFilter(v);

    // update URL-a (da SearchAction bude legit)
    this.router.navigate([], {
      queryParams: v ? { s: v } : { s: null },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }

  applyQuickFilter(term: string): void {
    this.searchTerm = term;
    this.onSearchChange(term);
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.onSearchChange('');
  }

  private applyFilter(term: string): void {
    const t = this.normalize(term);
    if (!t) {
      this.filteredImages = [...this.images];
      return;
    }

    // filtriraj po nazivu fajla i po dodeljenim tagovima
    this.filteredImages = this.images.filter(img => {
      const name = this.normalize(img);
      const tags = (this.tagsMap[img] || []).map(tag => this.normalize(tag));
      return name.includes(t) || tags.some(tag => tag.includes(t));
    });
  }

  captionFor(image: string): string {
    // caption koji “hvata” semantiku
    const name = this.normalizeImageName(image);
    return `Dekorativna maska za klimu – ${name}`;
  }

  normalizeImageName(image: string): string {
    return image
      .replace('.webp', '')
      .replace(/[_-]+/g, ' ')
      .trim();
  }

  private normalize(s: string): string {
    return (s || '')
      .toLowerCase()
      // sr latinica normalizacija
      .replace(/č/g, 'c').replace(/ć/g, 'c')
      .replace(/đ/g, 'dj')
      .replace(/š/g, 's').replace(/ž/g, 'z');
  }
}

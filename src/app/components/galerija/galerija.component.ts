import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-galerija',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './galerija.component.html',
  styleUrl: './galerija.component.css'
})
export class GalerijaComponent {
    images = [
    'cg_2.webp',
    'cg_3.webp',
    'cg_nocna.webp',
    'master.webp',
    'zemun.webp',
    'rados.webp',
    'lekino_brdo.webp'
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

  filteredImages: string[] = [];
  searchTerm = '';

  // ako već imaš positions[] kao niz, lakše je preći na mapu:
  // image file -> className
  positionsMap: Record<string, string> = {};

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
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
    // const t = this.normalize(term);
    // if (!t) {
    //   this.filteredImages = [...this.images];
    //   return;
    // }

    // // filtriraj po nazivu fajla (možeš i po "tagovima" kasnije)
    // this.filteredImages = this.images.filter(img => {
    //   const name = this.normalize(img);
    //   return name.includes(t);
    // });
      this.filteredImages = [...this.images];
      return;
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

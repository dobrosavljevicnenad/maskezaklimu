import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MaskaService } from '../../services/maska.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-maska-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './maska-detail.component.html',
  styleUrls: ['./maska-detail.component.scss']
})
export class MaskaDetailComponent implements OnInit {
  maska: any;
  izabranaSlika = '';
  uvelicano = false;
  kolicina = 1;
  izabranaBoja = '';
  drugaBoja = '';

  constructor(
    private route: ActivatedRoute,
    private maskaService: MaskaService,
    @Inject(PLATFORM_ID) private platformId: Object

  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }

    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.maska = this.maskaService.getMaskaBySlug(slug);
      if (this.maska && this.maska.slika?.length > 0) {
        this.izabranaSlika = this.maska.slika[0].url;
      }
    }
  }

  promeniSliku(slika: string) {
    this.izabranaSlika = slika;
  }

  otvoriUvelicanuSliku() {
    this.uvelicano = true;
  }

  zatvoriUvelicanuSliku() {
    this.uvelicano = false;
  }

  sledecaSlika(event: Event) {
    event.stopPropagation();
    const slike = this.maska.slika.map((s: { url: string }) => s.url);
    const index = slike.indexOf(this.izabranaSlika);
    if (index < slike.length - 1) {
      this.izabranaSlika = slike[index + 1];
    }
  }

  prethodnaSlika(event: Event) {
    event.stopPropagation();
    const slike = this.maska.slika.map((s: { url: string }) => s.url);
    const index = slike.indexOf(this.izabranaSlika);
    if (index > 0) {
      this.izabranaSlika = slike[index - 1];
    }
  }

  imaSledecu(): boolean {
    const slike = this.maska.slika.map((s: { url: string }) => s.url);
    return slike.indexOf(this.izabranaSlika) < slike.length - 1;
  }

  imaPrethodnu(): boolean {
    const slike = this.maska.slika.map((s: { url: string }) => s.url);
    return slike.indexOf(this.izabranaSlika) > 0;
  }

  povecajKolicinu() {
    this.kolicina++;
  }

  smanjiKolicinu() {
    if (this.kolicina > 1) this.kolicina--;
  }

  onKolicinaChange() {
    if (this.kolicina < 1) this.kolicina = 1;
  }

  dodajUKorpu() {
    const boja = this.drugaBoja.trim() || this.izabranaBoja;
    if (!boja) {
      alert('Molimo izaberite ili unesite boju.');
      return;
    }

    this.maskaService.addToCart(this.maska.id, boja, this.kolicina);
  }
}

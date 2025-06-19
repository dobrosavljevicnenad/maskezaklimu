import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MaskaService } from '../../services/maska.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

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
    private meta: Meta,
    private title: Title,
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
    if (this.maska) {
        const naziv = this.maska.naziv || 'Maska za klimu';
        const opis = this.maska.opis?.slice(0, 160) || `Pogledajte masku za klimu: ${naziv}.`;
        const url = `https://maskezaklimu.rs/proizvod/${this.maska.slug}`;
        const slika = this.maska.slika?.[0]?.url || 'https://maskezaklimu.rs/assets/maska_za_profil.webp';

        this.title.setTitle(`${naziv}`);
        this.meta.updateTag({ name: 'description', content: opis });
        this.meta.updateTag({ name: 'canonical', content: url });

        // Open Graph
        this.meta.updateTag({ property: 'og:title', content: naziv });
        this.meta.updateTag({ property: 'og:description', content: opis });
        this.meta.updateTag({ property: 'og:url', content: url });
        this.meta.updateTag({ property: 'og:image', content: slika });

        // Twitter card
        this.meta.updateTag({ name: 'twitter:title', content: naziv });
        this.meta.updateTag({ name: 'twitter:description', content: opis });
        this.meta.updateTag({ name: 'twitter:image', content: slika });
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
    alert('Dodali ste proizvod u korpu.');
  }
}

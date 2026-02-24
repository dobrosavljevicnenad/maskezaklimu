import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MaskaService } from '../../services/maska.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-maska-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './maska-detail.component.html',
  styleUrls: ['./maska-detail.component.scss']
})
export class MaskaDetailComponent implements OnInit, OnDestroy {
  maska: any;
  izabranaSlika = '';
  uvelicano = false;
  kolicina = 1;
  izabranaBoja = '';
  drugaBoja = '';

  private sub?: Subscription;

  // Promeni ako koristiš www ili drugu bazu
  private readonly SITE = 'https://maskezaklimu.rs';

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

    // ✅ Reaguje i kad se menja slug bez reload-a
    this.sub = this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (!slug) return;

      const found = this.maskaService.getMaskaBySlug(slug);
      this.maska = found || null;

      // reset state
      this.kolicina = 1;
      this.izabranaBoja = '';
      this.drugaBoja = '';
      this.uvelicano = false;

      if (this.maska?.slika?.length > 0) {
        this.izabranaSlika = this.maska.slika[0].url;
      } else {
        this.izabranaSlika = '';
      }

      // ✅ SEO tags
      this.applySeo();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private applySeo(): void {
    if (!this.maska) return;

    const nazivRaw = (this.maska.naziv || 'Maska za klimu').trim();

    // ✅ Title šablon (pomaže CTR + query pokrivenost)
    const title = `${nazivRaw} | Maska za klimu – cena, izrada po meri (5–7 dana)`;

    // ✅ Description (155–165 karaktera idealno)
    const opisRaw = (this.maska.opis || '').replace(/\s+/g, ' ').trim();
    const description =
      opisRaw.length >= 120
        ? opisRaw.slice(0, 160)
        : `Dekorativna i zaštitna maska za klimu (spoljna jedinica). Izrada po meri, plastificirani lim 1.5mm, brza isporuka 5–7 dana.`;

    const url = `${this.SITE}/proizvod/${this.maska.slug}`;

    // ✅ OG slika mora biti apsolutna
    const imgRel = this.maska.slika?.[0]?.url || '/assets/maska-za-klimu-sitni-listovi.webp';
    const image = this.toAbsoluteUrl(imgRel);

    // ✅ Canonical kao LINK, ne meta
    this.setCanonical(url);

    // Title
    this.title.setTitle(title);

    // Basic
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large' });

    // Open Graph
    this.meta.updateTag({ property: 'og:type', content: 'product' });
    this.meta.updateTag({ property: 'og:locale', content: 'sr_RS' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Maske za klimu' });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:image:secure_url', content: image });
    this.meta.updateTag({ property: 'og:image:alt', content: `${nazivRaw} – dekorativna maska za klimu` });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  private toAbsoluteUrl(url: string): string {
    if (!url) return `${this.SITE}/assets/maska-za-klimu-sitni-listovi.webp`;
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    if (url.startsWith('/')) return `${this.SITE}${url}`;
    return `${this.SITE}/${url}`;
  }

  private setCanonical(url: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const head = document.head;

    // ukloni sve stare canonical linkove (da nema duplikata)
    const existing = head.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]');
    existing.forEach(el => el.remove());

    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    head.appendChild(link);
  }

  promeniSliku(slika: string) {
    this.izabranaSlika = slika;
    // opcionalno: update OG image kad promeni sliku (nema veliki SEO uticaj, više share)
    // this.applySeo();
  }

  otvoriUvelicanuSliku() {
    this.uvelicano = true;
  }

  zatvoriUvelicanuSliku() {
    this.uvelicano = false;
  }

  sledecaSlika(event: Event) {
    event.stopPropagation();
    const slike = (this.maska?.slika || []).map((s: { url: string }) => s.url);
    const index = slike.indexOf(this.izabranaSlika);
    if (index < slike.length - 1) {
      this.izabranaSlika = slike[index + 1];
    }
  }

  prethodnaSlika(event: Event) {
    event.stopPropagation();
    const slike = (this.maska?.slika || []).map((s: { url: string }) => s.url);
    const index = slike.indexOf(this.izabranaSlika);
    if (index > 0) {
      this.izabranaSlika = slike[index - 1];
    }
  }

  imaSledecu(): boolean {
    const slike = (this.maska?.slika || []).map((s: { url: string }) => s.url);
    return slike.indexOf(this.izabranaSlika) < slike.length - 1;
  }

  imaPrethodnu(): boolean {
    const slike = (this.maska?.slika || []).map((s: { url: string }) => s.url);
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

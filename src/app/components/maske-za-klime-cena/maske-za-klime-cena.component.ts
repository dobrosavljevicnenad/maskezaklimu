import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maske-za-klime-cena',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maske-za-klime-cena.component.html',
  styleUrl: './maske-za-klime-cena.component.css'
})
export class MaskeZaKlimeCenaComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maske za klime cena | Cena maski za klimu po meri | maskezaklimu.rs',
      description: 'Maske za klime cena – saznajte cenu standardnih i maski za klimu po meri. Metalne dekorativne maske za spoljne jedinice, plastificirani lim, izbor boja i dostava širom Srbije.',
      url: 'https://maskezaklimu.rs/maske-za-klime-cena',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('price-page-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Maske za klime cena',
      url: 'https://maskezaklimu.rs/maske-za-klime-cena',
      description: 'Informacije o ceni dekorativnih i zaštitnih maski za klimu.',
      inLanguage: 'sr-RS'
    });
  }
}

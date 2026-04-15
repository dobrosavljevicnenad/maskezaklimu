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

    this.seo.setJsonLd('price-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kolika je cena standardne maske za klimu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cena standardne maske za klimu dimenzija 900 × 650 × 440 mm iznosi 12.480 RSD. Ova dimenzija odgovara velikom broju spoljnih jedinica klima uređaja.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li je standardna cena ista za sve modele?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna cena važi za standardne dimenzije, dok modeli po meri i složeniji dezeni mogu imati drugačiju cenu.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li cena zavisi od boje?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Osnovne boje uglavnom ne menjaju cenu, dok posebne nijanse ili specifične završne obrade mogu uticati na konačnu ponudu.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li radite maske za veće klime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Ako imate veću spoljnu jedinicu, možemo uraditi masku za klimu po meri na osnovu tačnih dimenzija koje nam pošaljete.'
          }
        }
      ]
    });

    this.seo.setJsonLd('price-breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Maske za klimu',
          item: 'https://maskezaklimu.rs/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Maske za klime cena',
          item: 'https://maskezaklimu.rs/maske-za-klime-cena'
        }
      ]
    });
  }
}

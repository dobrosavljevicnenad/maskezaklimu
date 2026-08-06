import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maska-za-klimu-sabac',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maska-za-klimu-sabac.component.html',
  styleUrl: './maska-za-klimu-sabac.component.css'
})
export class MaskaZaKlimuSabacComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maska za klimu Šabac – Dostava i izrada po meri | maskezaklimu.rs',
      description: 'Maska za klimu Šabac – dekorativne i zaštitne maske za spoljne jedinice klima uređaja. Plastificirani lim 1,5 mm, CNC izrada po meri, dostava kurirskom službom u Šabac i Mačvansku oblast.',
      url: 'https://maskezaklimu.rs/maska-za-klimu-sabac',
      image: 'https://maskezaklimu.rs/assets/maska_za_klimu_kvadratici.webp',
      imageAlt: 'Maska za klimu Šabac – dekorativna zaštita za spoljnu jedinicu klima uređaja, model Kvadratići',
      imageWidth: 1024,
      imageHeight: 1024
    });

    this.seo.setJsonLd('sabac-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li dostavljate maske za klimu u Šabac?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, dostavljamo maske za klimu u Šabac i Mačvansku oblast kurirskom službom. Rok isporuke je 1–2 radna dana od otpremanja, a rok izrade standardnog modela je 5–7 radnih dana.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kolika je cena maske za klimu sa dostavom u Šabac?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna maska za klimu dimenzija 900 × 650 × 440 mm iznosi 13.480 RSD. Dostava kurirskom službom u Šabac.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li mogu da naručim masku za klimu po meri za Šabac?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Izrađujemo maske za klimu po meri prema dimenzijama vaše spoljne jedinice. Pošaljite nam dimenzije i dobićete ponudu. Dostava u Šabac kurirskom službom.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koje šare su dostupne za masku za klimu u Šapcu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nudimo više dekorativnih šara: sitni listovi, krupni listovi, pravougaonici, geometrijska haotična šara, kvadratici i minimalistički rezovi. Sve u RAL bojama po izboru.'
          }
        }
      ]
    });

    this.seo.setJsonLd('sabac-breadcrumb-schema', {
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
          name: 'Maska za klimu Šabac',
          item: 'https://maskezaklimu.rs/maska-za-klimu-sabac'
        }
      ]
    });

    this.seo.setJsonLd('sabac-localbusiness-schema', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Maske za klimu – dostava u Šabac',
      url: 'https://maskezaklimu.rs/maska-za-klimu-sabac',
      telephone: '+381659775995',
      areaServed: [
        { '@type': 'City', name: 'Šabac' },
        { '@type': 'Country', name: 'Serbia' }
      ],
      priceRange: 'RSD 13480',
      image: 'https://maskezaklimu.rs/assets/maska_za_klimu_kvadratici.webp'
    });
  }
}

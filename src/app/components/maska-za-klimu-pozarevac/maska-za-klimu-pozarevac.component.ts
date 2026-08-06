import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maska-za-klimu-pozarevac',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maska-za-klimu-pozarevac.component.html',
  styleUrl: './maska-za-klimu-pozarevac.component.css'
})
export class MaskaZaKlimuPozarevacComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maska za klimu Požarevac – Dostava i izrada po meri | maskezaklimu.rs',
      description: 'Maska za klimu Požarevac – dekorativne i zaštitne maske za spoljne jedinice klima uređaja. Plastificirani lim 1,5 mm, CNC izrada po meri, dostava kurirskom službom u Požarevac i Braničevski okrug.',
      url: 'https://maskezaklimu.rs/maska-za-klimu-pozarevac',
      image: 'https://maskezaklimu.rs/assets/maska_za_klimu_krupni_listovi.webp',
      imageAlt: 'Maska za klimu Požarevac – dekorativna zaštita za spoljnu jedinicu klima uređaja, model Krupni listovi',
      imageWidth: 650,
      imageHeight: 433
    });

    this.seo.setJsonLd('pozarevac-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li dostavljate maske za klimu u Požarevac?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, dostavljamo maske za klimu u Požarevac i Braničevski okrug kurirskom službom. Rok isporuke je 1–2 radna dana od otpremanja, a rok izrade standardnog modela je 5–7 radnih dana.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kolika je cena maske za klimu sa dostavom u Požarevac?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna maska za klimu dimenzija 900 × 650 × 440 mm iznosi 13.480 RSD. Dostava kurirskom službom u Požarevac.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li mogu da naručim masku za klimu po meri za Požarevac?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Izrađujemo maske za klimu po meri prema dimenzijama vaše spoljne jedinice. Pošaljite nam dimenzije i dobićete ponudu. Dostava u Požarevac kurirskom službom.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koje šare su dostupne za masku za klimu u Požarevcu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nudimo šest dekorativnih šara: sitni listovi, krupni listovi, pravougaonici, geometrijska haotična šara, kvadratici i minimalistički oštri rezovi. Sve u RAL bojama po izboru.'
          }
        }
      ]
    });

    this.seo.setJsonLd('pozarevac-breadcrumb-schema', {
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
          name: 'Maska za klimu Požarevac',
          item: 'https://maskezaklimu.rs/maska-za-klimu-pozarevac'
        }
      ]
    });

    this.seo.setJsonLd('pozarevac-localbusiness-schema', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Maske za klimu – dostava u Požarevac',
      url: 'https://maskezaklimu.rs/maska-za-klimu-pozarevac',
      telephone: '+381659775995',
      areaServed: [
        { '@type': 'City', name: 'Požarevac' },
        { '@type': 'Country', name: 'Serbia' }
      ],
      priceRange: 'RSD 13480',
      image: 'https://maskezaklimu.rs/assets/maska_za_klimu_krupni_listovi.webp'
    });
  }
}

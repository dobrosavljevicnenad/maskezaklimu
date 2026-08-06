import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maska-za-klimu-zemun',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maska-za-klimu-zemun.component.html',
  styleUrl: './maska-za-klimu-zemun.component.css'
})
export class MaskaZaKlimuZemunComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maska za klimu Zemun – Dostava i izrada po meri | maskezaklimu.rs',
      description: 'Maska za klimu Zemun – dekorativne i zaštitne maske za spoljne jedinice klima uređaja. Plastificirani lim 1,5 mm, CNC izrada po meri, dostava kurirskom službom u Zemun.',
      url: 'https://maskezaklimu.rs/maska-za-klimu-zemun',
      image: 'https://maskezaklimu.rs/assets/maska_za_klimu_instalacija_zemun.webp',
      imageAlt: 'Maska za klimu ugrađena kod kupca u Zemunu – stvarna instalacija na spoljnoj jedinici klima uređaja',
      imageWidth: 960,
      imageHeight: 1280
    });

    this.seo.setJsonLd('zemun-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li dostavljate maske za klimu u Zemun?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, dostavljamo maske za klimu u Zemun kurirskom službom. Zemun je beogradska opština, pa rok isporuke je 1–2 radna dana od otpremanja, a rok izrade standardnog modela je 5–7 radnih dana.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kolika je cena maske za klimu sa dostavom u Zemun?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna maska za klimu dimenzija 900 × 650 × 440 mm iznosi 13.480 RSD. Dostava kurirskom službom u Zemun.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li mogu da naručim masku za klimu po meri za Zemun?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Izrađujemo maske za klimu po meri prema dimenzijama vaše spoljne jedinice. Pošaljite nam dimenzije i dobićete ponudu. Dostava u Zemun kurirskom službom.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koje šare su dostupne za masku za klimu u Zemunu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nudimo šest dekorativnih šara: sitni listovi, krupni listovi, pravougaonici, geometrijska haotična šara, kvadratici i minimalistički oštri rezovi. Sve u RAL bojama po izboru.'
          }
        }
      ]
    });

    this.seo.setJsonLd('zemun-breadcrumb-schema', {
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
          name: 'Maska za klimu Zemun',
          item: 'https://maskezaklimu.rs/maska-za-klimu-zemun'
        }
      ]
    });

    this.seo.setJsonLd('zemun-localbusiness-schema', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Maske za klimu – dostava u Zemun',
      url: 'https://maskezaklimu.rs/maska-za-klimu-zemun',
      telephone: '+381659775995',
      areaServed: [
        { '@type': 'City', name: 'Zemun' },
        { '@type': 'City', name: 'Beograd' },
        { '@type': 'Country', name: 'Serbia' }
      ],
      priceRange: 'RSD 13480',
      image: 'https://maskezaklimu.rs/assets/maska_za_klimu_instalacija_zemun.webp'
    });
  }
}

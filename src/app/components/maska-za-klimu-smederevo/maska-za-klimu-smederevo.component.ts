import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maska-za-klimu-smederevo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maska-za-klimu-smederevo.component.html',
  styleUrl: './maska-za-klimu-smederevo.component.css'
})
export class MaskaZaKlimuSmederevoComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maska za klimu Smederevo – proizvodnja i lično preuzimanje | maskezaklimu.rs',
      description: 'Maska za klimu Smederevo – ovde i proizvodimo naše dekorativne i zaštitne maske za spoljne jedinice klima uređaja. Lično preuzimanje u radionici, izrada po meri, plastificirani lim 1,5 mm.',
      url: 'https://maskezaklimu.rs/maska-za-klimu-smederevo',
      image: 'https://maskezaklimu.rs/assets/maska_za_klimu_smederevo_instalacija.webp',
      imageAlt: 'Maska za klimu ugrađena kod kupca u Smederevu – stvarna instalacija na spoljnoj jedinici klima uređaja',
      imageWidth: 1242,
      imageHeight: 2208
    });

    this.seo.setJsonLd('smederevo-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li mogu lično da preuzmem masku za klimu u Smederevu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Naša radionica se nalazi u Smederevu (Vučačka 16), pa kupci iz Smedereva i okoline mogu lično preuzeti masku, bez čekanja na kurirsku dostavu i bez troška dostave.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kolika je cena maske za klimu u Smederevu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna maska za klimu dimenzija 900 × 650 × 440 mm (S) ili 900 × 650 × 550 mm (M) iznosi 13.480 RSD, bez obzira na to da li se dostavlja kurirskom službom ili se lično preuzima u radionici.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li mogu da vidim modele uživo pre kupovine?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Pošto se izrada obavlja u Smederevu, kupci iz grada i okoline mogu se dogovoriti da vide gotove modele i materijal uživo pre poručivanja.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko traje izrada maske za klimu za kupce iz Smedereva?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rok izrade standardnog modela je 5–7 radnih dana. Pošto se proizvodnja nalazi u Smederevu, lično preuzimanje je moguće odmah po završetku izrade, bez dodatnog čekanja na transport.'
          }
        },
        {
          '@type': 'Question',
          name: 'Mogu li naručiti masku za klimu po meri u Smederevu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Pošaljite nam dimenzije vaše spoljne jedinice, željenu šaru i boju – izrađujemo masku za klimu po meri direktno u našoj radionici u Smederevu.'
          }
        }
      ]
    });

    this.seo.setJsonLd('smederevo-breadcrumb-schema', {
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
          name: 'Maska za klimu Smederevo',
          item: 'https://maskezaklimu.rs/maska-za-klimu-smederevo'
        }
      ]
    });

    this.seo.setJsonLd('smederevo-localbusiness-schema', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Maske za klimu – proizvodnja u Smederevu',
      url: 'https://maskezaklimu.rs/maska-za-klimu-smederevo',
      telephone: '+381659775995',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Vučačka 16',
        addressLocality: 'Smederevo',
        postalCode: '11300',
        addressCountry: 'RS'
      },
      areaServed: [
        { '@type': 'City', name: 'Smederevo' },
        { '@type': 'Country', name: 'Serbia' }
      ],
      priceRange: 'RSD 13480',
      image: 'https://maskezaklimu.rs/assets/maska_za_klimu_smederevo_instalacija.webp'
    });
  }
}

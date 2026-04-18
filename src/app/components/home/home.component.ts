import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MaskaService } from '../../services/maska.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  maske: any[] = [];

  constructor(
    private maskaService: MaskaService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.maske = this.maskaService.getMaske();

    this.seo.updateSeo({
      title: 'Maske za klimu | Maska za klimu po meri | Maske za klime cena',
      description: 'Maske za klimu od plastificiranog lima za spoljne jedinice klima uređaja. Maska za klimu po meri, ukrasne i zaštitne maske za klime, cena standardnog modela 12.480 RSD, dostava širom Srbije.',
      url: 'https://maskezaklimu.rs/',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('home-organization-schema', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://maskezaklimu.rs/#organization',
      name: 'Maske za klimu',
      alternateName: 'SZMR Đorđević',
      legalName: 'SZMR Đorđević',
      url: 'https://maskezaklimu.rs/',
      logo: 'https://maskezaklimu.rs/assets/maska_za_klimu_logo.png',
      telephone: '+381659775995',
      email: 'n.dobrosavljevic01@gmail.com',
      sameAs: [
        'https://www.facebook.com/maskezaklimu',
        'https://www.instagram.com/maske_za_klimu'
      ]
    });

    this.seo.setJsonLd('home-localbusiness-schema', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://maskezaklimu.rs/#localbusiness',
      name: 'Maske za klimu',
      url: 'https://maskezaklimu.rs/',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp',
      telephone: '+381659775995',
      priceRange: 'RSD 10980-12480',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Vučačka 16',
        addressLocality: 'Smederevo',
        postalCode: '11300',
        addressCountry: 'RS'
      },
      areaServed: {
        '@type': 'Country',
        name: 'Serbia'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '15',
        bestRating: '5',
        worstRating: '1'
      }
    });

    this.seo.setJsonLd('home-webpage-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://maskezaklimu.rs/#webpage',
      name: 'Maske za klimu | Maska za klimu po meri | Maske za klime cena',
      url: 'https://maskezaklimu.rs/',
      description: 'Maske za klimu od plastificiranog lima za spoljne jedinice klima uređaja.',
      inLanguage: 'sr-RS',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
      }
    });

    this.seo.setJsonLd('home-itemlist-schema', {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Maske za klimu',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: this.maske.length,
      itemListElement: this.maske.map((maska, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://maskezaklimu.rs/proizvod/${maska.slug}`,
        name: maska.naziv
      }))
    });

    this.seo.setJsonLd('home-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kolika je cena maske za klimu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna cena za masku dimenzija 900 × 650 × 440 mm iznosi 12.480 RSD. Za druge dimenzije radimo ponudu po meri.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li maska utiče na rad klime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ne. Naše maske za klimu projektovane su tako da ne ometaju protok vazduha i normalan rad uređaja.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li izrađujete masku za klimu po meri?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Možemo izraditi masku za klimu po meri prema dimenzijama vaše spoljne jedinice i željenoj boji.'
          }
        },
        {
          '@type': 'Question',
          name: 'Od čega su napravljene maske za klimu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sve naše maske za klimu izrađene su od plastificiranog lima debljine 1,5 mm. Ovaj materijal je otporan na koroziju, UV zrake i atmosferske uslove, što ga čini idealnim za spoljnu upotrebu.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koje dimenzije maska za klimu su dostupne?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna maska za klimu iznosi 900 × 650 × 440 mm. Pored toga, radimo i maske za klimu po meri – samo nam pošaljite dimenzije vaše spoljne jedinice i prilagodićemo ih vašim potrebama.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko traje dostava maske za klimu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardni modeli se isporučuju za 5–7 radnih dana. Maske za klimu po meri mogu zahtevati nešto duži rok izrade. Dostava se vrši kurirskom službom na celu teritoriju Srbije.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koje boje su dostupne za maske za klime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Maske za klime dostupne su u velikom broju RAL boja. Najtraženije su bela, antracit siva i crna, ali možete izabrati i boju koja odgovara vašoj fasadi. Kontaktirajte nas za detalje o dostupnim nijansama.'
          }
        }
      ]
    });

    this.seo.setJsonLd('home-breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Maske za klimu',
          item: 'https://maskezaklimu.rs/'
        }
      ]
    });
  }
}

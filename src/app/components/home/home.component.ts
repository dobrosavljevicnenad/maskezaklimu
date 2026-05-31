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
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Dragan' },
          datePublished: '2026-03-23',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Odlična saradnja, izuzetna komunikacija, preciznost svih detalja, kvalitet, velika preporuka!',
          publisher: { '@type': 'Organization', name: 'KupujemProdajem' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Radivoj Pejin' },
          datePublished: '2025-08-02',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Proizvod odličan, komunikacija fenomenalna. Za svaku preporuku!',
          publisher: { '@type': 'Organization', name: 'KupujemProdajem' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Aleksandar Markovic' },
          datePublished: '2025-07-13',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Vrlo profesionalna i brza saradnja, sve u dogovorenim rokovima i jasan dogovor.',
          publisher: { '@type': 'Organization', name: 'KupujemProdajem' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Goran T.' },
          datePublished: '2025-06-14',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Malo je reci da sam bio prijatno iznenadjen kada sam dobio porucene maske za klimu. Maske su uradjene extra kvalitetno i sada predstavljaju malo umetnicko delo na mojoj terasi. Nenad kao prodavac je vrhunski profesionalac koji je prevazisao sva moja ocekivanja. Sve preporuke. Veliko hvala za sve.',
          publisher: { '@type': 'Organization', name: 'KupujemProdajem' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Slavica Veskovic' },
          datePublished: '2025-06-12',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Perfektno! Hvala vam najlepše!',
          publisher: { '@type': 'Organization', name: 'KupujemProdajem' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Sinisa' },
          datePublished: '2025-06-02',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Sve po dogovoru, izasli su u susret sto se tice preporuke za izradu kao i za dostavu. Sve preporuke. Pozdrav',
          publisher: { '@type': 'Organization', name: 'KupujemProdajem' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Marko Stokic' },
          datePublished: '2025-05-08',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Sve je bilo po dogovoru kako smo se dogovorili! Odlican kvalitet. Hvala puno',
          publisher: { '@type': 'Organization', name: 'KupujemProdajem' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Dejan' },
          datePublished: '2025-05-05',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Neverovatno! Nenad mi je odradio 30 maski za 5 dana i to vrhunskog kvaliteta. Ovo je pravi covek za svakog kome je potrebno da se maske urade ekstra brzo i kvalitetno. Zamislite, jos mi je mimo dogovora dostavio maske o svom trosku.',
          publisher: { '@type': 'Organization', name: 'KupujemProdajem' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Danijela Dobrosavljevic' },
          datePublished: '2025-04-13',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Prezadovoljna sam sa maskama, Nenade! Samo tako nastavite! Veliki pozdrav i sve pohvale!',
          publisher: { '@type': 'Organization', name: 'KupujemProdajem' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Svetlana' },
          datePublished: '2025-04-09',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Veoma sam zadovoljna saradnjom, laka komunikacija, maske su uradjene prema zahtevu i u odličnom kvalitetu. Odgovoran, stručan i ljubazan mladić. Čista desetka za svaku preporuku.',
          publisher: { '@type': 'Organization', name: 'KupujemProdajem' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Petar Butovski' },
          datePublished: '2025-04-03',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Osoba je veoma korektna, pristojna i lako se dođe do dogovora. Preporuke i nadam se još saradnji u skorijoj budućnosti.',
          publisher: { '@type': 'Organization', name: 'KupujemProdajem' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Nikola' },
          datePublished: '2025-04-03',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Brz i lak dogovor, svaka preporuka za Nenada.',
          publisher: { '@type': 'Organization', name: 'KupujemProdajem' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Nenad' },
          datePublished: '2025-04-02',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Sve je proteklo odlično! Brza i profesionalna usluga, maska pristigla kao po dogovoru. Svaka preporuka za saradnju.',
          publisher: { '@type': 'Organization', name: 'KupujemProdajem' }
        }
      ]
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
        '@id': 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp',
        url: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp',
        name: 'Maske za klimu – dekorativna maska za klimu od plastificiranog lima',
        description: 'Maske za klimu i maska za klimu od plastificiranog lima za spoljne jedinice klima uređaja. Dekorativne maske za klime po meri.',
        caption: 'Maske za klimu – dekorativna maska za klimu od plastificiranog lima, model Sitni listovi',
        width: 1200,
        height: 800,
        encodingFormat: 'image/webp'
      }
    });

    this.seo.setJsonLd('home-images-schema', {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: 'Maske za klimu – galerija svih modela',
      description: 'Maske za klimu od plastificiranog lima – svi modeli dekorativnih maski za klime i maska za klimu za spoljne jedinice klima uređaja',
      image: [
        {
          '@type': 'ImageObject',
          url: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp',
          name: 'Maske za klimu – model Sitni listovi',
          caption: 'Dekorativna maska za klimu, model Sitni listovi – maske za klime od plastificiranog lima',
          encodingFormat: 'image/webp'
        },
        {
          '@type': 'ImageObject',
          url: 'https://maskezaklimu.rs/assets/dekorativna_maska_za_klimu_pravougaonici.webp',
          name: 'Maske za klimu – model Pravougaonici',
          caption: 'Ukrasna maska za klimu sa geometrijskim dizajnom – maske za klime, model Pravougaonici',
          encodingFormat: 'image/webp'
        },
        {
          '@type': 'ImageObject',
          url: 'https://maskezaklimu.rs/assets/maska_za_klimu_krupni_listovi.webp',
          name: 'Maska za klimu – model Krupni listovi',
          caption: 'Metalna maska za klimu sa krupnim listovima – maske za spoljnu jedinicu klima uređaja',
          encodingFormat: 'image/webp'
        },
        {
          '@type': 'ImageObject',
          url: 'https://maskezaklimu.rs/assets/maska_za_klimu_haoticna_sara.webp',
          name: 'Maske za klimu – model Haotična šara',
          caption: 'Dekorativna maska za klimu savremenog dizajna – maske za klime, model Haotična šara',
          encodingFormat: 'image/webp'
        },
        {
          '@type': 'ImageObject',
          url: 'https://maskezaklimu.rs/assets/maska_za_klimu_kvadratici.webp',
          name: 'Maska za klimu – model Kvadratići',
          caption: 'Maska za klimu sa kvadratićima – maske za klime za spoljne jedinice klima uređaja',
          encodingFormat: 'image/webp'
        },
        {
          '@type': 'ImageObject',
          url: 'https://maskezaklimu.rs/assets/maska_za_klimu_ostre_sare.webp',
          name: 'Maska za klimu – model Oštre šare',
          caption: 'Minimalistička metalna maska za klimu – maske za klime, model Oštre šare',
          encodingFormat: 'image/webp'
        }
      ]
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

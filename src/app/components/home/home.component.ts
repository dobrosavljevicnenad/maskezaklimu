import { Component, OnInit, effect } from '@angular/core';
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
  ) {
    // maske se učitavaju asinhrono (HTTP GET ka maske.json). Bez ovog effect()-a,
    // ngOnInit bi upisao prazan niz pre nego što signal dobije podatke, pa bi
    // prerenderovani/SSR HTML trajno ostao bez product-card elemenata i sa
    // numberOfItems:0 u ItemList schema-i (Googlebot vidi prazan HTML).
    effect(() => {
      const maske = this.maskaService.maske();
      if (maske.length > 0) {
        this.maske = maske;
        this.updateItemListSchema(maske);
      }
    });
  }

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'MASKE ZA KLIMU – Najpovoljnije cene | Izrada po meri',
      description: 'MASKE ZA KLIMU od plastificiranog lima – izrada po meri, 6 modela, izbor boja. Dostava 5–7 radnih dana širom Srbije. ★★★★★ 15 recenzija zadovoljnih kupaca.',
      url: 'https://maskezaklimu.rs/',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp',
      imageAlt: 'Maske za klimu, poznate i kao maska za klimu ili maske za klime – dekorativna zaštita od plastificiranog lima za spoljnu jedinicu klima uređaja',
      imageWidth: 1024,
      imageHeight: 1024
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
      priceRange: 'RSD 13480',
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
        '@id': 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp',
        url: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp',
        contentUrl: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp',
        name: 'Maske za klimu – dekorativna maska za klimu od plastificiranog lima',
        description: 'Maske za klimu, poznate i kao maska za klimu ili maske za klime, od plastificiranog lima za spoljne jedinice klima uređaja. Izrada po meri.',
        caption: 'Maske za klimu (maska za klimu, maske za klime) – dekorativna zaštita od plastificiranog lima, model Sitni listovi',
        width: 1024,
        height: 1024,
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
          caption: 'Maska za klimu, model Sitni listovi – jedna od naših maski za klime od plastificiranog lima',
          width: 1024,
          height: 1024,
          encodingFormat: 'image/webp'
        },
        {
          '@type': 'ImageObject',
          url: 'https://maskezaklimu.rs/assets/dekorativna_maska_za_klimu_pravougaonici.webp',
          name: 'Maske za klimu – model Pravougaonici',
          caption: 'Ukrasna maska za klimu sa geometrijskim dizajnom – maske za klime, model Pravougaonici',
          width: 559,
          height: 417,
          encodingFormat: 'image/webp'
        },
        {
          '@type': 'ImageObject',
          url: 'https://maskezaklimu.rs/assets/maska_za_klimu_krupni_listovi.webp',
          name: 'Maska za klimu – model Krupni listovi',
          caption: 'Metalna maska za klimu sa krupnim listovima – maske za spoljnu jedinicu klima uređaja',
          width: 650,
          height: 433,
          encodingFormat: 'image/webp'
        },
        {
          '@type': 'ImageObject',
          url: 'https://maskezaklimu.rs/assets/maska_za_klimu_haoticna_sara.webp',
          name: 'Maske za klimu – model Haotična šara',
          caption: 'Dekorativna maska za klimu savremenog dizajna – maske za klime, model Haotična šara',
          width: 1024,
          height: 1024,
          encodingFormat: 'image/webp'
        },
        {
          '@type': 'ImageObject',
          url: 'https://maskezaklimu.rs/assets/maska_za_klimu_kvadratici.webp',
          name: 'Maska za klimu – model Kvadratići',
          caption: 'Maska za klimu sa kvadratićima – maske za klime za spoljne jedinice klima uređaja',
          width: 1024,
          height: 1024,
          encodingFormat: 'image/webp'
        },
        {
          '@type': 'ImageObject',
          url: 'https://maskezaklimu.rs/assets/maska_za_klimu_ostre_sare.webp',
          name: 'Maska za klimu – model Oštre šare',
          caption: 'Minimalistička metalna maska za klimu – maske za klime, model Oštre šare',
          width: 869,
          height: 829,
          encodingFormat: 'image/webp'
        }
      ]
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
            text: 'Standardna cena za masku dimenzija 900 × 650 × 440 mm (S) ili 900 × 650 × 550 mm (M) iznosi 13.480 RSD. Za druge dimenzije radimo ponudu po meri.'
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
            text: 'Svaku masku radimo u dve standardne veličine: S (900 × 650 × 440 mm) i M (900 × 650 × 550 mm), po istoj ceni od 13.480 RSD. Pored toga, radimo i maske za klimu po meri – samo nam pošaljite dimenzije vaše spoljne jedinice i prilagodićemo ih vašim potrebama.'
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
        },
        {
          '@type': 'Question',
          name: 'Kako se montira maska za klimu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ugradnja maske za klimu je jednostavna i ne zahteva poseban alat. Maska se postavlja oko spoljne jedinice i fiksira vijcima ili montažnim konzolama. Uz svaku narudžbinu dostavljamo uputstvo za montažu.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko dugo traje maska za klimu od plastificiranog lima?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Uz normalno korišćenje i minimalno održavanje, maske za klimu od plastificiranog lima debljine 1,5 mm traju 10 i više godina. Materijal je otporan na UV zrake, koroziju i sve atmosferske uslove, pa nema potrebe za farbanjem ni posebnim premazima.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li su maske za klimu kompatibilne sa svim markama klima uređaja?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Maske za klime nisu vezane za određenu marku – prave se prema dimenzijama spoljne jedinice, a ne prema modelu ili brendu. Kompatibilne su sa Daikin, Mitsubishi, Samsung, LG, Gree, Midea i svim ostalim markama klima uređaja.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kako izmeriti spoljnu jedinicu klima uređaja za masku po meri?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Potrebno je izmeriti tri dimenzije spoljne jedinice: širinu, visinu i dubinu (rastojanje od zida). Te mere pošaljite telefonom ili putem kontakt forme, i izradićemo masku za klimu po meri tačno za vaš uređaj.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li maska za klimu zahteva posebno održavanje?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ne. Dovoljno je povremeno isprati masku vodom ili obrisati vlažnom krpom. Plastificirani lim ne rđa i ne bledi, pa nema potrebe za farbanjem ni zaštitnim premazima.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li se maska za klimu naziva i kavez ili obloga za klimu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Kavez za klimu i obloga za klimu su nazivi koje ljudi često koriste za isti proizvod – dekorativnu i zaštitnu masku za spoljnu jedinicu klima uređaja. Bez obzira kako je zovete, radi se o istoj izradi od plastificiranog lima, po meri vaše jedinice.'
          }
        },
        {
          '@type': 'Question',
          name: 'Šta je kutija za klimu i da li je to isto što i maska za klimu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kutija za klimu je još jedan uobičajen naziv za masku koja pokriva spoljnu jedinicu klima uređaja. Izrađujemo je od plastificiranog lima, u standardnoj dimenziji ili po meri, sa dovoljno provetravanja da ne ometa rad uređaja.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li pravite masku za klimu montiranu unutar zatvorenog balkona, ili samo za jedinice napolju?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oba slučaja su podjednako česta i radimo oboje – bilo da je spoljna jedinica montirana potpuno napolju na fasadi ili zidu, bilo da je smeštena unutar zatvorenog balkona ili lođe. Dimenzije i izradu prilagođavamo mestu montaže.'
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

  private updateItemListSchema(maske: any[]): void {
    this.seo.setJsonLd('home-itemlist-schema', {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Maske za klimu',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: maske.length,
      itemListElement: maske.map((maska, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://maskezaklimu.rs/proizvod/${maska.slug}`,
        name: maska.naziv
      }))
    });
  }
}

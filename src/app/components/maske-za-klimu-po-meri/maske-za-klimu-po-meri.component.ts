import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maske-za-klimu-po-meri',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maske-za-klimu-po-meri.component.html',
  styleUrl: './maske-za-klimu-po-meri.component.css'
})
export class MaskeZaKlimuPoMeriComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maske za klimu po meri – Izrada prema vašim dimenzijama | maskezaklimu.rs',
      description: 'Maske za klimu po meri – izrađujemo prema tačnim dimenzijama vaše spoljne jedinice. Plastificirani lim 1,5 mm, izbor šara i RAL boja. Dostava širom Srbije.',
      url: 'https://maskezaklimu.rs/maske-za-klimu-po-meri',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('po-meri-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kako naručiti masku za klimu po meri?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pošaljite nam dimenzije spoljne jedinice (širina, visina, dubina), željenu šaru i boju. Možete nas kontaktirati telefonom na 065 977 5995 ili putem kontakt forme na sajtu. Pripremićemo ponudu u kratkom roku.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koje dimenzije mogu naručiti za masku za klimu po meri?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Izrađujemo maske za klimu po meri za sve dimenzije spoljnih jedinica klima uređaja. Standardna dimenzija je 900 × 650 × 440 mm, ali možemo uraditi i veće, manje ili nestandardne mere prema vašim zahtevima.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko košta maska za klimu po meri?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cena maske za klimu po meri zavisi od dimenzija, odabrane šare i boje. Standardna maska dimenzija 900 × 650 × 440 mm iznosi 13.480 RSD. Za nestandardne mere kontaktirajte nas za individualan cenovnik.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko traje izrada maske za klimu po meri?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rok izrade maske za klimu po meri je obično 7–10 radnih dana od potvrde narudžbine, zavisno od složenosti i trenutnih kapaciteta. Dostava kurirskom službom traje dodatno 1–2 radna dana.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li maska za klimu po meri ometa rad klima uređaja?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ne. Svaka maska za klimu po meri projektovana je sa dovoljno perforacija za neometan protok vazduha. Klima uređaj radi normalno i bez gubitka na efikasnosti.'
          }
        }
      ]
    });

    this.seo.setJsonLd('po-meri-breadcrumb-schema', {
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
          name: 'Maske za klimu po meri',
          item: 'https://maskezaklimu.rs/maske-za-klimu-po-meri'
        }
      ]
    });

    this.seo.setJsonLd('po-meri-webpage-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://maskezaklimu.rs/maske-za-klimu-po-meri#webpage',
      name: 'Maske za klimu po meri – Izrada prema vašim dimenzijama',
      url: 'https://maskezaklimu.rs/maske-za-klimu-po-meri',
      description: 'Maske za klimu po meri od plastificiranog lima – izrađujemo prema tačnim dimenzijama vaše spoljne jedinice klima uređaja.',
      inLanguage: 'sr-RS'
    });
  }
}

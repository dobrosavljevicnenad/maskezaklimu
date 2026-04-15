import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maska-za-klimu-spolja',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maska-za-klimu-spolja.component.html',
  styleUrl: './maska-za-klimu-spolja.component.css'
})
export class MaskaZaKlimuSpoljaComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maska za klimu spolja – Zaštita za spoljnu jedinicu klime | maskezaklimu.rs',
      description: 'Maska za klimu spolja od plastificiranog lima 1,5 mm. Štiti i ulepšava spoljnu jedinicu klima uređaja – izrada po meri, RAL boje, dostava širom Srbije. Cena 12.480 RSD.',
      url: 'https://maskezaklimu.rs/maska-za-klimu-spolja',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('spolja-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li maska za klimu spolja utiče na rad uređaja?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ne, kada je pravilno dimenzionisana. Naše maske imaju odgovarajuće otvore koji ne ometaju protok vazduha. Klima radi normalno uz istu efikasnost.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koje su standardne dimenzije maske za spoljnu jedinicu klime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardni model iznosi 900 × 650 × 440 mm. Ukoliko vaša spoljna jedinica ima drugačije dimenzije, izrađujemo masku za klimu spolja po meri – samo nam pošaljite mere vaše spoljne jedinice.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko traje ugradnja maske za klimu spolja?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ugradnja je jednostavna i obično traje 15–30 minuta. Maska se montira direktno oko spoljne jedinice bez potrebe za bušenjem zida ili specijalnim alatom.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kolika je cena maske za klimu spolja?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna maska za klimu spolja dimenzija 900 × 650 × 440 mm košta 12.480 RSD. Za nestandardne dimenzije ili posebne boje, kontaktirajte nas za individualnu ponudu.'
          }
        }
      ]
    });

    this.seo.setJsonLd('spolja-breadcrumb-schema', {
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
          name: 'Maska za klimu spolja',
          item: 'https://maskezaklimu.rs/maska-za-klimu-spolja'
        }
      ]
    });
  }
}

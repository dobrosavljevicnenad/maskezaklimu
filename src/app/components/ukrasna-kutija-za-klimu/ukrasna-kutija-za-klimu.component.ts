import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-ukrasna-kutija-za-klimu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ukrasna-kutija-za-klimu.component.html',
  styleUrl: './ukrasna-kutija-za-klimu.component.css'
})
export class UkrasnaKutijaZaKlimuComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Ukrasna kutija za klimu – Ukrasna maska za klimu | maskezaklimu.rs',
      description: 'Ukrasna kutija za klimu od plastificiranog lima 1,5 mm – dekorativna maska za spoljnu jedinicu klima uređaja. Više šara i RAL boja, izrada po meri, dostava širom Srbije.',
      url: 'https://maskezaklimu.rs/ukrasna-kutija-za-klimu',
      image: 'https://maskezaklimu.rs/assets/dekorativna-maska-za-klimu-pravougaonici.webp'
    });

    this.seo.setJsonLd('ukrasna-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Koja je razlika između ukrasne kutije i maske za klimu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pojmovi se često koriste naizmenično. Ukrasna kutija za klimu i ukrasna maska za klimu su ista vrsta proizvoda – metalna obloga koja obavija spoljnu jedinicu klima uređaja i daje joj uredan, dekorativan izgled.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li ukrasna kutija za klimu smeta radu uređaja?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ne. Naše ukrasne kutije za klimu projektovane su sa odgovarajućom perforacijom koja obezbeđuje neometan protok vazduha. Klima radi normalno uz punu efikasnost.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koje šare su dostupne za ukrasnu kutiju za klimu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nudimo nekoliko šara: sitni listovi, krupni listovi, pravougaonici, geometrijska haotična šara, kvadratici i minimalistički oštri rezovi. Svaka dekorativna maska za klimu dolazi u izabranoj boji iz RAL palete.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kolika je cena ukrasne kutije za klimu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardna ukrasna kutija za klimu dimenzija 900 × 650 × 440 mm košta 12.480 RSD. Cena po meri zavisi od dimenzija i odabrane šare – kontaktirajte nas za ponudu.'
          }
        },
        {
          '@type': 'Question',
          name: 'Koliko traje isporuka ukrasne kutije za klimu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standardni modeli se isporučuju za 5–7 radnih dana. Isporuka se vrši kurirskom službom na celu teritoriju Srbije.'
          }
        }
      ]
    });

    this.seo.setJsonLd('ukrasna-breadcrumb-schema', {
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
          name: 'Ukrasna kutija za klimu',
          item: 'https://maskezaklimu.rs/ukrasna-kutija-za-klimu'
        }
      ]
    });
  }
}

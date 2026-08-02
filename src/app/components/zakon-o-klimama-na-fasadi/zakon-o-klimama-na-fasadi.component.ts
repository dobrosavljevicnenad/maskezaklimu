import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-zakon-o-klimama-na-fasadi',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './zakon-o-klimama-na-fasadi.component.html',
  styleUrl: './zakon-o-klimama-na-fasadi.component.css'
})
export class ZakonOKlimamaNaFasadiComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Zakon o klimama na fasadi – rokovi, kazne i da li maska rešava problem | maskezaklimu.rs',
      description: 'Izmene Zakona o planiranju i izgradnji zabranjuju vidljive spoljne jedinice klima na uličnim fasadama. Rokovi, kazne i da li ukrasna maska za klimu može biti deo rešenja.',
      url: 'https://maskezaklimu.rs/zakon-o-klimama-na-fasadi',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('zakon-article-schema', {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Zakon o klimama na fasadi – rokovi, kazne i da li maska za klimu rešava problem',
      description: 'Pregled izmena Zakona o planiranju i izgradnji koje se tiču vidljivih spoljnih jedinica klima uređaja na fasadama, sa rokovima, kaznama i mogućim rešenjima.',
      url: 'https://maskezaklimu.rs/zakon-o-klimama-na-fasadi',
      inLanguage: 'sr-RS',
      author: {
        '@type': 'Organization',
        name: 'Maske za klimu',
        url: 'https://maskezaklimu.rs/'
      },
      publisher: {
        '@id': 'https://maskezaklimu.rs/#organization'
      },
      datePublished: '2026-08-02',
      dateModified: '2026-08-02',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('zakon-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li je zakon o uklanjanju klima sa fasada već na snazi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Izmene i dopune Zakona o planiranju i izgradnji koje se tiču vidljivih spoljnih jedinica klima uređaja objavljene su u „Službenom glasniku RS", broj 62/2023 i na snazi su od avgusta 2023. Rokovi za usklađivanje su različiti po kategorijama objekata i i dalje traju.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do kada moram da uklonim ili sakrijem spoljnu jedinicu klime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Za objekte u javnoj svojini rok je već istekao (2025). Za zgrade i objekte u granicama nepokretnih kulturnih dobara i zaštićenoj okolini rok je 5 godina od stupanja zakona na snagu, odnosno do 2028. Za sve ostale stambene i poslovne objekte rok je 10 godina, odnosno do 2033. godine.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kolika je kazna ako spoljna jedinica klime ostane vidljiva na fasadi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prema dostupnim informacijama, kazna za fizička lica kreće se od 25.000 do 50.000 dinara, dok je za pravna lica predviđena kazna do 100.000 dinara. Uz kaznu se izdaje i nalog za usklađivanje.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li ukrasna maska za klimu rešava problem sa novim zakonom?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ne automatski i ne u svim slučajevima. Osnovni zahtev zakona je da spoljna jedinica ne bude vidljiva sa ulične fasade, a primarno predviđeno rešenje je premeštanje na lođu, ravan krov ili bočnu/zadnju fasadu. Za slučajeve gde premeštanje nije moguće, deo struke (Unija servisera klimatizacije) predlaže proveru, zgrada po zgradu, da li postavljanje maske na fasadu može zadovoljiti zahtev da uređaj ne bude vidljiv. Tačna pravila zavisi od akta koji donosi svaka jedinica lokalne samouprave, pa preporučujemo proveru sa svojom opštinom pre donošenja odluke.'
          }
        },
        {
          '@type': 'Question',
          name: 'Kome da se obratim za tačna pravila u mojoj opštini?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zakon predviđa da svaka jedinica lokalne samouprave donese sopstveni akt kojim bliže uređuje način uklanjanja ili maskiranja spoljnih jedinica. Za tačna i važeća pravila za vašu zgradu, obratite se urbanističkoj službi svoje opštine ili grada.'
          }
        }
      ]
    });

    this.seo.setJsonLd('zakon-breadcrumb-schema', {
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
          name: 'Zakon o klimama na fasadi',
          item: 'https://maskezaklimu.rs/zakon-o-klimama-na-fasadi'
        }
      ]
    });
  }
}

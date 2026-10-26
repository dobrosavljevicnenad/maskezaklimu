import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maska-za-klimu-unutra',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maska-za-klimu-unutra.component.html'
})
export class MaskaZaKlimuUnutraComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    const url = 'https://maskezaklimu.rs/maska-za-klimu-unutra';
    this.seo.updateSeo({
      title: 'Maska za klimu unutra – izrada po meri | maskezaklimu.rs',
      description: 'Maska za unutrašnju jedinicu klime po meri – dekorativno rešenje prilagođeno uređaju i prostoru. Plastificirani lim, izbor boja i ponuda prema merama.',
      url,
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('unutra-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li izrađujete masku za unutrašnju jedinicu klime?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Izrađujemo dekorativne maske i obloge po meri za unutrašnje jedinice klima uređaja, prilagođene dimenzijama uređaja i prostoru u kojem se nalazi.'
          }
        },
        {
          '@type': 'Question',
          name: 'Šta treba poslati za ponudu za masku za klimu unutra?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pošaljite fotografiju unutrašnje jedinice i prostora oko nje, kao i širinu, visinu i dubinu uređaja. Na osnovu toga predlažemo odgovarajuće rešenje i pripremamo ponudu.'
          }
        },
        {
          '@type': 'Question',
          name: 'Da li radite i maske za spoljne jedinice klima uređaja?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da. Pored rešenja za unutrašnje jedinice, izrađujemo i dekorativne i zaštitne maske za spoljne jedinice klima uređaja.'
          }
        }
      ]
    });

    this.seo.setJsonLd('unutra-breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Maske za klimu', item: 'https://maskezaklimu.rs/' },
        { '@type': 'ListItem', position: 2, name: 'Maska za klimu unutra', item: url }
      ]
    });
  }
}

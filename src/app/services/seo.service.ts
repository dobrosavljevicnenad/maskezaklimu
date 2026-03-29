import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  updateSeo(config: {
    title: string;
    description: string;
    url: string;
    image?: string;
    robots?: string;
    ogType?: string;
  }) {
    const image = config.image || 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp';
    const robots = config.robots || 'index, follow, max-image-preview:large';
    const ogType = config.ogType || 'website';

    this.title.setTitle(config.title);

    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'robots', content: robots });

    this.meta.updateTag({ property: 'og:type', content: ogType });
    this.meta.updateTag({ property: 'og:locale', content: 'sr_RS' });
    this.meta.updateTag({ property: 'og:url', content: config.url });
    this.meta.updateTag({ property: 'og:site_name', content: 'Maske za klimu' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:image:secure_url', content: image });
    this.meta.updateTag({ property: 'og:image:alt', content: 'Maska za klimu od plastificiranog lima za spoljnu jedinicu klima uređaja' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
    this.meta.updateTag({ name: 'twitter:image:alt', content: 'Maska za klimu od plastificiranog lima za spoljnu jedinicu klima uređaja' });

    this.setCanonical(config.url);
  }

  setCanonical(url: string) {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  setNoIndex() {
    this.meta.updateTag({ name: 'robots', content: 'noindex, follow' });
  }

  setJsonLd(id: string, schema: object) {
    this.removeJsonLd(id);

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }

  removeJsonLd(id: string) {
    const oldScript = this.document.getElementById(id);
    if (oldScript) {
      oldScript.remove();
    }
  }
}

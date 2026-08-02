import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  constructor(private seo: SeoService) {}

  contact: any = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Kontakt – Maske za klimu po meri | maskezaklimu.rs',
      description: 'Kontaktirajte nas za ponudu maske za klimu po meri. Pošaljite dimenzije spoljne jedinice, izaberite šaru i boju – odgovaramo brzo telefonom ili putem forme.',
      url: 'https://maskezaklimu.rs/kontakt',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });

    this.seo.setJsonLd('kontakt-webpage-schema', {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Kontakt – Maske za klimu',
      url: 'https://maskezaklimu.rs/kontakt',
      description: 'Kontakt stranica za upite o maskama za klimu, cenama i izradi po meri.',
      inLanguage: 'sr-RS',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Maske za klimu', item: 'https://maskezaklimu.rs/' },
          { '@type': 'ListItem', position: 2, name: 'Kontakt', item: 'https://maskezaklimu.rs/kontakt' }
        ]
      }
    });
  }

  sendMessage() {
    const templateParams = {
      name: this.contact.name,
      email: this.contact.email,
      phone: this.contact.phone,
      message: this.contact.message
    };

    emailjs.send('service_gmail', 'template_8j5m935', templateParams, '_lXhY7X4MAMwrA-lj')
      .then(() => {
        alert('Poruka uspešno poslata!');
        this.contact = {
          name: '',
          email: '',
          phone: '',
          message: ''
        };
      }, (error) => {
        console.error('Greška pri slanju:', error);
        alert('Došlo je do greške. Pokušajte ponovo.');
      });
  }
}

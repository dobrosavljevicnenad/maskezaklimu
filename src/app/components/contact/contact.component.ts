import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  contact: any = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

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

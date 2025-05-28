import { Component, OnInit } from '@angular/core';
import { MaskaService } from '../../services/maska.service';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  cartProducts: any[] = [];

  order: any = {
    firstName: '',
    lastName: '',
    phone: '',
    address: ''
  };

  baseUrl: string = '';

  constructor(private maskaService: MaskaService, private router: Router) {}

  ngOnInit(): void {
    this.cartProducts = this.maskaService.getCartProducts();
  }

  getTotalPrice() {
    return this.maskaService.getTotalPrice();
  }

  getDiscountPrice(product: any): number {
    return Math.round(product.cena - (product.cena * product.popust) / 100);
  }

  getImageUrl(slika: string): string {
    return slika.startsWith('assets') ? `${this.baseUrl}${slika}` : slika;
  }

  submitOrder() {
    const templateParams = {
      firstName: this.order.firstName,
      lastName: this.order.lastName,
      phone: this.order.phone,
      address: this.order.address,
      cartProducts: this.cartProducts.map(product => ({
        naziv: product.naziv,
        kolicina: product.kolicina,
        boja: product.boja,
        cena: this.getDiscountPrice(product) * product.kolicina,
        slika: this.getImageUrl(product.slika[0].url)
      })),
      totalPrice: this.getTotalPrice()
    };

    emailjs.send('service_gmail', 'template_n00s0ad', templateParams, '_lXhY7X4MAMwrA-lj')
      .then(() => {
        alert('Porudžbina uspešno poslata!');
        // this.maskaService.clearCart();  // ako imaš ovu funkciju
        this.router.navigate(['']);
      })
  }
}

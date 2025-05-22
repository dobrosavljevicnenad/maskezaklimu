import { Component, computed, effect, Signal } from '@angular/core';
import { MaskaService } from '../../services/maska.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatIconModule,FormsModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartProducts: Signal<any[]> = this.maskaService.getCartProducts;

  editingColorIndex: number | null = null;
  newColorValue: string = '';

  totalPrice = computed(() => {
    return this.cartProducts().reduce((total, product) => {
      const discountPrice = this.getDiscountPrice(product);
      return total + discountPrice * product.kolicina;
    }, 0);
  });

  constructor(private maskaService: MaskaService, private router: Router) {
    effect(() => {
      // efekat da reaguje ako se promeni cartProducts
      console.log('Cart updated:', this.cartProducts());
    });
  }

  addToCart(productId: number, boja: string) {
    this.maskaService.addToCart(productId, boja, 1);
  }

  removeFromCart(productId: number, boja: string) {
    this.maskaService.removeFromCart(productId, boja);
  }

  deleteFromCart(productId: number, boja: string) {
    this.maskaService.deleteFromCart(productId, boja);
  }

  updateCart(productId: number, kolicina: number, boja: string) {
    if (kolicina < 1) {
      this.deleteFromCart(productId, boja);
    } else {
      this.maskaService.updateQuantity(productId, boja, kolicina);
    }
  }

  getDiscountPrice(product: any): number {
    return Math.round(product.cena - (product.cena * product.popust) / 100);
  }

  startEditingColor(index: number, currentColor: string) {
    this.editingColorIndex = index;
    this.newColorValue = currentColor;
  }

  changeColor(index: number, novaBoja: string) {
    const product = this.cartProducts()[index];
    if (!novaBoja.trim()) return;

    this.maskaService.deleteFromCart(product.id, product.boja);
    this.maskaService.addToCart(product.id, novaBoja.trim(), product.kolicina);

    this.editingColorIndex = null;
    this.newColorValue = '';
  }

  navigateToOrder() {
    if (this.cartProducts().length > 0) {
      this.router.navigate(['/order']);
    }
  }
}

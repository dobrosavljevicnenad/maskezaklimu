import { Injectable, Inject, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { defer, of, catchError, Observable } from 'rxjs';

export interface CartItem {
  productId: number;
  quantity: number;
  boja: string;
}

@Injectable({
  providedIn: 'root'
})
export class MaskaService {
  private http = inject(HttpClient);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // 🔽 SEO-friendly: maske se učitavaju iz JSON fajla (npr. sa SSR podrškom)
  readonly maske = toSignal(
    defer(() => this.http.get<any[]>('/assets/maske.json')).pipe(
      catchError(() => of([])) // fallback ako ne može da se učita
    ),
    { initialValue: [] }
  );

  // 🛒 Signal za korpu
  cart = signal<Map<string, CartItem>>(this.getCart());

  /*** --- CART FUNKCIJE --- ***/
  private getCart(): Map<string, CartItem> {
    if (isPlatformBrowser(this.platformId)) {
      const cartData = localStorage.getItem('cart');
      return cartData ? new Map(JSON.parse(cartData)) : new Map();
    }
    return new Map();
  }

  private saveCart(cart: Map<string, CartItem>) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cart', JSON.stringify(Array.from(cart.entries())));
    }
    this.cart.set(new Map(cart));
  }

  addToCart(productId: number, boja: string, kolicina: number = 1) {
    const current = this.getCart();
    const key = `${productId}-${boja}`;
    const item = current.get(key);
    const quantity = item ? item.quantity : 0;

    current.set(key, { productId, quantity: quantity + kolicina, boja });
    this.saveCart(current);
  }

  removeFromCart(productId: number, boja: string) {
    const current = this.getCart();
    const key = `${productId}-${boja}`;
    const item = current.get(key);
    if (item) {
      item.quantity > 1
        ? current.set(key, { ...item, quantity: item.quantity - 1 })
        : current.delete(key);
      this.saveCart(current);
    }
  }

  updateQuantity(productId: number, boja: string, quantity: number) {
    const current = this.getCart();
    const key = `${productId}-${boja}`;
    const item = current.get(key);
    if (item) {
      current.set(key, { ...item, quantity });
      this.saveCart(current);
    }
  }

  deleteFromCart(productId: number, boja: string) {
    const current = this.getCart();
    current.delete(`${productId}-${boja}`);
    this.saveCart(current);
  }

  getCartProducts = computed(() => {
  const cart = this.cart(); // SIGNAL!
  const maske = this.maske(); // SIGNAL!
  const products: any[] = [];

  cart.forEach((item, key) => {
    const baseProduct = maske.find(p => p.id === item.productId);
    if (baseProduct) {
      products.push({
        ...baseProduct,
        boja: item.boja,
        kolicina: item.quantity,
        cartKey: key
      });
    }
  });

  return products;
  });

  getTotalPrice = computed(() => {
    return this.getCartProducts().reduce((total, product) => {
      return total + this.getDiscountPrice(product) * product.kolicina;
    }, 0);
  });

  getDiscountPrice(product: any): number {
    return product.cena - (product.cena * product.popust) / 100;
  }

  cartCount = computed(() => {
    let total = 0;
    this.cart().forEach(item => total += item.quantity);
    return total;
  });

  getMaske() {
    return this.maske(); // vrati vrednost signala
  }

  getMaskaBySlug(slug: string) {
  return this.maske().find(m => m.slug === slug);
  }

  getMaskaBySlugAsync(slug: string): Observable<any | undefined> {
  return defer(() => of(this.maske().find(m => m.slug === slug)));
  }

  isInCart(productId: number, boja: string): boolean {
  const key = `${productId}-${boja}`;
  return this.getCart().has(key);
}

  getFilteredProducts(searchQuery: string): any[] {
    const query = searchQuery.toLowerCase();
    return this.maske().filter(product =>
      product.naziv.toLowerCase().includes(query) ||
      product.opis.toLowerCase().includes(query)
    );
  }
}

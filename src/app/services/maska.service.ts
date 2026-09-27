import { Injectable, Inject, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { defer, of, catchError, Observable } from 'rxjs';

export type Velicina = 'S' | 'M';

// Obe veličine imaju istu cenu (cena iz maske.json).
export const VELICINE: { kod: Velicina; dimenzije: string }[] = [
  { kod: 'S', dimenzije: '900 × 650 × 440 mm' },
  { kod: 'M', dimenzije: '900 × 650 × 550 mm' }
];

export function opisVelicine(velicina: Velicina): string {
  const v = VELICINE.find(x => x.kod === velicina) ?? VELICINE[0];
  return `${v.kod} (${v.dimenzije})`;
}

export interface CartItem {
  productId: number;
  quantity: number;
  boja: string;
  velicina: Velicina;
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
      if (!cartData) return new Map();
      // Stare stavke (pre uvođenja veličina) nemaju velicinu – tretiraju se kao S.
      const cart = new Map<string, CartItem>();
      (JSON.parse(cartData) as [string, CartItem][]).forEach(([, item]) => {
        const velicina: Velicina = item.velicina === 'M' ? 'M' : 'S';
        cart.set(this.cartKey(item.productId, item.boja, velicina), { ...item, velicina });
      });
      return cart;
    }
    return new Map();
  }

  private saveCart(cart: Map<string, CartItem>) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cart', JSON.stringify(Array.from(cart.entries())));
    }
    this.cart.set(new Map(cart));
  }

  private cartKey(productId: number, boja: string, velicina: Velicina): string {
    return `${productId}-${boja}-${velicina}`;
  }

  addToCart(productId: number, boja: string, kolicina: number = 1, velicina: Velicina = 'S') {
    const current = this.getCart();
    const key = this.cartKey(productId, boja, velicina);
    const item = current.get(key);
    const quantity = item ? item.quantity : 0;

    current.set(key, { productId, quantity: quantity + kolicina, boja, velicina });
    this.saveCart(current);
  }

  removeFromCart(productId: number, boja: string, velicina: Velicina = 'S') {
    const current = this.getCart();
    const key = this.cartKey(productId, boja, velicina);
    const item = current.get(key);
    if (item) {
      item.quantity > 1
        ? current.set(key, { ...item, quantity: item.quantity - 1 })
        : current.delete(key);
      this.saveCart(current);
    }
  }

  updateQuantity(productId: number, boja: string, quantity: number, velicina: Velicina = 'S') {
    const current = this.getCart();
    const key = this.cartKey(productId, boja, velicina);
    const item = current.get(key);
    if (item) {
      current.set(key, { ...item, quantity });
      this.saveCart(current);
    }
  }

  deleteFromCart(productId: number, boja: string, velicina: Velicina = 'S') {
    const current = this.getCart();
    current.delete(this.cartKey(productId, boja, velicina));
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
        velicina: item.velicina,
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

  isInCart(productId: number, boja: string, velicina: Velicina = 'S'): boolean {
  return this.getCart().has(this.cartKey(productId, boja, velicina));
}

  getFilteredProducts(searchQuery: string): any[] {
    const query = searchQuery.toLowerCase();
    return this.maske().filter(product =>
      product.naziv.toLowerCase().includes(query) ||
      product.opis.toLowerCase().includes(query)
    );
  }
}

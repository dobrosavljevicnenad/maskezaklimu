import { Component, computed, effect, Signal, signal } from '@angular/core';
import { MaskaService } from '../../services/maska.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isModalOpen = signal(false);
  cartProducts: Signal<any[]>;
  searchQuery = signal('');

  constructor(private maskaService: MaskaService) {
    // Reaktivno osvežavanje proizvoda u korpi kad se cart signal promeni
    // effect(() => {
    //   this.cartProducts.set(this.maskaService.getCartProducts());
    // });
    this.cartProducts = computed(() => this.maskaService.getCartProducts())

    // Opcionalno: možeš i inicijalno postaviti proizvode u korpi,
    // ali efekt će se odmah prvi put izvršiti pa nije striktno neophodno
    // this.cartProducts.set(this.maskaService.getCartProducts());
  }

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onSearchChange(query: string) {
    this.searchQuery.set(query);
    // ovde možeš emitovati event ako treba, ili filtrirati proizvode
  }
}

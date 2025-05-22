import { Component, EventEmitter, Output, computed, signal, Signal } from '@angular/core';
import { MaskaService } from '../../services/maska.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule]
})
export class HeaderComponent {

  isModalOpen = signal(false);
  searchQuery = signal('');
  cartProducts: Signal<any[]>;

  @Output() searchQueryChanged = new EventEmitter<string>();

  cartCount = computed(() => this.maskaService.cartCount());

  constructor(private maskaService: MaskaService) {
    this.cartProducts = computed(() => this.maskaService.getCartProducts());
  }

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  onSearchChange(value: string) {
    this.searchQuery.set(value);
    this.searchQueryChanged.emit(value);
  }

  debugCart() {
    console.log('Cart products:', this.cartProducts());
  }
}

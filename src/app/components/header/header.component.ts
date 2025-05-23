import { Component, EventEmitter, Output, computed, signal, Signal } from '@angular/core';
import { MaskaService } from '../../services/maska.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(private maskaService: MaskaService, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.cartProducts = computed(() => this.maskaService.getCartProducts());
    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg')
    );
    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg')
    );
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

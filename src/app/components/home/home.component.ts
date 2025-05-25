import { Component } from '@angular/core';
import { MaskaService } from '../../services/maska.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  maske: any[] = [];

  constructor(private maskaService: MaskaService) {}

  ngOnInit() {
    this.maske = this.maskaService.getMaske();
  }

}

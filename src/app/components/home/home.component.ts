import { Component } from '@angular/core';
import { MaskaService } from '../../services/maska.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  maske: any[] = [];

  constructor(
    private maskaService: MaskaService,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.maske = this.maskaService.getMaske();

    // ✅ Postavi fiksni SEO title & description za home page
    this.title.setTitle('MASKE ZA KLIMU – Zaštita i dizajn na jednom mestu!');
    this.meta.updateTag({
      name: 'description',
      content: 'Dekorativne maske za spoljne jedinice klima uređaja – CNC sečen lim, otporne na rđu, izrađujemo po vašoj želji. Brza isporuka širom Srbije.'
    });
  }
}

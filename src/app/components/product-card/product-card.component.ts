import { Component, Input, OnInit } from '@angular/core';
import { MaskaService } from '../../services/maska.service';
import { Meta, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  imports: [RouterModule,CommonModule,MatIconModule],
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: any;

  isWishlisted = false;
  isCarted = false;

  constructor(
    private maskaService: MaskaService,
    private router: Router,
    private meta: Meta,
    private title: Title,
  ) {}

  ngOnInit(): void {
    const { id, boja } = this.product;
    this.isCarted = this.maskaService.isInCart(id, boja);

    this.meta.addTag({
    name: 'canonical',
    content: `https://klimamaske.online/${this.router.url}`
  });
  }

  toggleCart(): void {
    const { id, boja } = this.product;

    if (this.isCarted) {
      this.maskaService.removeFromCart(id, boja);
      this.isCarted = false;
    } else {
      this.maskaService.addToCart(id, boja, 1);
      this.isCarted = true;
    }
  }

  getDiscountPrice(): string {
    return this.maskaService.getDiscountPrice(this.product).toFixed(0);
  }

  viewProduct(): void {
    this.router.navigate(['/proizvod', this.product.slug]);
  }
}

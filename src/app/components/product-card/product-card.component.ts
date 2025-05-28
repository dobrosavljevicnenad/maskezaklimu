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
  const { id, boja, naziv, opis, slug } = this.product;
  this.isCarted = this.maskaService.isInCart(id, boja);

  // Title tag
  this.title.setTitle(`Maska za klimu - ${naziv}`);

  // Meta description
  this.meta.updateTag({
    name: 'description',
    content: opis?.slice(0, 150) || `Pogledajte masku za klimu: ${naziv}.`
  });

  // Canonical URL
  const canonicalUrl = `https://maskezaklimu.rs/proizvod/${slug}`;
  this.meta.updateTag({
    name: 'canonical',
    content: canonicalUrl
  });

  // Open Graph (za deljenje na društvenim mrežama)
  this.meta.updateTag({ property: 'og:title', content: `Maska za klimu - ${naziv}` });
  this.meta.updateTag({ property: 'og:description', content: opis?.slice(0, 150) || `Pogledajte masku za klimu: ${naziv}.` });
  this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
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

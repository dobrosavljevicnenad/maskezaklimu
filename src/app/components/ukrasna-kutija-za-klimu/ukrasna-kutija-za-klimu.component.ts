import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-ukrasna-kutija-za-klimu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ukrasna-kutija-za-klimu.component.html',
  styleUrl: './ukrasna-kutija-za-klimu.component.css'
})
export class UkrasnaKutijaZaKlimuComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Ukrasna kutija za klimu | Dekorativna maska za klimu',
      description: 'Ukrasna kutija za klimu – dekorativna metalna maska za spoljnu jedinicu klima uređaja. Moderan dizajn, izrada po meri i izbor boja.',
      url: 'https://maskezaklimu.rs/ukrasna-kutija-za-klimu',
      image: 'https://maskezaklimu.rs/assets/dekorativna-maska-za-klimu-pravougaonici.webp'
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-maska-za-klimu-spolja',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './maska-za-klimu-spolja.component.html',
  styleUrl: './maska-za-klimu-spolja.component.css'
})
export class MaskaZaKlimuSpoljaComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Maska za klimu spolja | Zaštita za spoljnu jedinicu klime',
      description: 'Maska za klimu spolja – dekorativna i zaštitna metalna maska za spoljnu jedinicu klima uređaja. Plastificirani lim, moderna izrada i dostava širom Srbije.',
      url: 'https://maskezaklimu.rs/maska-za-klimu-spolja',
      image: 'https://maskezaklimu.rs/assets/maska-za-klimu-sitni-listovi.webp'
    });
  }
}

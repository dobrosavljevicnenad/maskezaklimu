import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galerija',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galerija.component.html',
  styleUrl: './galerija.component.css'
})
export class GalerijaComponent {
    images = [
    'cg_2.webp',
    'cg_3.webp',
    'cg_nocna.webp',
    'master.webp',
    'zemun.webp',
    'rados.webp',
    'lekino_brdo.webp'
  ];

  positions = [
    'object-[center_top]',   // 1
    'object-[center_20%]',   // 2
    'object-[center_25%]',   // 3
    'object-[center_60%]',   // 4
    'object-[center_40%]',   // 5
    'object-[center_75%]',   // 6
    'object-[center_45%]',   // 7
  ];
}

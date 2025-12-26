import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snow.component.html',
  styleUrls: ['./snow.component.css'] // ⬅ BITNO: styleUrls
})
export class SnowComponent implements OnInit {

  snowflakes: { left: number; duration: number }[] = [];

  ngOnInit() {
    this.snowflakes = Array.from({ length: 80 }, () => ({
      left: Math.random() * 100,
      duration: Math.random() * 5 + 5
    }));
  }
}

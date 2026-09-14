import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { defer, of, catchError } from 'rxjs';

export interface NovostFaq {
  pitanje: string;
  odgovor: string;
}

export interface Novost {
  slug: string;
  naslov: string;
  opis: string;
  datum: string;
  datumIzmene?: string;
  slika: string;
  slikaAlt: string;
  slikaWidth: number;
  slikaHeight: number;
  sadrzaj: string[];
  faq?: NovostFaq[];
}

@Injectable({
  providedIn: 'root'
})
export class NovostiService {
  private http = inject(HttpClient);

  // Isti SSR-bezbedni obrazac kao MaskaService: signal počinje kao [] i
  // asinhrono se popunjava HTTP GET-om ka novosti.json.
  readonly novosti = toSignal(
    defer(() => this.http.get<Novost[]>('/assets/novosti.json')).pipe(
      catchError(() => of([] as Novost[]))
    ),
    { initialValue: [] as Novost[] }
  );

  getBySlug(slug: string): Novost | undefined {
    return this.novosti().find(n => n.slug === slug);
  }
}

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "cart",
    loadComponent: () => import('./components/cart/cart.component').then(m => m.CartComponent),
  },
  {
    path: "order",
    loadComponent: () => import('./components/order/order.component').then(m => m.OrderComponent),
  },
  {
    path: 'proizvod/:slug',
    loadComponent: () => import('./components/maska-detail/maska-detail.component').then(m => m.MaskaDetailComponent),
  },
  {
    path: 'kontakt',
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: 'o-nama',
    loadComponent: () => import('./components/o-nama/o-nama.component').then(m => m.ONamaComponent),
  },
  {
    path: 'dostava-i-povracaj',
    loadComponent: () => import('./components/dostava-i-povracaj/dostava-i-povracaj.component').then(m => m.DostavaIPovracajComponent),
  },
  {
    path: 'galerija',
    loadComponent: () => import('./components/galerija/galerija.component').then(m => m.GalerijaComponent),
  },
  {
    path: 'info',
    loadComponent: () => import('./components/info/info.component').then(m => m.InfoComponent),
  },
  {
    path: 'maske-za-klime-cena',
    loadComponent: () => import('./components/maske-za-klime-cena/maske-za-klime-cena.component').then(m => m.MaskeZaKlimeCenaComponent),
  },
  {
    path: 'maska-za-klimu-spolja',
    loadComponent: () => import('./components/maska-za-klimu-spolja/maska-za-klimu-spolja.component').then(m => m.MaskaZaKlimuSpoljaComponent),
  },
  {
    path: 'ukrasna-kutija-za-klimu',
    loadComponent: () => import('./components/ukrasna-kutija-za-klimu/ukrasna-kutija-za-klimu.component').then(m => m.UkrasnaKutijaZaKlimuComponent),
  },
  {
    path: 'maska-za-klimu-beograd',
    loadComponent: () => import('./components/maska-za-klimu-beograd/maska-za-klimu-beograd.component').then(m => m.MaskaZaKlimuBeogradComponent),
  },
  {
    path: 'maska-za-klimu-novi-sad',
    loadComponent: () => import('./components/maska-za-klimu-novi-sad/maska-za-klimu-novi-sad.component').then(m => m.MaskaZaKlimuNoviSadComponent),
  },
  {
    path: 'maska-za-klimu-nis',
    loadComponent: () => import('./components/maska-za-klimu-nis/maska-za-klimu-nis.component').then(m => m.MaskaZaKlimuNisComponent),
  },
  {
    path: 'maska-za-klimu-kragujevac',
    loadComponent: () => import('./components/maska-za-klimu-kragujevac/maska-za-klimu-kragujevac.component').then(m => m.MaskaZaKlimuKragujevacComponent),
  },
  {
    path: 'maska-za-klimu-subotica',
    loadComponent: () => import('./components/maska-za-klimu-subotica/maska-za-klimu-subotica.component').then(m => m.MaskaZaKlimuSuboticaComponent),
  },
  {
    path: 'maska-za-klimu-cacak',
    loadComponent: () => import('./components/maska-za-klimu-cacak/maska-za-klimu-cacak.component').then(m => m.MaskaZaKlimuCacakComponent),
  },
  {
    path: 'maska-za-klimu-valjevo',
    loadComponent: () => import('./components/maska-za-klimu-valjevo/maska-za-klimu-valjevo.component').then(m => m.MaskaZaKlimuValjevaComponent),
  },
  {
    path: 'maska-za-klimu-pancevo',
    loadComponent: () => import('./components/maska-za-klimu-pancevo/maska-za-klimu-pancevo.component').then(m => m.MaskaZaKlimuPancevoComponent),
  },
  {
    path: 'maske-za-klimu-po-meri',
    loadComponent: () => import('./components/maske-za-klimu-po-meri/maske-za-klimu-po-meri.component').then(m => m.MaskeZaKlimuPoMeriComponent),
  },
  {
    path: 'maska-za-klimu-zrenjanin',
    loadComponent: () => import('./components/maska-za-klimu-zrenjanin/maska-za-klimu-zrenjanin.component').then(m => m.MaskaZaKlimuZrenjaninComponent),
  },
  {
    path: 'maska-za-klimu-sabac',
    loadComponent: () => import('./components/maska-za-klimu-sabac/maska-za-klimu-sabac.component').then(m => m.MaskaZaKlimuSabacComponent),
  },
  {
    path: 'maska-za-klimu-leskovac',
    loadComponent: () => import('./components/maska-za-klimu-leskovac/maska-za-klimu-leskovac.component').then(m => m.MaskaZaKlimuLeskovacComponent),
  },
  {
    path: 'maska-za-klimu-zemun',
    loadComponent: () => import('./components/maska-za-klimu-zemun/maska-za-klimu-zemun.component').then(m => m.MaskaZaKlimuZemunComponent),
  },
  {
    path: 'maska-za-klimu-pozarevac',
    loadComponent: () => import('./components/maska-za-klimu-pozarevac/maska-za-klimu-pozarevac.component').then(m => m.MaskaZaKlimuPozarevacComponent),
  },
];

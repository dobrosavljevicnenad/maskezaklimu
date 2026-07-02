import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { MaskaDetailComponent } from './components/maska-detail/maska-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { ONamaComponent } from './components/o-nama/o-nama.component';
import { DostavaIPovracajComponent } from './components/dostava-i-povracaj/dostava-i-povracaj.component';
import { GalerijaComponent } from './components/galerija/galerija.component';
import { InfoComponent } from './components/info/info.component';
import { MaskeZaKlimeCenaComponent } from './components/maske-za-klime-cena/maske-za-klime-cena.component';
import { MaskaZaKlimuSpoljaComponent } from './components/maska-za-klimu-spolja/maska-za-klimu-spolja.component';
import { UkrasnaKutijaZaKlimuComponent } from './components/ukrasna-kutija-za-klimu/ukrasna-kutija-za-klimu.component';
import { MaskaZaKlimuBeogradComponent } from './components/maska-za-klimu-beograd/maska-za-klimu-beograd.component';
import { MaskaZaKlimuNoviSadComponent } from './components/maska-za-klimu-novi-sad/maska-za-klimu-novi-sad.component';
import { MaskaZaKlimuNisComponent } from './components/maska-za-klimu-nis/maska-za-klimu-nis.component';
import { MaskaZaKlimuKragujevacComponent } from './components/maska-za-klimu-kragujevac/maska-za-klimu-kragujevac.component';
import { MaskaZaKlimuSuboticaComponent } from './components/maska-za-klimu-subotica/maska-za-klimu-subotica.component';
import { MaskaZaKlimuCacakComponent } from './components/maska-za-klimu-cacak/maska-za-klimu-cacak.component';
import { MaskaZaKlimuValjevaComponent } from './components/maska-za-klimu-valjevo/maska-za-klimu-valjevo.component';
import { MaskaZaKlimuPancevoComponent } from './components/maska-za-klimu-pancevo/maska-za-klimu-pancevo.component';
import { MaskeZaKlimuPoMeriComponent } from './components/maske-za-klimu-po-meri/maske-za-klimu-po-meri.component';
import { MaskaZaKlimuZrenjaninComponent } from './components/maska-za-klimu-zrenjanin/maska-za-klimu-zrenjanin.component';
import { MaskaZaKlimuSabacComponent } from './components/maska-za-klimu-sabac/maska-za-klimu-sabac.component';
import { MaskaZaKlimuLeskovacComponent } from './components/maska-za-klimu-leskovac/maska-za-klimu-leskovac.component';
import { MaskaZaKlimuZemunComponent } from './components/maska-za-klimu-zemun/maska-za-klimu-zemun.component';
import { MaskaZaKlimuPozarevacComponent } from './components/maska-za-klimu-pozarevac/maska-za-klimu-pozarevac.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "order",
    component: OrderComponent
  },
  {
    path: 'proizvod/:slug',
    component: MaskaDetailComponent
  },
  {
    path: 'kontakt',
    component: ContactComponent
  },
  {
    path: 'o-nama',
    component: ONamaComponent
  },
  {
    path: 'dostava-i-povracaj',
    component: DostavaIPovracajComponent
  },
  {
    path: 'galerija',
    component: GalerijaComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'maske-za-klime-cena',
    component: MaskeZaKlimeCenaComponent
  },
  {
    path: 'maska-za-klimu-spolja',
    component: MaskaZaKlimuSpoljaComponent
  },
  {
    path: 'ukrasna-kutija-za-klimu',
    component: UkrasnaKutijaZaKlimuComponent
  },
  {
    path: 'maska-za-klimu-beograd',
    component: MaskaZaKlimuBeogradComponent
  },
  {
    path: 'maska-za-klimu-novi-sad',
    component: MaskaZaKlimuNoviSadComponent
  },
  {
    path: 'maska-za-klimu-nis',
    component: MaskaZaKlimuNisComponent
  },
  {
    path: 'maska-za-klimu-kragujevac',
    component: MaskaZaKlimuKragujevacComponent
  },
  {
    path: 'maska-za-klimu-subotica',
    component: MaskaZaKlimuSuboticaComponent
  },
  {
    path: 'maska-za-klimu-cacak',
    component: MaskaZaKlimuCacakComponent
  },
  {
    path: 'maska-za-klimu-valjevo',
    component: MaskaZaKlimuValjevaComponent
  },
  {
    path: 'maska-za-klimu-pancevo',
    component: MaskaZaKlimuPancevoComponent
  },
  {
    path: 'maske-za-klimu-po-meri',
    component: MaskeZaKlimuPoMeriComponent
  },
  {
    path: 'maska-za-klimu-zrenjanin',
    component: MaskaZaKlimuZrenjaninComponent
  },
  {
    path: 'maska-za-klimu-sabac',
    component: MaskaZaKlimuSabacComponent
  },
  {
    path: 'maska-za-klimu-leskovac',
    component: MaskaZaKlimuLeskovacComponent
  },
  {
    path: 'maska-za-klimu-zemun',
    component: MaskaZaKlimuZemunComponent
  },
  {
    path: 'maska-za-klimu-pozarevac',
    component: MaskaZaKlimuPozarevacComponent
  },
];

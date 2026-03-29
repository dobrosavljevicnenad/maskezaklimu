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


];

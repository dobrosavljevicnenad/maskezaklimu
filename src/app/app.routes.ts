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
  }


];

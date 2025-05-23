import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { MaskaDetailComponent } from './components/maska-detail/maska-detail.component';

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
  }
];

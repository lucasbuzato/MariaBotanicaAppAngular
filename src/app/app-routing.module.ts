import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketPlaceScreenComponent } from './market-place-screen/market-place-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CarrinhoScreenComponent } from './carrinho-screen/carrinho-screen.component';
import { FavoritosScreenComponent } from './favoritos-screen/favoritos-screen.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'marketplace', component: MarketPlaceScreenComponent },
  { path: 'carrinho', component: CarrinhoScreenComponent },
  { path: 'favoritos', component: FavoritosScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

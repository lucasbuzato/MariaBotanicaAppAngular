import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketPlaceScreenComponent } from './market-place-screen/market-place-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CarrinhoScreenComponent } from './carrinho-screen/carrinho-screen.component';
import { FavoritosScreenComponent } from './favoritos-screen/favoritos-screen.component';
import { ListatemperosComponent } from './listatemperos/listatemperos.component';
import { PaginatemperosComponent } from './paginatemperos/paginatemperos.component';
import { PaginachasComponent } from './paginachas/paginachas.component';
import { ListachasComponent } from './listachas/listachas.component';
import { PaginamudasComponent } from './paginamudas/paginamudas.component';
import { ListamudasComponent } from './listamudas/listamudas.component';

const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'marketplace', component: MarketPlaceScreenComponent },
  { path: 'carrinho', component: CarrinhoScreenComponent },
  { path: 'favoritos', component: FavoritosScreenComponent },
  { path: 'listatemperos', component: ListatemperosComponent },
  { path: 'paginatemperos', component: PaginatemperosComponent },
  { path: 'listamudas', component: ListamudasComponent },
  { path: 'paginamudas', component: PaginamudasComponent },
  { path: 'listachas', component: ListachasComponent },
  { path: 'paginachas', component: PaginachasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

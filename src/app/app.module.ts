import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { MarketPlaceScreenComponent } from './market-place-screen/market-place-screen.component';
import { CardComponent } from './card/card.component';
import { CarrinhoScreenComponent } from './carrinho-screen/carrinho-screen.component';
import { FavoritosScreenComponent } from './favoritos-screen/favoritos-screen.component';
import { ListatemperosComponent } from './listatemperos/listatemperos.component';
import { PaginatemperosComponent } from './paginatemperos/paginatemperos.component';
import { ListachasComponent } from './listachas/listachas.component';
import { ListamudasComponent } from './listamudas/listamudas.component';
import { PaginachasComponent } from './paginachas/paginachas.component';
import { PaginamudasComponent } from './paginamudas/paginamudas.component';
import { MinhasPlantasComponent } from './minhas-plantas/minhas-plantas.component';
import { MinhaplantapaginaComponent } from './minhaplantapagina/minhaplantapagina.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    MarketPlaceScreenComponent,
    CardComponent,
    CarrinhoScreenComponent,
    FavoritosScreenComponent,
    ListatemperosComponent,
    PaginatemperosComponent,
    ListachasComponent,
    ListamudasComponent,
    PaginachasComponent,
    PaginamudasComponent,
    MinhasPlantasComponent,
    MinhaplantapaginaComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

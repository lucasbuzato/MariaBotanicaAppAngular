import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { MarketPlaceScreenComponent } from './market-place-screen/market-place-screen.component';
import { CardComponent } from './card/card.component';
import { CarrinhoScreenComponent } from './carrinho-screen/carrinho-screen.component';
import { FavoritosScreenComponent } from './favoritos-screen/favoritos-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    MarketPlaceScreenComponent,
    CardComponent,
    CarrinhoScreenComponent,
    FavoritosScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

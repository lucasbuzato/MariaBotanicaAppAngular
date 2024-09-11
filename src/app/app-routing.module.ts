import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketPlaceScreenComponent } from './market-place-screen/market-place-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

HomeScreenComponent
const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'marketplace', component: MarketPlaceScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

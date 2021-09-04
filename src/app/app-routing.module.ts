import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCountryComponent } from './detail-country/detail-country.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'prefix' },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'detail',
    component: DetailCountryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

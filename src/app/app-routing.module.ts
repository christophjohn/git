import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UeberUnsComponent } from './pages/ueber-uns/ueber-uns.component';
import { ManuelszoneComponent } from './pages/manuelszone/manuelszone.component';
import { ChristophzoneComponent } from './pages/christophzone/christophzone.component';

const routes: Routes = [
  {path: 'start', component: LandingComponent},
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'ueber_uns', component: UeberUnsComponent},
  {path: 'manuelistdick', component: ManuelszoneComponent},
  {path: 'christoph', component: ChristophzoneComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

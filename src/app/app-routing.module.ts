import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UeberUnsComponent } from './pages/ueber-uns/ueber-uns.component';
import { ManuelszoneComponent } from './pages/manuelszone/manuelszone.component';
<<<<<<< HEAD
import { ChristophzoneComponent } from './pages/christophzone/christophzone.component';
=======
import { GraphenComponent } from './pages/graphen/graphen.component';
>>>>>>> 710818a8614a00b178a4ca891d508e702ad9b304

const routes: Routes = [
  {path: 'start', component: LandingComponent},
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'ueber_uns', component: UeberUnsComponent},
<<<<<<< HEAD
  {path: 'manuelistdick', component: ManuelszoneComponent},
  {path: 'christoph', component: ChristophzoneComponent},
=======
  {path: 'manuelszone', component: ManuelszoneComponent},
  {path: 'graphen', component: GraphenComponent},
>>>>>>> 710818a8614a00b178a4ca891d508e702ad9b304
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

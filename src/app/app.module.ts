import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavigationComponent } from './Sidebar/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UeberUnsComponent } from './pages/ueber-uns/ueber-uns.component';
import { GraphenComponent } from './pages/graphen/graphen.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ManuelszoneComponent } from './pages/manuelszone/manuelszone.component';
import { ChristophzoneComponent } from './pages/christophzone/christophzone.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    PageNotFoundComponent,
    UeberUnsComponent,
    GraphenComponent,
    ImpressumComponent,
    ManuelszoneComponent,
<<<<<<< HEAD
    ChristophzoneComponent
=======
    GraphenComponent
>>>>>>> 710818a8614a00b178a4ca891d508e702ad9b304
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

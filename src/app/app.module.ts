import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterWishComponent } from './components/ajouter-wish/ajouter-wish.component';
import { ListeWishComponent } from './components/liste-wish/liste-wish.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AgreementsComponent } from './pages/agreements/agreements.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterWishComponent,
    ListeWishComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    AgreementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

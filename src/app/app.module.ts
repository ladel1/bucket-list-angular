import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterWishComponent } from './components/ajouter-wish/ajouter-wish.component';
import { ListeWishComponent } from './components/liste-wish/liste-wish.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterWishComponent,
    ListeWishComponent
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

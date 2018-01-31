import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecervacionesComponent } from './recervaciones/recervaciones.component';
import { CatalogosComponent } from './catalogos/catalogos.component';


@NgModule({
  declarations: [
    AppComponent,
    RecervacionesComponent,
    CatalogosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { ListadoHComponent } from './hardware/listado-h/listado-h.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    ListadoHComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

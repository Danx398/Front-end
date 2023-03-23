import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CascadeComponent } from './ComponentCSS/cascade.component';
import { HyperComponent } from './ComponentHTML/hyper.component';
import { TypescriptComponent } from './ComponentTS/typescript.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    HyperComponent,
    CascadeComponent,
    TypescriptComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

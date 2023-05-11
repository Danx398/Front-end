import { Component } from '@angular/core';
import { Heroe } from './interfaces/heroe.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public recibeNombre (nombre:string){
    console.log(nombre);
  }
  public recibeHerores (heroe:Heroe){
    console.log(heroe);
  }
}

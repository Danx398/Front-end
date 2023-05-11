import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  public heroesListado : any [] = []; //input

  public cacharDatoEmitido(heroe : any) { //output
    this.heroesListado = [...heroe];
  }
}


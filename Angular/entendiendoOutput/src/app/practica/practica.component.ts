import { Component, EventEmitter, Output } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css']
})
export class PracticaComponent {
  @Output()
  public emitirInformacionHeroes : EventEmitter<Heroe> = new EventEmitter();
  public heroes : Heroe[]=[
    {nombre: 'spiderman', poder: 5000},
    {nombre: 'Hulk',poder: 30000}
  ]
  public enviarInformacion () : void{
    this.emitirInformacionHeroes.emit(this.heroes[1]);
  }

}

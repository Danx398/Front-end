import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/persona.interface';

@Component({
  selector: 'app-dbz-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  public personajeAdd: Personaje[] = [
    {
      nombre: '',
      poder: 0
    }
  ]
  @Output()
  public nuevoPersonaje : EventEmitter<Personaje> = new EventEmitter()
  public emitPersonaje():void{
    this.nuevoPersonaje.emit(this.personajeAdd[0])
  }
}

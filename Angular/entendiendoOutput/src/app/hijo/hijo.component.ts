import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  /* Definimos la propiedad que nos ayuda a emitir la información */
  @Output()
  public emitirInformacion: EventEmitter<string> = new EventEmitter();
  /* Definimos la propiedad que contiene la informacion a emitir */
  public nombre: string = "Danx398";
  /* Definimos el metodo que emite la informacion */
  public enviarInformacion(): void {
    this.emitirInformacion.emit(this.nombre)
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent {
  @Output()
  public mensaje : EventEmitter<string> = new EventEmitter()
  public hola () : void {
    this.mensaje.emit('Hola')
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-agregar-heroe',
  templateUrl: './agregar-heroe.component.html',
  styleUrls: ['./agregar-heroe.component.css']
})
export class AgregarHeroeComponent implements OnInit {
  @Output()
  public envio : any = new EventEmitter();
  

  ngOnInit(): void {
    this.enviarInformacion();
  }

  public heroe : any = {
    id : 0,
    nombre : ""
  };

  public heroes : any = [
		{id : 1, nombre : "Goku"},
		{id : 2, nombre : "Luffy"}
	];

  public enviarInformacion(): void {
    let datoNuevo: any = {
      id: this.heroe.id,
      nombre: this.heroe.nombre
    };

    if (this.heroe.id != 0) {
      this.heroes.push(datoNuevo);
    }
    this.envio.emit(this.heroes);
  }
}

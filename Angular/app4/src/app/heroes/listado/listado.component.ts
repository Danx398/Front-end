import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public heroes: string[] = ['Superman', 'DeadPool', 'SpiderMan', 'Batman', 'Fer lujan <3'];
  public usuarios: any = [
    {
      id: 1,
      nombre: "Daniel"
    },
    {
      id: 2,
      nombre: "Jose"
    },
    {
      id: 3,
      nombre: "Fatima"
    }
  ];
  public dios: any[] = [
    { nombre: 'Fernando', rango: 'Dios' },
    {nombre: 'Joss',rango: 'Dios'}
  ];
  public mayorEdad(edad: number): boolean {
    if (edad >= 18) {
      return true;
    } else {
      return false;
    }
  }
}

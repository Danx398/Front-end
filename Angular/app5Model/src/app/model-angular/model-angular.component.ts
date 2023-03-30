import { Component } from '@angular/core';

@Component({
  selector: 'app-model-angular',
  templateUrl: './model-angular.component.html',
  styleUrls: ['./model-angular.component.css']
})
export class ModelAngularComponent {
  public inventario: any = [
    {
      id: 1,
      nombre: "Pantalon",
      precio: 250
    },
    {
      id: 2,
      nombre: 'Chamarra',
      precio: 500
    }
  ];
  public formulario: any = {
    id: null,
    nombre: null,
    precio: null
  }
  public idRepetido(id: number): boolean {
    let idRepetido = this.inventario.find(function (element: any) {
      return (element.id == id ? true : false)
    });
    return idRepetido;

  }
  public limpiar(): void {
    this.formulario.id = null;
    this.formulario.nombre = null;
    this.formulario.precio = null;
  }
  public agregar(): void {
    let datoNuevo = {
      id: this.formulario.id,
      nombre: this.formulario.nombre,
      precio: this.formulario.precio
    }
    if (this.formulario.id != null && this.formulario.nombre != null && this.formulario.precio != null) {
      if (this.idRepetido(this.formulario.id)) {
        alert('Id repetida')
      }else{
        this.inventario.push(datoNuevo);
            alert("Agregado con Exito")
            this.limpiar();
      }    
        
    } else {
      alert('Datos vacios')
    }
  }
  public editar(id: number): void {
    for (let index = 0; index < this.inventario.length; index++) {
      if (this.inventario[index].id == id) {
        this.inventario[index].id = this.formulario.id;
        this.inventario[index].nombre = this.formulario.nombre;
        this.inventario[index].precio = this.formulario.precio;
        alert("Se ha modificado con exito!")
        this.limpiar()
        break;
      }
    }
  }
  public seleccionar(articulos: any): void {
    this.formulario.id = articulos.id;
    this.formulario.nombre = articulos.nombre;
    this.formulario.precio = articulos.precio;
  }
  public eliminar(id: number): void {
    for (let index = 0; index < this.inventario.length; index++) {
      if (this.inventario[index].id == id) {
        this.inventario.splice(index, 1);
        alert("Eliminado con exito");
        break;
      }

    }
  }
}

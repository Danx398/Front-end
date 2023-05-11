import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-crud',
  templateUrl: './ng-crud.component.html',
  styleUrls: ['./ng-crud.component.scss']
})
export class NgCrudComponent {
  public inventario: any = [
    { id: 1, nombre: 'Ropa1', precio: 100 },
    { id: 2, nombre: 'Ropa2', precio: 200 },

  ]
  public formulario: any = {
    id: "",
    nombre: "",
    precio: ""
  }
  public agregar(): void {
    if (this.validarVacios()) {
      if (this.buscarRepetidos()) {
        let datoNuevo = {
          id: this.formulario.id,
          nombre: this.formulario.nombre,
          precio: this.formulario.precio
        }
        this.inventario.push(datoNuevo)
        this.limpiar()
        alert('Agregado con exito')
      }
    }
  }
  public seleccionar(articulo: any): void {
    this.formulario.id = articulo.id
    this.formulario.nombre = articulo.nombre
    this.formulario.precio = articulo.precio

  }
  public eliminar(id: number): void {
    for (let i = 0; i < this.inventario.length; i++) {
      if (this.inventario[i].id === id) {
        this.inventario.splice(i, 1)
        alert('Eliminado con exito')
        break
      }
    }
  }
  public actualizar(): void {
    if (this.validarVacios()) {
      if (this.idValido()) {
        let id = this.formulario.id
        for (let i = 0; i < this.inventario.length; i++) {
          if (this.inventario[i].id === id) {
            this.inventario[i].id = this.formulario.id;
            this.inventario[i].nombre = this.formulario.nombre;
            this.inventario[i].precio = this.formulario.precio;
            this.limpiar()
            alert('Actualizado correctamente')
            break
          }
        }
      }
    }
  }
  public limpiar(): void {
    this.formulario.id = '',
      this.formulario.nombre = '',
      this.formulario.precio = ''
  }
  public validarVacios(): boolean {
    if (this.formulario.id == "" || this.formulario.nombre == "" || this.formulario.precio == "") {
      alert('Datos vacios')
      return false
    }
    else {
      return true
    }
  }
  public buscarRepetidos(): boolean {
    let id = this.formulario.id;
    for (let i = 0; i < this.inventario.length; i++) {
      if (this.inventario[i].id === id) {
        alert('Id repetido')
        return false
      }
    }
    return true
  }
  public idValido(): boolean {
    let id = this.formulario.id;
    for (let i = 0; i < this.inventario.length; i++) {
      if (this.inventario[i].id == id) {
        return true
      }
    }
    alert("ese id no es valido")
    return false;
  }
}

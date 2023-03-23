import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo:string = 'Contador';
  public variable:number = 10;
  public baseNumber:number = 10;
  public baseMultiplo : number = 5;
  public sumar1 ():void{
    this.variable += 1;
  }
  public restar1 () :void{
    this.variable -=1;
  }
  public contador (valor:number ) : void {
    this.variable += valor
  }
  public Contador2 : string = 'Contador de Base';
  public base (valor:number) : void{
    this.baseNumber += valor;
  }
}

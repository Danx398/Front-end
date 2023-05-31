import { Component } from '@angular/core';
import { articulo } from './interfaces/articulos.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public articulos: articulo[] = [];
  public validacion: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let url = 'http://localhost/www/productos/';
    this.http.get<articulo[]>(url)
      .subscribe(
        resultado => {
          this.articulos = resultado;
          console.log(resultado);
          if(this.articulos.length > 0){
            this.validacion =  true
          }else{
            this.validacion =  false
          }
          console.log(this.validacion);
        }
      )
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listar-heroes',
  templateUrl: './listar-heroes.component.html',
  styleUrls: ['./listar-heroes.component.css']
})
export class ListarHeroesComponent {
  @Input()
  public heroesListadoTotal : any[] = [];
}

import { Component } from '@angular/core';
import { Persona } from './interfaces/persona';

@Component({
	selector: 'app-prueba',
	templateUrl: './prueba.component.html',
	styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent {
	public verdad: boolean = false;
	public persona: any = [{
		id: 1,
		nombre: "Daniel",
		rfc: 'CCCD170934KS1'
	},
	{
		id: 2,
		nombre: "Jose",
		rfc: 'CCCD170934KS1'
	},
	{
		id: 3,
		nombre: "Danit",
		rfc: 'CCCD170934KS1'
	}
	]
	public personaInterface: Persona[] = [{
		nombre: "Daniel",
		paterno: "Blancas",
		materno: "Aguilar"
	},
	{
		nombre: "Berenice",
		paterno: "Suarez",
		materno: "Sanchez"
	}]
}

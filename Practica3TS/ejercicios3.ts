class ejercicios3 {
  /* La asociación de vinicultores tiene como política fijar un precio inicial al kilo de uva, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por la uva que entrega en un embarque, considerando lo siguiente: si es de tipo A, se le cargan 20 céntimos al precio inicial cuando es de tamaño 1 y 30 céntimos si es de tamaño 2. Si es de tipo B, se rebajan 30 céntimos cuando es de tamaño 1, y 50 céntimos cuando es de tamaño 2. Realice un algoritmo para determinar la ganancia obtenida. */
  public ejercicio1() {
    let tipoUva: any = prompt(
      "Introduce el tipo de Uva\nRecuerda que hay tipo A y B"
    );
    let tamanioUva: number = Number(
      prompt("Introduce el Tamaño\nRecuerda que son tipo 1 y 2")
    );
    let precioFinal: number = 0;
    let precioUva: number = Number(prompt("Introduce el precio de la uva"));
    console.log(tipoUva.toUpperCase(), tamanioUva);
    if (tipoUva.toUpperCase() == "A") {
      if (tamanioUva == 1) {
        precioFinal += 0.2;
      } else if (tamanioUva == 2) {
        precioFinal += 0.3;
      }
    } else if (tipoUva.toUpperCase() == "B") {
      if (tamanioUva == 1) {
        precioFinal -= 0.3;
      } else if (tamanioUva == 2) {
        precioFinal += 0.5;
      }
    }
    let precioDD = precioFinal + precioUva;
    window.alert(
      `El tipo es: ${tipoUva.toUpperCase()}\nEl tamaño: ${tamanioUva}\nLa ganacia son: ${precioDD}`
    );
  }
  public ejercicio2() {
    /* El director de una escuela está organizando un viaje de estudios, y requiere determinar cuánto debe cobrar a cada alumno y cuánto debe pagar a la compañía de viajes por el servicio. La forma de cobrar es la siguiente: si son 100 alumnos o más, el costo por cada alumno es de 65 euros; de 50 a 99 alumnos, el costo es de 70 euros, de 30 a 49, de 95 euros, y si son menos de 30, el costo de la renta del autobús es de 4000 euros, sin importar el número de alumnos. Realice un algoritmo que permita determinar el pago a la compañía de autobuses y lo que debe pagar cada alumno por el viaje.
     */
    let alumnos: number = Number(
      prompt("Introduce el numero de alumnos entre 0 y 100")
    );
    let costoAlumnos: number = 0;
    let costoTotal: number = 0;
    if (alumnos >= 100) {
      costoAlumnos = 65;
    } else if (alumnos >= 50 && alumnos <= 99) {
      costoAlumnos = 70;
    } else if (alumnos >= 30 && alumnos <= 49) {
      costoAlumnos = 95;
    } else {
      costoAlumnos = 0;
      costoTotal = 4000;
    }
    if (costoAlumnos > 0) {
      costoTotal = alumnos * costoAlumnos;
    }
    let pagoCompany: number = costoTotal/alumnos;
    if (costoAlumnos == 0) {
      window.alert(
        `El numero de alumnos es: ${alumnos}\nEl pago a la compañia es de: ${pagoCompany}`
      );
    } else {
      window.alert(
        `El numero de alumnos es: ${alumnos}\nEl pago por alumno es: ${costoAlumnos}`
      );
    }
  }
  public ejercicio3() {
    /* La política de cobro de una compañía telefónica es: cuando se realiza una llamada, el cobro es por el tiempo que ésta dura, de tal forma que los primeros cinco minutos cuestan 1 euro, los siguientes tres, 80 céntimos, los siguientes dos minutos, 70 céntimos, y a partir del décimo minuto, 50 céntimos. Además, se carga un impuesto de 3 % cuando es domingo, y si es otro día, en turno de mañana, 15 %, y en turno de tarde, 10 %. Realice un algoritmo para determinar cuánto debe pagar por cada concepto una persona que realiza una llamada. */
    let duracion: number = Number(
      prompt("Introduce la duración de la llamada")
    );
    let dia: any = prompt("Introduce el dia ej: lunes" ?? "");
    let turno: any;
    let costo: number;
    let impuesto: number;
    if (duracion <= 5) {
      costo = 1;
    } else if (duracion <= 8) {
      costo = 1 + 0.8 * (duracion - 5);
    } else if (duracion <= 10) {
      costo = 1 + 0.8 * 3 + 0.7 * (duracion - 8);
    } else {
      costo = 1 + 0.8 * 3 + 0.7 * 2 + 0.5 * (duracion - 10);
    }

    if (dia != "domingo") {
      turno = prompt("Introduce el turno ej: mañana" ?? "");
      impuesto = costo * 0.01;
    } else {
      impuesto = costo * 0.03;
    }
    if (turno === "mañana") {
      impuesto = costo * 0.15;
    } else {
      impuesto = costo * 0.1;
    }
    const costoTotal = costo + impuesto;
    window.alert(
      `El costo de la llamada es de ${costo}\nEl impuesto a pagar es de ${impuesto}\nEl costo total de la llamada es de ${costoTotal} Euros`
    );
  }
}
let objeto = new ejercicios3();
// objeto.ejercicio1()
// objeto.ejercicio2();
// objeto.ejercicio3();

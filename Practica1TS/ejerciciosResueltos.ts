class EjerciciosV1 {
  public ejercicio1() {
    let numeros: number[] = [];
    let cubo: number[] = [];
    for (let i = 0; i < 10; i++) {
      numeros.push(Math.floor(Math.random() * 15));
    }
    numeros.map((num) => {
      cubo.push(num ** 3);
    });
    console.table(numeros);
    console.table(cubo);
  }
  public ejercicio2() {
    let cadenas: string[] = [];
    let cadenasCopia: string[] = [];
    for (let i = 0; i < 5; i++) {
      cadenas.push(prompt(`escribe cadena` + (i + 1)) ?? "");
    }
    cadenasCopia = [...cadenas];
    cadenasCopia.reverse();

    console.table(cadenas);
    console.table(cadenasCopia);
  }
  public ejercicio3() {
    let calificaciones: number[] = [];
    let valor: number = 0;
    let max: number = 0;
    let min: number = 0;
    let sumatoria: number = 0;
    for (let i = 1; i <= 5; i++) {
      valor = Number(prompt(`escribe numeros de 0 - 10   ` + (i + 1)));
      calificaciones.push(valor);
      sumatoria += valor;
    }
    sumatoria = sumatoria / 5;
    calificaciones = calificaciones.sort((a, b) => a - b);
    max = calificaciones[4];
    min = calificaciones[0];
    console.log(
      `Calificacion mas alta ${max} \nCalificacion mas baja ${min}\nEl promedio es ${sumatoria}`
    );
  }
  public ejercicio4() {
    let numeros: number[] = [];
    let valor: number = 0;
    for (let i = 0; i < 10; i++) {
      valor = Number(prompt(`escribe un numero` + (i + 1)));
      numeros.push(valor);
      if (numeros[i] < 0) {
        break;
      }
    }
    console.table(numeros);
  }
  public ejercicio5() {
    const arreglo: number[] = [];
    for (let i = 0; i < 20; i++) {
      arreglo.push(Math.floor(Math.random() * 15));
    }
    console.log(arreglo);
    console.log(arreglo.sort((a, b) => a - b));
  }
}
let objeto = new EjerciciosV1();
// objeto.ejercicio1();
// objeto.ejercicio2();
// objeto.ejercicio3();
// objeto.ejercicio4();
objeto.ejercicio5();

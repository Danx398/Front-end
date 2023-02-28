var ejercicios2 = /** @class */ (function () {
    function ejercicios2() {
    }
    ejercicios2.prototype.ejercicio1 = function () {
        var nombre = prompt("Dime tu nombre");
        window.alert("Hola se bienvenido " + nombre);
    };
    ejercicios2.prototype.ejercicio2 = function () {
        var base = Number(prompt("Ingrese la base:"));
        var altura = Number(prompt("Ingrese la altura:"));
        var area = (base * altura);
        // let perimetro:number = ()
        window.alert("el area del rectangulo es: ".concat(area));
    };
    ejercicios2.prototype.ejercicio3 = function () {
        var catetoOpuesto = Number(prompt("Ingrese el cateto opuesto:"));
        var catetoAdyasente = Number(prompt("Ingresa el cateto adyasente:"));
        var hipotenusa = (Math.pow(catetoOpuesto, 2) + Math.pow(catetoAdyasente, 2));
        window.alert("La hipotenusa es: ".concat(hipotenusa));
    };
    ejercicios2.prototype.ejercicio4 = function () {
        var numero1 = Number(prompt("intoduce el primer numero: "));
        var numero2 = Number(prompt("intoduce el segundo numero: "));
        var suma = (numero1 + numero2);
        var resta = (numero1 - numero2);
        var mult = (numero1 * numero2);
        var divis = (numero1 / numero2);
        window.alert("La suma es: ".concat(suma, "\nLa resta es ").concat(resta, "\nLa multiplicacion es: ").concat(mult, "\nLa divisi\u00F3n es: ").concat(divis));
    };
    ejercicios2.prototype.ejercicio5 = function () {
        var Far = Number(prompt("intoduce los grados Farenheit a convertir: "));
        var celcius = (Far - 32) * (5 / 9);
        var c2 = (Far - 32) * (0.5556);
        console.log(celcius, c2);
        // window.alert(`Los grados celcius son: ${celcius}° Celcius`)
        window.alert("Los grados celcius son: ".concat(c2, "\u00B0 Celcius"));
    };
    ejercicios2.prototype.ejercicio6 = function () {
        var numeros = [];
        var suma = 0;
        for (var i = 0; i < 3; i++) {
            var numero = Number(prompt("ingrese el ".concat(i + 1, " valor")));
            numeros.push(numero);
        }
        for (var k = 0; k < numeros.length; k++) {
            suma += numeros[k];
        }
        window.alert("El promedio  es: ".concat(suma / 3));
    };
    ejercicios2.prototype.ejercicio7 = function () {
        var minutos = Number(prompt("ingrese los minutos"));
        var horas = Math.floor(minutos / 60);
        var minutosFin = minutos % 60;
        window.alert("Las horas son: ".concat(horas, ", los minutos: ").concat(minutosFin, "\n").concat(horas, ":").concat(minutosFin));
    };
    ejercicios2.prototype.ejercicio8 = function () {
        var sueldoBase = Number(prompt("Ingresa tu sueldo: "));
        var comision = sueldoBase * 0.3;
        window.alert("Tu nuevo sueldo sera: ".concat(sueldoBase + comision, " pesos"));
    };
    ejercicios2.prototype.ejercicio9 = function () {
        var ventaTotal = Number(prompt("Ingresa el total de tus productos: "));
        var descuento = ventaTotal * 0.15;
        window.alert("Tu nueva factura sera de: ".concat(ventaTotal - descuento, " pesos"));
    };
    ejercicios2.prototype.ejercicio10 = function () {
        var calificacion = [];
        var suma = 0;
        for (var i = 0; i < 3; i++) {
            var promedio_1 = Number(prompt("Ingresa la ".concat(i + 1, " calificaci\u00F3n entre 1 y 100:")));
            calificacion.push(promedio_1);
        }
        for (var k = 0; k < calificacion.length; k++) {
            suma += calificacion[k];
        }
        var promedio = suma / 3;
        var porcentajePromedio = (promedio * 55) / 100;
        var examen = Number(prompt("Ingresa la calificaci\u00F3n entre 1 y 100 del examen:"));
        var porcentajeExamen = (examen * 30) / 100;
        var trabajo = Number(prompt("Ingresa la calificaci\u00F3n entre 1 y 100 del trabajo final:"));
        var porcentajeTrabajo = (trabajo * 15) / 100;
        var sumaTotal = porcentajePromedio + porcentajeExamen + porcentajeTrabajo;
        window.alert("Tu promedio final es: ".concat(sumaTotal, "\nEl porcentaje de la calificaci\u00F3n es: ").concat(porcentajePromedio, "% de 55%\nEl porcentaje de el examen es: ").concat(porcentajeExamen, "% de 30%\nEl porcentaje de tu trabajo final es: ").concat(porcentajeTrabajo, "% de 15%\nEstatus: ").concat(sumaTotal >= 60 ? 'Aprobado' : 'Reprobado'));
    };
    return ejercicios2;
}());
var obj = new ejercicios2();
// obj.ejercicio1();
// obj.ejercicio2();
// obj.ejercicio3()
// obj.ejercicio4();
// obj.ejercicio5()
//obj.ejercicio6()
// obj.ejercicio7();
// obj.ejercicio8()
// obj.ejercicio9()
//obj.ejercicio10();

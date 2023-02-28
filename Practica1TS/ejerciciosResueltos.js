var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var EjerciciosV1 = /** @class */ (function () {
    function EjerciciosV1() {
    }
    EjerciciosV1.prototype.ejercicio1 = function () {
        var numeros = [];
        var cubo = [];
        for (var i_1 = 0; i_1 < 10; i_1++) {
            numeros.push(Math.floor(Math.random() * 15));
        }
        numeros.map(function (num) {
            cubo.push(Math.pow(num, 3));
        });
        console.table(numeros);
        console.table(cubo);
    };
    EjerciciosV1.prototype.ejercicio2 = function () {
        var _a;
        var cadenas = [];
        var cadenasCopia = [];
        for (var i_2 = 0; i_2 < 5; i_2++) {
            cadenas.push((_a = prompt("escribe cadena" + (i_2 + 1))) !== null && _a !== void 0 ? _a : "");
        }
        cadenasCopia = __spreadArray([], cadenas, true);
        cadenasCopia.reverse();
        console.table(cadenas);
        console.table(cadenasCopia);
    };
    EjerciciosV1.prototype.ejercicio3 = function () {
        var calificaciones = [];
        var valor = 0;
        var max = 0;
        var min = 0;
        var sumatoria = 0;
        for (var i_3 = 1; i_3 <= 5; i_3++) {
            valor = Number(prompt("escribe numeros de 0 - 10   " + (i_3 + 1)));
            calificaciones.push(valor);
            sumatoria += valor;
        }
        sumatoria = sumatoria / 5;
        calificaciones = calificaciones.sort(function (a, b) { return a - b; });
        max = calificaciones[4];
        min = calificaciones[0];
        console.log("Calificacion mas alta ".concat(max, " \nCalificacion mas baja ").concat(min, "\nEl promedio es ").concat(sumatoria));
    };
    EjerciciosV1.prototype.ejercicio4 = function () {
        var numeros = [];
        var valor = 0;
        for (var i_4 = 0; i_4 < 10; i_4++) {
            valor = Number(prompt("escribe un numero" + (i_4 + 1)));
            numeros.push(valor);
            if (numeros[i_4] < 0) {
                break;
            }
        }
        console.table(numeros);
    };
    EjerciciosV1.prototype.ejercicio5 = function () {
        var arreglo = [];
        for (var i_5 = 0; i_5 < 20; i_5++) {
            arreglo.push(Math.floor(Math.random() * 15));
        }
        console.log(arreglo);
        console.log(arreglo.sort(function (a, b) { return a - b; }));
    };
    return EjerciciosV1;
}());
var objeto = new EjerciciosV1();
// objeto.ejercicio1();
// objeto.ejercicio2();
// objeto.ejercicio3();
// objeto.ejercicio4();
objeto.ejercicio5();

class ejercicios2{
    public ejercicio1(){
        let nombre = prompt("Dime tu nombre");
        window.alert("Hola se bienvenido "+nombre);
    }
    public ejercicio2(){
        let base:number = Number(prompt("Ingrese la base:"));
        let altura:number = Number(prompt("Ingrese la altura:"));
        let area:number = (base * altura);
        // let perimetro:number = ()
        window.alert(`el area del rectangulo es: ${area}`);
        
    }
    public ejercicio3(){
        let catetoOpuesto :number = Number(prompt("Ingrese el cateto opuesto:"))
        let catetoAdyasente :number = Number(prompt("Ingresa el cateto adyasente:"))    
        let hipotenusa = (Math.pow(catetoOpuesto,2) + Math.pow(catetoAdyasente,2));
        window.alert(`La hipotenusa es: ${hipotenusa}`)
    }

    public ejercicio4(){
        let numero1 : number = Number(prompt("intoduce el primer numero: "))
        let numero2 : number = Number(prompt("intoduce el segundo numero: "))
        let suma = (numero1 + numero2)
        let resta = (numero1 - numero2)
        let mult = (numero1 * numero2)
        let divis = (numero1 / numero2)
        window.alert(`La suma es: ${suma}\nLa resta es ${resta}\nLa multiplicacion es: ${mult}\nLa división es: ${divis}`)

    }
    public ejercicio5(){
        let Far : number = Number(prompt("intoduce los grados Farenheit a convertir: "))
        let celcius = (Far-32)*(5/9)
        let c2 = (Far-32)*(0.5556)
        console.log(celcius, c2);
        // window.alert(`Los grados celcius son: ${celcius}° Celcius`)
        window.alert(`Los grados celcius son: ${c2}° Celcius`)
    }
    public ejercicio6(){
        let numeros : number[] =[];
        let suma:number = 0;
        for (let i = 0; i < 3; i++) {
            let numero = Number(prompt(`ingrese el ${i+1} valor`));
            numeros.push(numero);
        }
        for (let k = 0; k < numeros.length; k++) {
            suma += numeros[k];
        }
        window.alert(`El promedio  es: ${suma/3}`);
    }
    public ejercicio7(){
        let minutos:any = Number(prompt("ingrese los minutos"));
        const horas:number =Math.floor(minutos/60);
        const minutosFin:number = minutos % 60;
        window.alert(`Las horas son: ${horas}, los minutos: ${minutosFin}\n${horas}:${minutosFin}`)
    }
    public ejercicio8(){
        let sueldoBase :number = Number(prompt("Ingresa tu sueldo: "))
        let comision:number = sueldoBase * 0.3
        window.alert(`Tu nuevo sueldo sera: ${sueldoBase + comision} pesos`)
    }
    public ejercicio9(){
        let ventaTotal:number = Number(prompt("Ingresa el total de tus productos: "))
        let descuento:number = ventaTotal*0.15
        window.alert(`Tu nueva factura sera de: ${ventaTotal - descuento} pesos`)
    }
    public ejercicio10(){
        let calificacion :number[]=[];
        let suma :number = 0;
        for (let i = 0; i < 3; i++) {
            let promedio = Number(prompt(`Ingresa la ${i+1} calificación entre 1 y 100:`))
            calificacion.push(promedio)
        }
        for (let k = 0; k < calificacion.length; k++) {
            suma+=calificacion[k]
        }
        let promedio= suma/3;
        let porcentajePromedio:any = (promedio * 55)/100
        let examen:number = Number(prompt(`Ingresa la calificación entre 1 y 100 del examen:`))
        let porcentajeExamen:any = (examen*30)/100
        let trabajo:number = Number(prompt(`Ingresa la calificación entre 1 y 100 del trabajo final:`))
        let porcentajeTrabajo:any = (trabajo*15)/100
        let sumaTotal:any = porcentajePromedio+porcentajeExamen+porcentajeTrabajo;
        window.alert(`Tu promedio final es: ${sumaTotal}\nEl porcentaje de la calificación es: ${porcentajePromedio}% de 55%\nEl porcentaje de el examen es: ${porcentajeExamen}% de 30%\nEl porcentaje de tu trabajo final es: ${porcentajeTrabajo}% de 15%\nEstatus: ${sumaTotal>=60?'Aprobado':'Reprobado'}`)

        
    }
}

let obj = new ejercicios2();
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
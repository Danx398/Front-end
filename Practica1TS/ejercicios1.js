/* 1.- Relizar un programa que defina un arreglo de 10 enteros, a continuacion hay que inicializarlo con numeros aleatorios, posteriormente hay que mostrar los datos del arreglo pero elevados al cubo.

2.- Crear un arreglo de 5 elementos de cadenas de texto, inicializar el arreglo con elementos obtenidos desde teclado, copiamos los elementos del arreglo en otro arreglo y lo mostramos de manera inversa

3.- Realizar un programa que obtenga por teclado 5 calificaciones comprendidas entres 0 y 10. A continuacion debe mostrar todas las notas, la nota media, la nota mas alta y la menor nota.

4.- realizar un programa que pida 10 numeros por teclado, cuando se ingrese un numero negativo por teclado debe mostrarse el arreglo hasta donde haya sido llenado.

5.- hacer un programa que inicialice un arreglo de numeros con valores aleatorios y posteriormente ordene los elementos de menor a mayor y los muestre */
// 1
// let numeros : number[]= [3,4,5,3,2,3,1,2,1,9];
/* numeros.map(num=>{
    // console.log(num*num*num);
    console.log(Math.pow(num,3));
    
}); */
// 2
// let mensaje = prompt("Dame un mensaje");
// console.log(mensaje);
/* let cadenas : string[] =[];

for (let i = 0; i < 5; i++) {
    let mensaje = prompt("Dame un mensaje");
    cadenas.push(`${mensaje}`);
}
console.log(cadenas);

let copia:string[]= cadenas.slice();
console.log(copia.reverse()); */
// 3
/* let numerosMedia:number[]=[];

for (let i = 0; i < 5; i++) {
    let mensaje = prompt("Dame un numero entre 0 y 10");
    numerosMedia.push(parseInt(`${mensaje}`));
}
let suma:number = 0;
for (let k = 0; k < numerosMedia.length; k++) {
    suma += numerosMedia[k]
}
let media = suma/numerosMedia.length;
let maxi = Math.max(...numerosMedia);
let min = Math.min(... numerosMedia);
console.log(numerosMedia+' \n',media+'\n',maxi+'\n',min); */
//4
/* let numeros2:number[]=[];
for (let i = 0; i < 10; i++) {
    let mensaje = prompt("Dame un numero entre 0 y 10");
    if (parseInt(`${mensaje}`)<0) {
        break;
    }
    numeros2.push(parseInt(`${mensaje}`));
}
console.log(numeros2); */
//5 
/* const arreglo: number[] = [];
for (let i = 0; i < 10; i++) {
  arreglo.push(Math.floor(Math.random() * 10));
}
console.log(arreglo);
console.log(arreglo.sort((a, b) => a - b));

 */ 

//Taller 2

//Punto 1
function invertirString(cadena){
    let invertido = "";
    for (let i = cadena.length; i != 0; i--) {
        invertido += cadena[i-1];
    }
    return invertido
}
console.log(invertirString("Palindromo"));

//Punto 2
function findMax(numeros){
    let mayor = numeros[0];
    for (let i = 1; i != numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor
}
const listNum = [2,30,50,10,8,60,5,2];
console.log(findMax(listNum));

//Punto 3
function includes(numeros, inc){
    for (let i = 0; i != numeros.length; i++) {
        if(numeros[i] == inc){
            return true
        }
    }
    return false
}
const listNum2 = [2,4,6,8,10];
console.log(includes(listNum2, 10));

//Punto 4
function sum(numeros){
    let suma = 0;
    for (let i = 0; i != numeros.length; i++) {
       suma += numeros[i]
    }
    return suma
}
const listNum3 = [5,10,15,-5];
console.log(sum(listNum3));

//Punto 5
function missingNumbers(numeros){
    const faltantes = [];
    let max = findMax(numeros);
    let min = findMin(numeros);
    ct = 0;
    for (let i = min+1; i != max; i++) {
        if (includes(numeros, i) == false) {
            faltantes[ct] = i;
            ct +=1
        }
    }
    return faltantes
}
const listNum4 = [0,1,5,9,12];
console.log(missingNumbers(listNum4));

//El hermano perdido
function findMin(numeros){
    let menor = numeros[0];
    for (let i = 1; i != numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return menor
}
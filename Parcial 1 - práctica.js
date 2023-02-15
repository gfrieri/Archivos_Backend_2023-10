//Taller Práctica

/*function cuadrados(numeros){
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = numeros[i]**2;
    }
    return numeros
}
const listaNum = [1,2,3,4,5];
console.log(cuadrados(listaNum));*/

//Punto 01
const listaNum = [1,2,3,4,5];
const square = (num) => num**2;
console.log(listaNum.map(square));

//Punto 2
function oddSum(numeros){
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i]%2 != 0) {
            suma += numeros[i];
        }
    }
    return suma
}
const listaNum2 = [1,2,3,4,5];
console.log(oddSum(listaNum2));

/*const listaNum2 = [1,2,3,4,5];
const oddSum = (num) => !(num%2) ? num+num : num;
console.log(listaNum2.reduce(oddSum));*/



const estudiante1 = {
    "_id": "asc5sde01",
    "firstName": "Mariana",
    "lastName": "Hernandez",
    "height": 1.5,
    "courses": [
    {
    "name": "Inglés",
    "grade": 2.5
    },
    {
    "name": "Matemáticas",
    "grade": 3.6
    },
    {
    "name": "Castellano",
    "grade": 4.7
    },
    {
    "name": "Química",
    "grade": 5.0
    },
    {
    "name": "Sociales",
    "grade": 1.3
    }
    ]
}
const estudiante2 = {
    "_id": "asc0001",
    "firstName": "Meleno",
    "lastName": "Talto",
    "height": 2.2,
    "courses": [
    {
    "name": "Inglés",
    "grade": 4.0
    },
    {
    "name": "Matemáticas",
    "grade": 5.0
    },
    {
    "name": "Castellano",
    "grade": 5.0
    },
    {
    "name": "Química",
    "grade": 5.0
    },
    {
    "name": "Sociales",
    "grade": 5.0
    }
    ]
}
const estudiante3 = {
    "_id": "asc5sde01",
    "firstName": "Pedro",
    "lastName": "Perez",
    "height": 2,
    "courses": [
    {
    "name": "Inglés",
    "grade": 2.5
    },
    {
    "name": "Matemáticas",
    "grade": 2.3
    },
    {
    "name": "Castellano",
    "grade": 1.5
    },
    {
    "name": "Química",
    "grade": 1.4
    },
    {
    "name": "Sociales",
    "grade": 1.3
    }
    ]
}
const lista = [estudiante1, estudiante2, estudiante3]

//Punto 3 NO DOYYY AA
function matriculaCondicional(listaEst){
    const condicional = [];
    for (let i = 0; i < lista.length; i++) {
        condicional[i] = listaEst[i].courses;
    }
    for (let i = 0; i < condicional.length; i++) {
        let prom = 0;
        for (let j = 0; j < condicional[i].length; j++) {
            prom += condicional[i][j].grade
        }
        prom /= condicional[i].length
        if (prom <= 3.3) {
            contCondicional ++;
        }
    }
    return [contCondicional]
}
console.log(matriculaCondicional(lista));


//Punto 4
function nombresCompletos(listaEst){
    const losNombres = [];
    for (let i = 0; i < lista.length; i++) {
        losNombres[i] = listaEst[i].firstName + " " + listaEst[i].lastName;
    }
    return losNombres
}
console.log(nombresCompletos(lista));

//Punto 5
function idPorAltura(listaEst){
    const listaAltura = sortObjectsAsc(listaEst, "height");
    const losIds = [];
    for (let i = 0; i < listaAltura.length; i++) {
        losIds[i] = listaAltura[i]._id;
    }
    return losIds
}
console.log(idPorAltura(lista));

//Punto 6
function factorial(numero){
    let fact = 1;
    for (let i = 1; i <= numero; i++) {
        fact *= i;
    }
    return fact
}
console.log(factorial(4));

//Punto 7
function promLista(numeros){
    let prom = 0;
    for (let i = 0; i < numeros.length; i++) {
        prom += numeros[i];
    }
    prom /= numeros.length;
    return prom
}
const listaNum3 = [1,2,3,4,5];
console.log(promLista(listaNum3));

//Punto 8
function pruebaPalindroma(palabra){
    let invertido = "";
    for (let i = palabra.length; i != 0; i--) {
        invertido += palabra[i-1];
    }
    if (invertido == palabra){
        return true
    }else{
        return false
    }
}
console.log(pruebaPalindroma("onomatopeia"));
console.log(pruebaPalindroma("aerea"));

//Punto 9
function invertirPalabras(oracion){
    let invertido = "";
    let palabras = oracion.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        for (let j = palabras[i].length; j != 0 ; j--) {
            invertido += palabras[i][j-1];
        }
        invertido += " "
    }
    return invertido.trim()
}
console.log(invertirPalabras("anita lava la tina"));
console.log(invertirPalabras("esto es un ejemplo"));

//Punto 10
const listaCualquiera = 
    [
    {altura: 1.7, puntaje: 7},
    {altura: 1.3, puntaje: 10},
    {altura: 2.0, puntaje: 8}
    ];
function sortObjectsAsc(listaCualquiera, key){
    const sortAsc = (val1, val2) => val1[key] - val2[key];
    return listaCualquiera.sort(sortAsc)
}
console.log(sortObjectsAsc(listaCualquiera, "altura"));

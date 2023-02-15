//Taller 3

//Punto 1
function promedioFinal(numeros){
    numeros = numeros.flat();
    let prom = 0;
    for (let i = 0; i < numeros.length; i++) {
        prom += numeros[i];
    }
    prom /= numeros.length;
    return prom
}
const listListNum = [[4,5],[2,1],[0,1],[7,0]];
console.log(promedioFinal(listListNum));

//Punto 2
const nombrePersona = "Victor Garcez     ";
const  limpiarNombre = (nombre) => nombre.trim().split(" ");
console.log(limpiarNombre(nombrePersona));

//Punto 3
const lista = 
    [
    {altura: 1.7, puntaje: 7},
    {altura: 1.3, puntaje: 10},
    {altura: 2.0, puntaje: 8}
    ];
function sortObjects(lista, key){
    const sortAsc = (val1, val2) => val1[key] - val2[key];
    return lista.sort(sortAsc)
}
console.log(sortObjects(lista, "altura"));

//Punto 4
function limpiarLista(estudiante){
    return estudiante.split(";").map((data)=>{
        data = data.split(",");
        const nombre = limpiarNombre(data[0]);
        const curso = data[1];
        let nota = data.slice(2,6);
        const toNumber = (string) => +string;
        nota = nota.map(toNumber);
        return {
            "nombre": nombre[0],
            "apellido": nombre[1],
            "curso": curso,
            "notas": nota,
            "final": promedioFinal(nota)
            }
        })
}
const listEstudiantes = "Nombres,Curso,Nota 1,Nota 2,Nota 3,Nota 4,Nota final;Alberto Rosas,B,4.21,4.5,3.3,4.7,0;Alejandra Jaramillo,B,4.21,4.2,4.7,4.5,0;Alfonso Martinez,A,4.59,4.5,4.2,4.2,0;Ana Chams       ,B,4.71,4.2,3.5,4.2,0;Andres Suarez ,B,5,4.5,4.7,3.5,0;   Blas Malla,C,3.32,4.2,0,5,0;Bruno Ramirez,A,4.59,3.5,4.1,4.2,0;              Cristian Pinilla,C,3.32,0,3.5,0,0;   Diana Orozco ,C,4.76,4.7,3.5,3.5,0;Eduardo Gonzalez,A,4.71,3.5,3.5,4.7,0;Gabriel Char,A,4.21,3.3,4.7,4.7,0;Gabriela Solar   ,C,4.71,4.7,3.3,3.3,0;Isaac Rodriguez,B,4.76,4.7,4.2,3.5,0;  Javier Hernandez   ,A,4.59,4.7,4.5,3.5,0;Jimena Rojas,C,4.28,4.2,4.5,4.2,0;   Jose Rodriguez,A,3.59,3.5,4.2,4.2,0;Juan Cortissoz,B,3.32,4.7,4.2,4.5,0;Kevin Abello   ,C,3.59,4.7,4.2,4.7,0;Laura Rivera,C,3.59,3.3,3.5,4.5,0;    Marcela Abello        ,A,4.28,3.5,4.5,4.5,0;Mario Leal,B,4.76,4.5,4.5,3.3,0;Martina Santos,C,3.59,5,3.3,4.1,0;  Mauricio Segebre,B,4.59,4.1,4.7,4.5,0;Orlando Garcia,B,4.59,4.2,4.5,4.7,0;Pablo Lopez,C,4.59,3.3,4.5,4.7,0;Paula Gomez,A,4.1,4.5,4.5,4.5,0;  Rafael Verano,A,0,4.5,5,3.5,0;    Renata Osorio  ,C,4.59,4.5,4.7,4.5,0;Victor Garcez         ,C,2.59,2.1,4.2,4.7,0;";
console.log(limpiarLista(listEstudiantes));

//Punto 5
function bestInClass(estudiante){
    let datos = limpiarLista(estudiante);
    sortObjectsDesc(datos, "final");
    let listaA = filterLetra(datos, "curso", "A");
    let listaB = filterLetra(datos, "curso", "B");
    let listaC = filterLetra(datos, "curso", "C");

    let listaBest = [];
    ct = 0;
    for (let i = 0; i < 3; i++) {
        listaBest[ct] = (listaA[i].nombre + " " + listaA[i].apellido)
        ct += 1
        listaBest[ct] = (listaB[i].nombre + " " + listaB[i].apellido)
        ct += 1
        listaBest[ct] = (listaC[i].nombre + " " + listaC[i].apellido)
        ct += 1   
    }
    return listaBest
}

console.log(bestInClass(listEstudiantes));

//Extra
function sortObjectsDesc(lista, key){
    const sortDesc = (val1, val2) => val2[key] - val1[key];
    return lista.sort(sortDesc)
}

function filterLetra(lista, key, curso){
    const filterList = (letra) => letra[key] == curso;
    return lista.filter(filterList)
}
const datos = require('./datos.json');

function puntoUno(estudiantes) {
  const condicional = [];
  let contCondicional = 0;
  for (let i = 0; i < estudiantes.length; i++) {
    condicional[i] = estudiantes[i].courses;
  }
  for (let i = 0; i < condicional.length; i++) {
    let prom = 0;
    for (let j = 0; j < condicional[i].length; j++) {
      prom += condicional[i][j].grade;
    }
    prom /= condicional[i].length
    if (prom < 3.3) {
      contCondicional ++;
    }
  }
  return contCondicional;
}

function puntoDos(estudiantes) {
  const losNombres = [];
  for (let i = 0; i < estudiantes.length; i++) {
    losNombres[i] = estudiantes[i].firstName + " " + estudiantes[i].lastName;
  }
  return losNombres;
}

function puntoTres(estudiantes) {
  const listaAltura = puntoSiete(estudiantes, "height");
  const losIds = [];
  for (let i = 0; i < listaAltura.length; i++) {
    losIds[i] = listaAltura[i]._id;
  }
  return losIds;
}

function puntoCuatro(numeros) {
  numeros = numeros.flat();
  let prom = 0;
  for (let i = 0; i < numeros.length; i++) {
    prom += numeros[i];
  }
  prom /= numeros.length;
  return prom;
}

function puntoCinco(palabra) {
  let invertido = puntoSeis(palabra);
  if (invertido == palabra){
    return true;
  }else{
    return false;
  }
}

function puntoSeis(palabra) {
  let invertido = "";
  for (let i = palabra.length; i != 0; i--) {
    invertido += palabra[i-1];
  }
  return invertido;
}

function puntoSiete(lista, parametro) {
  const sortAsc = (val1, val2) => val1[parametro] - val2[parametro];
  return lista.sort(sortAsc);
}

module.exports = {
  puntoUno,
  puntoDos,
  puntoTres,
  puntoCuatro,
  puntoCinco,
  puntoSeis,
  puntoSiete,
};

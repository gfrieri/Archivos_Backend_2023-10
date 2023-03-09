const datos = require('./datos.json');

function puntoUno(estudiantes) {
  const promedioClase = (prev, cur) => prev.grade + (cur.grade * cur.weight);
  const promedioEst = (prev, cur) => prev.grade + cur.assignments.reduce(promedioClase, 0);
  const puedeRecuperar = (est) => est.courses.reduce(promedioEst, 0)/(est.courses.length)>2.5 & est.courses.reduce(promedioEst, 0)/(est.courses.length)<3.0;
  const recuperan = (est) => est.personal_info
  return estudiantes.filter(puedeRecuperar).map(recuperan);
}

function puntoDos(products, filters) {
  var filteredProducts = [];
  /*Antes:
  for (let i = 0; i < products.length; i++) {
    if ((filters.id && products[i].id === filters.id) || !filters.id) {
      if (
        (filters.organization && products[i].organization === filters.organization) ||
        !filters.organization
      ) {
        if ((filters.owner && products[i].owner === filters.owner) || !filters.owner) {
          filteredProducts = [filteredProducts, products[i]];
        }
      }
    }
  }
  */

  //Después:
  const filterId = pr => pr.id == filters.id || !filters.id;
  const filterOrg = pr => pr.organization == filters.organization || !filters.organization;
  const filterOwner = pr => pr.owner == filters.owner || !filters.owner;
  const ingresarFiltrado = i => filteredProducts.push(i);
  products.filter(filterId).filter(filterOrg).filter(filterOwner).map(ingresarFiltrado);
  return filteredProducts;
}

function puntoTres(estudiantes) {
  let tit = "";
  let genero = "";
  const selected_students = estudiantes.filter((est) => 2023-est.personal_info.birthdate.split("-")[2] < "20")
  const listaEstudiantes = selected_students.map((est) => {
    if(est.personal_info.genero == "F"){
      tit = "Sra."
      genero = "F"
    }else{
      tit = "Sr." 
      genero = "M"
    }
    const recent = est.courses.reduce((val1,val2) => (val1.semester > val2.semester)?val1.semester:val2.semester);
    const courses = est.courses.filter((i) => i.semester == recent);
    return obj = {
        ID: est.id,
        Title: tit,
        Name: est.personal_info.first_name + " " + est.personal_info.last_name,
        Height: est.personal_info.height,
        Birthdate: est.personal_info.birthdate,
        Semester: est.personal_info.semester,
        Gender: genero,
        Courses: courses
    }
  }) 
  return listaEstudiantes;
  //Esta versión se borra el if y se cambia la variable tit por tit(est)[0] y la variable genero por tit(est)[1]
  //const tit = i => (i.personal_info.Gender == "F") ? ["Sra.", "F"] : ["Sr.", "M"];
}

function puntoCuatro(user, items) {
  const response = [];
  const activeltems = [];
  /*Antes:
  for (let i = 0; i < items.length; i++) {
    if (items[i].active === true) {
      activeltems.push(items[i]);
    }
  } 

  if (userName === undefined) {
    response.push('Bienvenido');
  } else {
    response.push('Bienvenido, ' + userName);
  }

  if (numNotifs === 0) {
    response.push('No tiene notificaciones. ');
  } else {
    response.push('Tiene ' + numNotifs + ' notificaciones pendientes. ');
  }
  return response;
  */
  
  //Después:
  const filterActive = i => i.active == true;
  const pushActive = filtrado => activeltems.push(filtrado);
  items.filter(filterActive).map(pushActive);

  const numNotifs = activeltems.length;
  const userName = user.first_name;
  const saludo = userName => response.push("Bienvenido " + (userName ?? ""));
  saludo(userName);

  const notif = numNotifs => (numNotifs == 0) ? response.push('No tiene notificaciones. '):response.push('Tiene ' + numNotifs + ' notificaciones pendientes. ');
  notif(numNotifs);
  return response;
}

module.exports = {
  puntoUno,
  puntoDos,
  puntoTres,
  puntoCuatro,
};
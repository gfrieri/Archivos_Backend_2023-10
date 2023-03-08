import express, {json} from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(json());

//Punto 01 (QUERY)
app.get('/users/hobby', async (req, res) => {
  console.log('Hobby');
  //Lista de usuarios
  const users = [ 
    { name: "John", hobbies: ["singing", "walking", "playing guitar"] },
    { name: "Terry", hobbies: ["swimming", "playing guitar"] },
    { name: "Anna", hobbies: ["walking", "swimming", "playing guitar"] }, 
    { name: "Paul", hobbies: ["swimming", "singing"] },
  ];
  //Filtrar por el request del query que es el hobby
  const filterList = (lista) => lista.hobbies.includes(req.query.hobby);
  //Retornar en el front-end el resultado
  res.status(200).json(users.filter(filterList));
});

//Punto 02 (PARAM)
app.get('/users/exists/:id', (req, res) => {
  console.log('Existe');
  //Lista de usuarios
  const users = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];
  //True si el id ingresado existe, false si no
  const existeId = existe => existe.id == req.params.id;
  //Retornar en front-end el resultado
  res.status(200).json(users.some(existeId));
});

//Punto 03 (PARAM)
app.get('/pilots/team-experience/:team', (req, res) => {
  console.log('Pilots');
  //Lista de pilotos
  const pilots = [
    { id: 10, name: "Poe Dameron", years: 14, team: 'clscwe'},
    { id: 2, name: "Temmin 'Snap' Wexley", years: 30, team: 'axvedw' },
    { id: 41, name: "Tallissan Lintra", years: 16, team: 'clscwe'},
    { id: 99, name: "Ello Asty", years: 22, team: 'axvedw'}
  ];
  //Filtrar por equipo
  const filterList = (lista) => lista.team == req.params.team;
  //Sumar los años de experiencia
  const sumaExperiencia = (val1, val2) => val1.years + val2.years;
  //Mostrar resultados en el front-end
  res.status(200).json(pilots.filter(filterList).reduce(sumaExperiencia));
});

//Punto 04 (QUERY)
app.get('/factions/list', async (req, res) => {
  console.log('Faccion');
  //Lista de usuarios
  const pilots = [
    { id: 2, name: "Wedge Antilles", faction: "Rebels", },
    { id: 8, name: "Ciena Ree", faction: "Empire", }, 
    { id: 40, name: "Iden Versio", faction: "Empire", },
    { id: 66, name: "Thane Kyrell", faction: "Rebels", }
  ];
  //Filtrar por el request del query que es la faccion del piloto
  const filterList = (lista) => lista.faction.includes(req.query.faction);
  //Retornar en el front-end el resultado
  res.status(200).json(pilots.filter(filterList));
});

//Punto 05 (BODY)
app.get('/math/square', async (req, res) => {
  console.log('Cuadrados');
  //Elevar a cuadrado
  const square = (num) => num**2;
  //Retornar en el front-end el resultado
  res.status(200).json(req.body.map(square));
});

app.post('/prueba', async (req, res) => {
  res.status(200).json({ message: 'Hola' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found.' });
});

app.listen(8080);

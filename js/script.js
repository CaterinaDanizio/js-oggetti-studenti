// CONSEGNA
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// Oggetto che descrive uno studente
var student = {
  name: "Luca",
  surname: "Rossi",
  age: 32,
  }

// Fare un ciclo for in per stampare proprietà Oggetto
for (var key in student){
  console.log(key + " " + student[key]);
}

// Array di oggetti(studenti)
var classroom = [
  {
    name: 'Marco',
    surname: 'Simeoni',
    age: 22,
  },
  {
    name: 'Stefano',
    surname: 'Castelli',
    age: 29,
  },
  {
    name: 'Carlo',
    surname: 'Arcangeli',
    age: 25,
  },

  {
    name: 'Amalia',
    surname: 'Galli',
    age: 31,
  },

  {
    name: 'Roberto',
    surname: 'Ronchi',
    age: 34,
  },

  {
    name: 'Francesca',
    surname: 'De Angelis',
    age: 28,
  },

  {
    name: 'Paola',
    surname: 'Marini',
    age: 21,
  },
];

// Fare un ciclo per stampare nomi e cognomi

for (var key in classroom){
  console.log(classroom[key].name + " " + classroom[key].surname);
}

// Aggiungere nuovo oggetto studente dai dati utente

var studentPlus = {
    name : prompt('Inserisci il tuo nome'),
    surname: prompt('Inserisci il tuo cognome'),
    age: prompt('Quanti anni hai?'),
};

  classroom.push(studentPlus);
  console.log(studentPlus);

// Stampa in pagina elenco iscritti
document.getElementById('lista').innerHTML += (classroom[0].name + " " + classroom[0].surname + "<br>");
document.getElementById('lista').innerHTML += (classroom[1].name + " " + classroom[1].surname + "<br>");
document.getElementById('lista').innerHTML += (classroom[2].name + " " + classroom[2].surname + "<br>");
document.getElementById('lista').innerHTML += (classroom[3].name + " " + classroom[3].surname + "<br>");
document.getElementById('lista').innerHTML += (classroom[4].name + " " + classroom[4].surname + "<br>");
document.getElementById('lista').innerHTML += (classroom[5].name + " " + classroom[5].surname + "<br>");
document.getElementById('lista').innerHTML += (classroom[6].name + " " + classroom[6].surname + "<br>");
document.getElementById('lista').innerHTML += (studentPlus.name + " " + studentPlus.surname + "<br>");

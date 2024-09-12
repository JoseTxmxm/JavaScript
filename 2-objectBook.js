/*
*TODO: Define el objeto libro con propiedades
*TODO: Define la función copia profunda que acepte un objeto como argumento
*TODO: La Función debe crear una nueva copia del objeto, copiando arrays y funciones
*/
class Book {
    describir() {
        return `El libro se llama "${this.title}" y fue escrito por ${this.author} en la fecha de ${this.fecha}.`;
    }
}

const libro = new Book();

libro.title = "El Quijote de la Mancha";
libro.author = "Miguel de Cervantes";
libro.fecha = "2017"

//console.log(libro.describir());

const deepCopy = JSON.parse(JSON.stringify(libro));
deepCopy.author = "Migue";
deepCopy.fecha = "2015"

console.log(`El libro "${libro.title}" fue escrito por ${deepCopy.author} en la fecha de ${deepCopy.fecha}`);
console.log();
console.log(`El nombre completo del autor del libro "${libro.title}" era ${libro.author} y la verdadera fecha fue ${libro.fecha}.`);


/*
*TODO: Define el objeto libro con propiedades
*TODO: Define la función copia profunda que acepte un objeto como argumento
*TODO: La Función debe crear una nueva copia del objeto, copiando arrays y funciones
*/
class Book {

}

const book = new Book();
book.titulo = 'Aprende JavaScript'
book.nombre = 'Mejía Arturo'
book.fecha = 'Abril 1999'

  // Método para mostrar la descripción del libro
//console.log(`El libro ${book.titulo} fue escrito por ${book.nombre} en el mes de ${book.fecha}.`)
const deepCopy = JSON.parse(JSON.stringify(book))

// Modificamos una propiedad de la copia
 deepCopy.fecha = 'Mayo 1999'
 // Mostramos la descripción del libro modificado
 console.log(`El libro ${deepCopy.titulo} fue escrito por ${deepCopy.nombre} en el mes de ${deepCopy.fecha}.`)
 // Verificamos que la original no ha sido modificada
 console.log(`La fecha original del libro era ${book.fecha}.`)

/*
*!En esta solución, se ha utilizado la técnica de clonación JSON para realizar una copia profunda de un objeto.
*!Esto permite garantizar que no se modifiquen las propiedades originales del libro.
*!Se ha también modificado la descripción del libro para mostrar cómo se puede acceder a las propiedades de la copia y verificar
*!si la original no ha sido modificada
*/
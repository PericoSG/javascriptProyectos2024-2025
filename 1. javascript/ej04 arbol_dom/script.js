// Recuperar y añadir una ETIQUETA EXISTENTE
const titulos = document.getElementsByTagName("h1"); // Apuntamos las etiquetas H1



// Devuelve {primer h1, segundo h1, tercer h1 ... }


titulos[0].textContent = "nuevo titulo";


//Añadir nueva etiqueta
const nuevoH2 = document.createElement("h2");
//Agregar una etiqueta hija (el h2 recien creado) a BODY
document.body.append(nuevoH2);
nuevoH2.textContent = "titulo de nivel2 recien añadido";

// TextContent es para todas las etiquetas mientras que value es para formularios




//Eliminar una ETIQUETA EXISTENTE 
const hiperenlacesBorrar = document.getElementsByTagName("a");
hiperenlacesBorrar[0].remove();




// RETO: Insertar en body una lista UL y dos items LI tomate,lechuga 
const insertarUl = document.createElement("ul");
const insertarLi1 = document.createElement("li");
const insertarLi2 = document.createElement("li");

document.body.append(insertarUl);
insertarUl.append(insertarLi1);
insertarUl.append(insertarLi2);

insertarLi1.textContent = "Tomate";
insertarLi2.textContent = "Lechuga";


// Tambien se puede reutilizar let 

// -para manipular el dom se necesita  padre.append(hijo);

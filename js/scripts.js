import "bootstrap/dist/js/bootstrap";
//Con esto me importo Bootstrap para JS
import { MOCKDATA } from "./mockData.js";
/*para que pueda importarlo de acá, en el archivo mock tengo que haber exportado y declararlo como
que es algo que va a salir hacia afuera. Me traigo el mockdata desde el archivo mockData.js y desde
el archivo mockData.js lo tengo que exportar.
*/
import { renderCatalogue } from "./helpers.js";
//También debo importar la función del archivo helpers.js

// 1. Inicializaciones de variables/constantes
const products = MOCKDATA.sort((a, b) => b.price - a.price);
//Quiero ordenarlo asc y des por el precio

// 2- Seleccionar elementos HTML
const catalogue = document.getElementById("catalogue");
const asc = document.getElementById("asc");
const des = document.getElementById("des");

// 3- Trabajo con la Lógica

/* Lógica de los botones ascendente y descendente

  SORT: agarra un array y toma 2 parámetros y va a ejecutar un (a-b)
  SORT ascendente = array.sort((a,b)=>(a-b))
  SORT descendente = array.sort((a,b) => (b-a))
*/
// NO Seleccionado: btn btn-outlline-succes
// Seleccionado: btn btn-succes att=disabled
asc.addEventListener("click", () => {
  asc.className = "btn btn-success disabled";
  des.className = "btn btn-outline-success";
  renderCatalogue(
    products.sort((a, b) => a.price - b.price),
    catalogue
  );
});
des.addEventListener("click", () => {
  des.className = "btn btn-success disabled";
  asc.className = "btn btn-outline-success";
  renderCatalogue(
    products.sort((a, b) => b.price - a.price),
    catalogue
  );
});
//El evento recibe como primer parámetro el evento que se va a realizar y como segundo parámetro lo que va a hacer cuando se haga el evento del 1er parámetro.

renderCatalogue(products, catalogue);
/*Cuando voy a llamar a la función le paso un array de productos que es products y le paso el id
que estoy capturando que sería el catalogue (del section) que es donde va a renderizar y meter todo
adentro, así lo dejo de nuevo en cero y le vuelvo a tirar el forEach con una inyección de código 
uno por uno. */

// 4. Revisar si hay que hacer limpieza.

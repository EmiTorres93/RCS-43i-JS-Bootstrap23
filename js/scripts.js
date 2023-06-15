import "../node_modules/bootstrap/dist/js/bootstrap.js";
//Con esto me importo Bootstrap para JS
import { MOCKDATA } from "./mockData.js";
/*para que pueda importarlo de acá, en el archivo mock tengo que haber exportado y declararlo como
que es algo que va a salir hacia afuera. Me traigo el mockdata desde el archivo mockData.js y desde
el archivo mockData.js lo tengo que exportar.
*/
import { renderCatalogue } from "./helpers.js";
//También debo importar la función del archivo

// 1). Inicializaciones de variables/constantes
const productsDatabase = MOCKDATA.sort((a, b) => b.price - a.price);
//Quiero ordenarlo asc y des por el precio

/* Clase 29/05: tenemos el dropdown y lo que tenemos que hacer es meter ahí (recuadro bajo de Todos)
una lista de categorías, luego trabajar sobre los eventos cuando les haga click y la lógica que se
va hacer cuando le haga click (reemplazo el todos por el valor sobre el que hice click) y tiene
que hacer que filtre todos los products. Entonces tenemos que inyectar la data.
 Primero tengo que tener la data que voy a mostrar, creamos la constante categories y la vamos a 
 alimentar a partir del MOCK xq ahí están todas las categories. Con map lo recorro y me va a generar
 un nuevo array que se va cargar dentro de categories. 
 A cada uno de esos data los recorro uno por uno y tengo que mapearlo y retornar algo y lo que va 
 a retornar son la categorías
 category es lo que está en el id del MOCKDATA. Recorre y me saca la categoría una por una pero 
 me las trae duplicadas.*/

let productsToShow = productsDatabase;

/*SET: permite almcenar valores únicos, si ya está ese valor no lo recibe, su constructor elimina los
duplicados. Entonces convierto el array moockdata en un set para eliminar duplicados pero dsp tengo
que vovler a convertir ese set en un array, para eso uso eel Array.from */
const categories = Array.from(new Set(MOCKDATA.map((data) => data.category)));
categories.push("Todos");
/*Ya tengo la lista de categorías, los datos inicializados con la lista de categorías, vamos al
html a seleccionar elementos.*/

// 2)- Seleccionar elementos HTML
const catalogue = document.getElementById("catalogue");
const asc = document.getElementById("asc");
const des = document.getElementById("des");
const categoryFilter = document.getElementById("categoryFilter");

const search = document.getElementById("search");
search.addEventListener("input", () => {
  productsToShow = productsDatabase.filter((productsToShow) =>
    products.title.toLowerCase().includes(search.value.toLowerCase())
  );
  renderCatalogue(products, catalogue);
});

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
    productsDatabase.sort((a, b) => a.price - b.price),
    catalogue
  );
});
des.addEventListener("click", () => {
  des.className = "btn btn-success disabled";
  asc.className = "btn btn-outline-success";
  renderCatalogue(
    productsDatabase.sort((a, b) => b.price - a.price),
    catalogue
  );
});
//El evento recibe como primer parámetro el evento que se va a realizar y como segundo parámetro lo que va a hacer cuando se haga el evento del 1er parámetro.

//Para insertar los elmentos tipo li que los saco de Bootstrap
categories.forEach((category) => {
  const li = document.createElement("li");
  li.innerHTML = `<button class="dropdown-item text-capitalize">${category}</button>`;
  li.addEventListener("click", () => console.log(category));
  categoryFilter.appendChild(li);
});
/*Volvimos a crear otra función del tipo render...algo.. en este caso sería render category o 
o render dropdown categories. Al igual que en el renderCatalogue yo sólo necesito que la data 
venga de cierta forma */

renderCatalogue(products, catalogue);
/*Cuando voy a llamar a la función le paso un array de productos que es products y le paso el id
que estoy capturando que sería el catalogue (del section) que es donde va a renderizar y meter todo
adentro, así lo dejo de nuevo en cero y le vuelvo a tirar el forEach con una inyección de código 
uno por uno. */

// 4. Revisar si hay que hacer limpieza.

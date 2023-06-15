import { MOCKDATA } from "./mockData.js";

// 1. const params = new URL(window.location.href);

//con el URL lo convertimos en un tipo de dato URL.

/* En una direcci+on url, todo lo que viene después del ? son parámetros que yo paso de un lado
para el otro por adentro mismo de la url.
¿Cómo hago para sacarme esos params? */

// 2. console.log(params.searchParams.get("id"));

// De esta manera voy a poder recuperar los params de la url, o sea recupero los id del url.

/*Con find, me va a devolver el primer valor que encuentre, si encontró algo en el MOCKDATA.
Entonces hacemos que el producto que yo que voy a mostrar en la página (que es el detalle), voy 
a mostrar uno solo.
Sería para el MOCKDATA buscá para cada uno de los data individuales (cada uno de esos registros), 
si el campo id es estrictamente igual a params (convertido a number pra que sea el mismo tipo) 
entonces devolvelo, y devolvé el primero que encuentres.
*/

// 3. const product = MOCKDATA.find((data) => data.id === parseInt(params));

/* Ya tenemmos nuestro objeto, ahora nos queda inyectar el código.
Tengo el id=category para poder trabajarlo entonces trabajamos como siempre:
*/

// 1. Inicializaciones: Son las de arriba..

const paramsId = new URL(window.location.href).searchParams.get("id");

const product = MOCKDATA.find((data) => data.id === parseInt(paramsId));

// 2. Selecciono elementos HTML
/* Si quiero inyectar código html o un valor en el span o id = category */
const category = document.getElementById("category");
const image = document.getElementById("image");
const title = document.getElementById("title");
const price = document.getElementById("price");
const main = document.getElementById("main");

// 3. Trabajo con la Lógica.

if (product) {
  //category.innerText = product.category;
  //image.src = product.image;
  //title.innerText = product.title;
  //price.innerText += product.price;
  main.innerHTML = `<article class="card">
        <h6 class="pt-2 px-2">
          <span class="badge bg-primary text-uppercase" id="category">${product.category}</span>
        </h6>
        <img
          src=${product.image}
          class="object-fit-contain pt-2 px-2"
          style="height: 250px"
          id="image"
        />
        <div class="card-body">
          <h4 class="card-title" id="title">${product.title}</h4>
          <p claas="pt-2">${product.description}</p>
        </div>
        <div class="card-footer d-flex flex-column">
          <p class="h5 text-end" id="price">$</p>
          <div class="d-flex justify-content-between">
           <div>
            <button class="btn btn-outline-primary">+</button><span class="px-2">1</span>
            <button class="btn btn-outline-primary">-</button>
           </div>
            <button class="btn btn-outline-primary">Comprar</button>
          </div>
        </div>
      </article>`;
} else {
  main.innerHTML = `<h2>404 product not found</h2>`;
}

/* Si product es true, o sea valores distintos que tienden a ser falsos como cero, undiefined,
null.. entonces inyectame todo ese código. Y sino, si me da valores que no tienen nada, un false,
un string vacío, un null... entonces a main.innerHTML ...
Entonces si nos vamos al url y le paso un id=1 me va a mostrar el producto 1 y así, si le pongo 
el id=21, como no existe ese producto me va a mostrar lo del else, tengo que mostrarle un id que
sí exista para que me muestre algo.
*/

// 4. Limpieza o Reinicializo

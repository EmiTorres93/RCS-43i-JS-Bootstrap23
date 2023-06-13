//En los helpers generalmente van las funciones.
//Acá también tenemos que exportarla al igual que el mockdata.

/* La función va a recibir 2 parámetros, el id que tengo que limpiar que es catalogue, en ese id
es donde voy a meter ese array de productos y para que no se me duplique y no me lo renderice una
y otra vez cada vez que haga click, lo tengo que limpiar. Y, el array de productos que es el array
que trae el MOCKque voy a recibir que es 
products */

//Puedo hacer así en lugar del data.category y poner abajo bg-${pillTheme(data.category)}..text-up>
const pillTheme = (category) => {
  switch (category) {
    case "electronics":
      return "primary";
    default:
      return "secondary";
  }
};

export const renderCatalogue = (array, id) => {
  id.innerHTML = "";
  // Lógica de inyección de las cards al catalogue
  array.forEach((data) => {
    // 1. Creo el contenedor o primer elemento.
    const card = document.createElement("div");
    card.className = "col";
    // 2. Inyecto a este elemento el resto del código.
    card.innerHTML = `
  <article class="card h-100"> 
    <h6 class="pt-2 px-2><span class="badge bg-${
      data.category === "elecctronics" ? "primaray" : "secondary"
    } text-uppercase">${data.category}</span></h6>
    <img src=${data.image} class="object-fit-contain pt-2 px-2" alt=${
      data.title
    } style="height:150px">
    <div class="card-body">
      <h6 class="card-title">${data.title}</h6>
    </div>
    <div class="card-footer d-flex flex-column">
      <p class="h5 text-end">$${data.price}</p>
      <button class="btn btn-primary">Comprar</button>
    </div>
  </article>
  `;
    //la clase h-100 es importante porque sirve para que todas las card el mismo alto.
    // 3. Anexo este objeto al div que está en el html
    catalogue.appendChild(card);
  });
};

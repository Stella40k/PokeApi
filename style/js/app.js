const btnBuscar1 = document.getElementById("btn1");
const btnBuscar2 = document.getElementById("btn-2");
const contenedorPadre = document.getElementById("personajeContainer");//personajeContainer es la id de toodo el div qutendra la info de las card
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/";



const cargarDatos = async () => {
    try {
      const response = await fetch(urlPokemon);
        
      if (!response.ok) {
        throw new error("Error en la API");
      }
  
      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      console.error(error);
    }
  };




const verDetalles = async (id) => {
    try {
      const response = await fetch(`${"https://pokeapi.co/api/v2/pokemon/"}/${id}`);

      if (!response.ok) {
        throw new error("Error en la API");
      }
  
      const data = await response.json();
  
      alert(data.description);
    } catch (error) {
      console.error(error);
    }
  };
  
cargarDatos()
/* 
const dataPersonajes = data.items;

console.log(dataPersonajes);

dataPersonajes.forEach((personaje) => {
    contenedorPadre.innerHTML += `
    <div class="col-3 pb-2 d-flex justify-content-center" data-id=${personaje.id}>
    <div class="card">
      <img
        class="card-img-top"
        src=${personaje.image}
      />
      <div class="card-body">
        <h5 class="card-title">${personaje.name}</h5>
        <p class="card-text">${personaje.race} - ${personaje.gender}</p>
        <button class="btn btn-success btn-ver-detalles">Ver más</button>
      </div>
    </div>
  </div>
`;
});

contenedorPadre.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-ver-detalles")) {

      const cardPadre = e.target.closest(".col-3");
      const id = cardPadre.dataset.id;
  
      verDetalles(id);
    }
  }); */
// Variables
const form = document.getElementById('form');
const pizzaInput = document.getElementById('pizzaIdIngresado');
const contenedorConsulta = document.getElementById('contenedorConsulta');
const botonPizza = document.getElementById('buscaPizza');

// 1- Array
const pizzasLista = [
	{
		id: 1,
		nombre: "Muzzarella",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella"],
		precio: 500,		
	},
	{
		id: 2,
		nombre: "Champiñón",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Champiñón"], 
		precio: 1000,			
	},
	{
		id: 3,
		nombre: "Rúcula",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Rúcula"], 
		precio: 650,		
	},
	{
		id: 4,
		nombre: "Salame",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Salame"], 
		precio: 750,		
	},
	{
		id: 5,
		nombre: "Palmito",
		ingredientes: ["Salsa de Tomate", "Queso Muzzarella", "Palmito"], 
		precio: 550,		
	},
	{
		id: 6,
		nombre: "Roquefort",
		ingredientes: ["Salsa de Tomate", "Queso Roquefort", "Cebolla Caramelizada"], 
		precio: 950,		
	}
];

// 2- traer elementos del LS si existen
/* const getPizzaList = () => {
	let listaPizza = JSON.parse(localStorage.getItem('pizzasLista')) || [];
	return listaPizza;
} */
// 3- grabar en LS
const saveLocalStorage = (listaPizza) => {
    localStorage.setItem('pizzasLista', JSON.stringify(listaPizza))
};


// 4- Renderiza elementos
const crearPizzaCard = (listaPizza) => {
    return `
        <div class="card">
            <h2 class="pizza-title">${listaPizza.nombre}</h2>
            <h3 class="pizza-price">$ ${listaPizza.precio}</h3>

        </div>
    `;
}

const crearErrorCard = () => {
    return `
        <div class="card">
            <h2 class="pizza-title">¡Debe ingresar un numero!</h2>
        </div>
    `;
}

const crearIdError = () => {
	return `
	<div class="card">
		<h2 class="pizza-title">¡No coincide el numero!</h2>
	</div>
	`;
}


// Funciones renders
const renderCardsPizza = pizzasLista => contenedorConsulta.innerHTML += pizzasLista.map(crearPizzaCard).join('');
const renderError = () => contenedorConsulta.innerHTML += crearErrorCard();
const renderNoId = () => contenedorConsulta.innerHTML += crearIdError();


// Funcion buscar pizza
const searchPizza = (e) => {
    e.preventDefault();
    const id = pizzaInput.value;
	console.log(id)
	if(id) {
		let pizzaEncontrada = pizzasLista.filter(pizza => pizza.id == id)
		console.log(pizzaEncontrada);
		if(pizzaEncontrada < id){
			renderNoId();
		}else {
			renderCardsPizza(pizzaEncontrada);
		}
	}else{
		console.log(id)
		renderError();
	}
}


// Inicializar
const init = () => {
	window.addEventListener('DOMContentLoaded', saveLocalStorage(pizzasLista));
    form.addEventListener("submit", searchPizza)
}

init();

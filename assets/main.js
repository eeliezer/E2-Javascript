// Variables
const form = document.getElementById('form');
const pizzaInput = document.getElementById('pizzaIdIngresado');
const contenedorConsulta = document.getElementById('contenedorConsulta');
const botonPizza = document.getElementById('buscaPizza');


// Array
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


// Guardar en LS
const saveLocalStorage = (listaPizza) => {
    localStorage.setItem('pizzasLista', JSON.stringify(listaPizza))
};


// Renderiza elementos
const crearPizza = (listaPizza) => {
    return `
        <div class="card">
            <h2 class="pizza-title">Pizza de ${listaPizza.nombre}</h2>
            <h3 class="pizza-price">Precio: $ ${listaPizza.precio}</h3>
        </div>
    `;
}

const crearErrorCard = () => {
    return `
        <div class="card errorVacioDiv">
            <h2 class="pizza-title">¡Debe ingresar un numero!</h2>
        </div>
    `;
}

const crearIdError = () => {
	return `
	<div class="card errorIdDiv">
		<h2 class="pizza-title">¡No coincide el numero!</h2>
	</div>
	`;
}



// Funciones renders
const renderPizza = pizzasLista => contenedorConsulta.innerHTML += pizzasLista.map(crearPizza).join('');
const renderError = () => contenedorConsulta.innerHTML += crearErrorCard();
const renderNoId = () => contenedorConsulta.innerHTML += crearIdError();


// Funcion buscar pizza
const searchPizza = (e) => {
    e.preventDefault();
    const id = pizzaInput.value;
	if(id) {
		let pizzaEncontrada = pizzasLista.filter(pizza => pizza.id == id)
		if(pizzaEncontrada < id){
			renderNoId();
		}else {
			renderPizza(pizzaEncontrada);
		}
	}else{
		renderError();
	}
}

// Inicializar
const init = () => {
	window.addEventListener('DOMContentLoaded', saveLocalStorage(pizzasLista));
    form.addEventListener("submit", searchPizza)
}

init();
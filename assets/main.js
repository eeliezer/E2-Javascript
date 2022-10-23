// Variables
const form = document.getElementById('form');
const pizzaInput = document.querySelector(".idIngresado");
const contenedorConsulta = document.getElementById('contenedorConsulta');


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


// Renderiza elementos
const crearPizza = (pizza) => {

	if(!pizza){
		contenedorConsulta.innerHTML = `
		<div class="card errorIdDiv">
			<h2 class="pizza-title">¡No coincide el numero!</h2>
		</div>
		`;
	}else {
		contenedorConsulta.innerHTML =  `
			<div class="card">
				<h2 class="pizza-title">Pizza de ${pizza.nombre.toUpperCase()}</h2>
				<h3 class="pizza-price">Precio: $ ${pizza.precio}</h3>
			</div>
		`;
	}
};

const crearErrorCard = () => {
    contenedorConsulta.innerHTML = `
        <div class="card errorVacioDiv">
            <h2 class="pizza-title">¡Debe ingresar un numero!</h2>
        </div>
    `;
};

const pizzaEncontrada = (valor) => pizzasLista.find((pizza) => pizza.id === valor);


// Funcion buscar pizza
const submitSearch = (e) => {
    e.preventDefault();
    const idIngresado = pizzaInput.value;
	if(!idIngresado) {
		crearErrorCard();
		return;
	}
	const pizzaBuscada = pizzaEncontrada(Number(idIngresado));
	crearPizza(pizzaBuscada);
	form.reset();
}

// Inicializar
const init = () => {
    form.addEventListener("submit", submitSearch)
}

init();
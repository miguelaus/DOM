

function Pizza(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("la pizza " + this.version + " es de tamaño " + this.size + " y su precio es " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ( "Su plato es: Pizza " + this.version)}
}


const pizzaMargarita = new Pizza("Margarita", 550, "mediana", 1, "margarita.jpg")
const pizzaPrimavera = new Pizza("Primavera" , 600, "mediana",2, "primavera.jpg")
const pizzaCaprese = new Pizza("Caprese", 650, "grande",3, "caprese.jpg")

let arrayPizzas =[pizzaCaprese, pizzaPrimavera, pizzaMargarita]




function Pasta(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("la pasta " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su plato es:  " + this.version)}
}

const pastaSpaghetti = new Pasta('spaghetti', 400, "grande",4, "spaghetti.jpg");
const pastaRavioles = new Pasta('ravioles', 600, "grande",5, "ravioles.jpg");
const pastaMacarrones = new Pasta('macarrones', 450, "grande",6, "macarrones.jpg");

let arrayPasta = [pastaRavioles, pastaSpaghetti, pastaMacarrones]




function Ensalada(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("la Ensalada " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su plato es: Ensalada " + this.version)}
}

const ensaladaTomateLechuga = new Ensalada('Tomate y Lechuga', 750, "mediana",7,"tomatelechuga.jpg");
const ensaladaCesar = new Ensalada('cesar', 800, "mediana",8,"cesar.jpg");
const ensaladaPapaHuevo = new Ensalada('Papa y Huevo', 800, "mediana",9,"papahuevo.jpg");

let arrayEnsalada = [ensaladaCesar, ensaladaPapaHuevo, ensaladaTomateLechuga] 




function Carne(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("la Carne: " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su plato es: " + this.version)}
}

const carneBife = new Carne('bife', 400, "mediano",10,"bife.jpg");
const carneHamburguesa = new Carne('hamburguesa', 600, "mediana",11,"hamburguesa.jpg");
const carneVacio = new Carne('vacio', 650, "mediano",12,"vacio.jpg");
const carneChorizo = new Carne('chorizo', 400, "mediano",13,"chorizo.jpg");
const carneAsado = new Carne('asado', 600, "mediana",14,"asado.jpg");

let arrayCarne = [carneBife, carneAsado, carneVacio, carneChorizo, carneHamburguesa] 



function Trago(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("El trago de " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su trago es: " + this.version)}
}

const tragoVino = new Trago('vino', 400, "copa",15,"vino.jpg");
const tragoCerveza = new Trago('cerveza', 600, "pinta",16,"cerveza.jpg");
const tragoRefresco = new Trago('refresco', 650, "vaso",17,"refresco.jpg");

let arrayTragos =  [tragoVino, tragoCerveza, tragoRefresco]



function Postre(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("El postre " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio +  " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su postre es: " + this.version)}
}

const postreFlan = new Postre('flan', 400, "chico",18,"flan.jpg");
const postreFruta = new Postre('fruta', 600, "chico",19,"fruta.jpg");
const postreHelado = new Postre('helado', 650, "chico",20,"helado.jpg");

let arrayPostres = [postreFlan, postreFruta, postreHelado]



function Cafe(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("El " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su pedido es: " + this.version)}
}

const cafeCafe = new Cafe('cafe', 300, "chico",21,"cafe.jpg");
const cafeTe = new Cafe('te', 250, "chico",22,"te.jpg");
const cafeCapuccino = new Cafe('capuccino', 350, "chico",23,"capuccino.jpg");

let arrayCafe = [cafeCafe, cafeTe, cafeCapuccino ]




function buscarPorPlato() {
	let buscarPlato = prompt("Ingrese el nombre del plato/bebida/postre deseado")

	let platoEncontrado = arrayPizzas.find((Pizza)=>Pizza.version.toLowerCase() == buscarPlato.toLowerCase()) 
		|| arrayPasta.find((Pasta)=>Pasta.version.toLowerCase() == buscarPlato.toLowerCase()) 
		|| arrayCarne.find((Carne)=>Carne.version.toLowerCase() == buscarPlato.toLowerCase())
		|| arrayEnsalada.find((Ensalada)=>Ensalada.version.toLowerCase() == buscarPlato.toLowerCase())
		|| arrayTragos.find((Tragos)=>Tragos.version.toLowerCase() == buscarPlato.toLowerCase())
		|| arrayCafe.find((Cafe)=>Cafe.version.toLowerCase() == buscarPlato.toLowerCase())
		|| arrayPostres.find((Postre)=>Postre.version.toLowerCase() == buscarPlato.toLowerCase())

	if(platoEncontrado == undefined ) {
		console.log("Su plato no fue encontrado")
	}else{
		platoEncontrado.hablar()	
	}


}


let arrayMenu = arrayEnsalada.concat(arrayCarne, arrayPasta, arrayPizzas, arrayTragos ,arrayCafe, arrayPostres)




function buscarPorPrecio() {
	let buscarPrecio = prompt("Ingrese el monto maximo a gastar")

	let precioBusqueda = arrayMenu.filter((Pizza)=>Pizza.precio <= buscarPrecio)
	
	if(precioBusqueda == 0 ) {
		console.log("No existen productos con ese precio")
	}else{
		console.log("Los productos encontrados con ese precio son:")
		for (let precioEncontrado of precioBusqueda) {
			precioEncontrado.hablar()
		}
	}
}




function mostrarMenu() {
	for (Pizza of arrayPizzas) {Pizza.hablar();}
	for (Pasta of arrayPasta) {Pasta.hablar();}
	for (Ensalada of arrayEnsalada) {Ensalada.hablar();}
	for (Carne of arrayCarne) {Carne.hablar();}
	for (Trago of arrayTragos) {Trago.hablar();}
	for (Postre of arrayPostres) {Postre.hablar();}	
	for (Cafe of arrayCafe) {Cafe.hablar();}	
}



function buscarPorId() {
	let buscarId = parseInt(prompt("Ingrese el CODIGO del plato deseado"));

	let idEncontrado = arrayPizzas.find((Pizza)=>Pizza.id == buscarId )
    	||  arrayPasta.find((Pasta)=>Pasta.id == buscarId )  		
		||  arrayEnsalada.find((Ensalada)=>Ensalada.id == buscarId ) 
		||  arrayCarne.find((Carne)=>Carne.id == buscarId ) 
		||  arrayTragos.find((Tragos)=>Tragos.id == buscarId ) 
		||  arrayPostres.find((Postre)=>Postre.id == buscarId ) 
		||  arrayCafe.find((Cafe)=>Cafe.id == buscarId ) 
	if(idEncontrado == undefined ) {
		console.log("El codigo ingresado no esta asociado a ningun plato")
	}else{
		idEncontrado.idFuction()
	}

}




let divMenu = document.getElementById("menu")




function mostrarMenuPizzas(array) { 
	let divPizzas = document.getElementById("pizzas")
	divPizzas.innerHTML = ""
	arrayPizzas.forEach((pizza)=>  {
		
		let nuevaPizza = document.createElement("div")

		nuevaPizza.innerHTML = `<div class="card fix" style="width: 18rem;">
		                  			<img class="card-img-top " src="images/${pizza.imagen}" alt="pasta">
		                    			<div class="card-body">
		                      				<h5 class="card-title">${pizza.version}</h5>
		                      					<p class="card-text">Precio: ${pizza.precio}</p>
		                      				<a href="#" class="btn btn-primary ">Comprar</a>
		                    			</div>
	                			</div>`
	        divPizzas.append(nuevaPizza)

	})
}



function mostrarMenuPasta()  { 

	let divPasta = document.getElementById('pasta')
	divPasta.innerHTML = ""

	arrayPasta.forEach((pasta)=> {

		let nuevaPasta = document.createElement("div")
		nuevaPasta.innerHTML = `<div class="card" style="width: 18rem;">
		                  			<img class="card-img-top" src="images/${pasta.imagen}" alt="pasta">
		                    			<div class="card-body">
		                      				<h5 class="card-title">${pasta.version}</h5>
		                      					<p class="card-text">Precio: ${pasta.precio}</p>
		                      				<a href="#" class="btn btn-primary">Comprar</a>
		                    			</div>
	                			</div>`
	   		 divPasta.append(nuevaPasta)

	})

}


function mostrarMenuEnsalada () { 
	let divEnsalada = document.getElementById('ensalada')
	divEnsalada.innerHTML = ""
	arrayEnsalada.forEach((ensalada)=> {

		let nuevaEnsalada = document.createElement("div")

		nuevaEnsalada.innerHTML = `<div class="card" style="width: 18rem;">
		                  			<img class="card-img-top" src="images/${ensalada.imagen}" alt="pasta">
		                    			<div class="card-body">
		                      				<h5 class="card-title">${ensalada.version}</h5>
		                      					<p class="card-text">Precio: ${ensalada.precio}</p>
		                      				<a href="#" class="btn btn-primary">Comprar</a>
		                    			</div>
	                			</div>`
	   		 divEnsalada.append(nuevaEnsalada)

	})
}






function mostrarMenuCarne () { 
	let divCarne = document.getElementById('carne')
	divCarne.innerHTML = ""
	arrayCarne.forEach((carne)=> {

		let nuevaCarne = document.createElement("div")

		nuevaCarne.innerHTML = `<div class="card" style="width: 18rem;">
		                  			<img class="card-img-top" src="images/${carne.imagen}" alt="carne">
		                    			<div class="card-body">
		                      				<h5 class="card-title">${carne.version}</h5>
		                      					<p class="card-text">Precio: ${carne.precio}</p>
		                      				<a href="#" class="btn btn-primary">Comprar</a>
		                    			</div>
	                			</div>`
	   		 divCarne.append(nuevaCarne)

	})

}




function mostrarMenuTragos() { 
	let divTragos = document.getElementById('tragos')
	divTragos.innerHTML = ""
	arrayTragos.forEach((tragos)=> {

		let nuevaTragos = document.createElement("div")

		nuevaTragos.innerHTML = `<div class="card" style="width: 18rem;">
		                  			<img class="card-img-top" src="images/${tragos.imagen}" alt="carne">
		                    			<div class="card-body">
		                      				<h5 class="card-title">${tragos.version}</h5>
		                      					<p class="card-text">Precio: ${tragos.precio}</p>
		                      				<a href="#" class="btn btn-primary">Comprar</a>
		                    			</div>
	                			</div>`
	   		 divTragos.append(nuevaTragos)

	})

}







function mostrarMenuPostres() { 
		let divPostres = document.getElementById('postres')
		divPostres.innerHTML = ""
		arrayPostres.forEach((postre)=> {

			let nuevaPostre = document.createElement("div")

			nuevaPostre.innerHTML = `<div class="card" style="width: 18rem;">
			                  			<img class="card-img-top" src="images/${postre.imagen}" alt="postre">
			                    			<div class="card-body">
			                      				<h5 class="card-title">${postre.version}</h5>
			                      					<p class="card-text">Precio: ${postre.precio}</p>
			                      				<a href="#" class="btn btn-primary">Comprar</a>
			                    			</div>
		                			</div>`
		   		 divPostres.append(nuevaPostre)

		})
}







function mostrarMenuCafe() { 
		let divCafe = document.getElementById('cafe')
		divCafe.innerHTML = ""
		arrayCafe.forEach((cafe)=> {

			let nuevaCafe = document.createElement("div")

			nuevaCafe.innerHTML = `<div class="card" style="width: 18rem;">
			                  			<img class="card-img-top" src="images/${cafe.imagen}" alt="postre">
			                    			<div class="card-body">
			                      				<h5 class="card-title">${cafe.version}</h5>
			                      					<p class="card-text">Precio: ${cafe.precio}</p>
			                      				<a href="#" class="btn btn-primary">Comprar</a>
			                    			</div>
		                			</div>`
		   		 divCafe.append(nuevaCafe)

		})

}








let mostrarMenuPizzasBtn = document.getElementById("mostrarPizzasBtn")

mostrarMenuPizzasBtn.addEventListener("click",mostrarMenuPizzas)


let mostrarMenuPastaBtn = document.getElementById("mostrarPastaBtn")

mostrarMenuPastaBtn.addEventListener("click",mostrarMenuPasta)


let mostrarMenuEnsaladaBtn = document.getElementById("mostrarEnsaladaBtn")

mostrarMenuEnsaladaBtn.addEventListener("click",mostrarMenuEnsalada)



let mostrarMenuCarneBtn = document.getElementById("mostrarCarneBtn")

mostrarMenuCarneBtn.addEventListener("click",mostrarMenuCarne)



let mostrarMenuTragosBtn = document.getElementById("mostrarTragosBtn")

mostrarMenuTragosBtn.addEventListener("click",mostrarMenuTragos)


let mostrarMenuPostresBtn = document.getElementById("mostrarPostresBtn")

mostrarMenuPostresBtn.addEventListener("click",mostrarMenuPostres)



let mostrarMenuCafeBtn = document.getElementById("mostrarCafeBtn")

mostrarMenuCafeBtn.addEventListener("click", mostrarMenuCafe)


let mostrarMenuCompleto = document.getElementById("mostrarMenuBtn")

mostrarMenuCompleto.addEventListener("click", ()=> {
mostrarMenuCafe()+mostrarMenuPostres()+mostrarMenuTragos()+mostrarMenuCarne()+mostrarMenuPasta()+mostrarMenuPizzas();
})



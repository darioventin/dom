const nombre = prompt("Ingresa tu nombre")
const edad = prompt("Edad")
const email = prompt("Email")


const texto = `Su usuario es: ${nombre}+Dario${edad}`


let contenedor = document.getElementById("contenedor")
let parrafo = document.createElement("p")

parrafo.innerHTML=`
<h2>${nombre}</h2>
<h1>${edad}</h1>
<h6>${texto}</h6>
`

contenedor.append(parrafo)
//Punto 1
document.getElementById("mejor-eleccion").onclick = function() {
    this.style.fontSize = "24px";
};

//Punto 2
const campoBusqueda = document.getElementById("campo-busqueda"); 
const mensajeBusqueda = document.getElementById("mensaje-busqueda");


campoBusqueda.addEventListener("input", function() {
    const valor = campoBusqueda.value; // Toma valor ingresado
    if (valor) {
        mensajeBusqueda.textContent = `Buscando: ${valor}`;
    } else {
        mensajeBusqueda.textContent = ''; 
    }
});

//Punto 3
document.addEventListener('DOMContentLoaded', function() {
    const botonBuscar = document.querySelector('.boton-buscar');
    const menuPrincipal = document.querySelector('#menu-principal');

    botonBuscar.addEventListener('click', function() {
        // Alternar la clase 'menu-oculto' en el menú principal
        menuPrincipal.classList.toggle('menu-oculto');
    });
});


//Punto 4
const enlacesMenu = document.querySelectorAll('#menu-principal ul li a');

function eliminarClaseActiva() {
    enlacesMenu.forEach(enlace => {
        enlace.parentElement.classList.remove('active'); // Quita la clase 'active' del <li>
    });
}
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', function() {
        eliminarClaseActiva(); // Quita la clase 'active' de todos los enlaces
        this.parentElement.classList.add('active'); // Agrega la clase 'active' al enlace clicado
    });
});


 //Punto 5
function imagen(){
    alert ("¡Has hecho doble clic en la imagen!")
}

 //Punto 6
function cambiarTexto() {
    const botonTexto = document.querySelector('#textoX');
    botonTexto.textContent = 'Te estaremos avisando para mas informacion';
}

//Punto 7
function SiguenosFuncion(){
    alert ("Siguenos en Facebook") 
}

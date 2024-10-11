// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

/* fonszize */
//Ejercicio 1
document.getElementById("titulo").textContent = "Hey, Esta es mi Primera Pagina";

//Ejercicio 2
const elementos = document.getElementsByClassName("btn btn-primary btn-xl text-uppercase"); // boton de inicio
for (let i = 0; i < elementos.length; i++) {
  elementos[i].style.backgroundColor = "red";
}

//Ejercicio 3
const listas = document.getElementsByTagName("a"); 
if (listas[1]) {
  listas[1].textContent = "Nosotros"; 
}

//Ejercicio 4
document.querySelector(".text-muted").innerHTML = "En Mantenimiento por el momento";



//* FALTARIA COMPLETARLOS Y QUE ANDEN BIEN*/

//Ejercicio 5
const elementoss = document.querySelectorAll("p");
for (let i = 0; i < elementos.length; i++) {
  elementos[i].classList.add("claseTexto");
}


//Ejercicio 6
const boton = document.createElement("button");
boton.textContent = "Boton Ejercicio 6";
document.body.appendChild(boton);

boton.addEventListener("click", () => {
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = "Este es un nuevo parrafo para el ejercicio 6";
  document.body.appendChild(nuevoParrafo);
});

window.addEventListener('load', function() {
    console.log('Archivo vinculado')

    const qs = (element) => document.querySelector(element);
    const qsa = (element) => document.querySelectorAll(element);
    const $ = (element) => document.getElementById(element);

    let h1 = qs('h1');
    let body = qs('body');

    let confirmarOsc = confirm("¿Desea modo oscuro?");

    if(confirmarOsc){
        qs("body").style.backgroundColor = "#7f7f7f"
        body.classList.add("fondoMoviesList");
    }

    h1.innerHTML = "LISTADO DE PELICULAS"
    h1.style.color = "white";
    h1.style.backgroundColor = "teal"
    h1.style.padding = "20px"

})
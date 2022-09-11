window.addEventListener('load', function() {
    console.log('Archivo vinculado')

    const qs = (element) => document.querySelector(element);
    const qsa = (element) => document.querySelectorAll(element);
    const $ = (element) => document.getElementById(element);

    let h1 = qs('h1');
    let section = qs('section');
    let article = qs('article');

    h1.innerHTML = "AGREGAR PELÍCULAS";
    h1.classList.add("titulo");
    article.classList.add("fondoTransparente");
    section.classList.add("fondoCRUD");
    
})
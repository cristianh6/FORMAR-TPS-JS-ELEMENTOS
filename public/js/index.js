window.addEventListener('load', function() {
    console.log('Archivo vinculado')

    const qs = (element) => document.querySelector(element);
    const qsa = (element) => document.querySelectorAll(element);
    const $ = (element) => document.getElementById(element);
    
    let main = qs('main');
    let h2 = qs('h2');
    let a = qs('a');
    let p = qs('p');
    
    let nombre = prompt("ingrese su nombre");
    
        if(nombre){
            qs(".subtitulo").innerText += " " + nombre
        }else{
            qs(".subtitulo").innerText += " Invitado"
        }
    
        h2.style.fontFamily = "uppercase";
    
        a.style.color = "#E51B3E"
    
        let confirmarFondo = confirm("¿Desea colocar un fondo de pantalla?");
    
        if(confirmarFondo){
            this.document.querySelector("body").classList.add("fondo")
        }
    
        for (let i = 0; i < p.length; i++) {
            if(i % 2 == 0){
                p[i].classList.add("destacadoPar")
            }else{
                p[i].classList.add("destacadoImpar")
            }  
        }
    
        qs(".container").style.display = "block";
})


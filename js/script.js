//JS del modo oscuro/claro
//Declaro variables
const modoOscuro = document.getElementById('modoOscuro');
const botonOscuro = document.getElementById('botonOscuro');
const logoHeader = document.getElementById('logoHeader');
const colorCards = document.getElementById('colorCards');
const colorCards2 = document.getElementById('colorCards2');

botonOscuro.addEventListener('click', toggleMode);

function toggleMode() {
    modoOscuro.classList.toggle('modo-claro');

    //Cambia a modo oscuro
    if (modoOscuro.classList.contains('modo-claro')) {
        botonOscuro.textContent = 'Modo Claro';
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        logoHeader.src = '../img/loguito2_blanco.png';
        colorCards.style.color = 'black';
        colorCards2.style.color = 'black';

    } else {
        botonOscuro.textContent = 'Modo Oscuro';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        logoHeader.src = '../img/loguito2.png';
        colorCards.style.color = 'black';
        colorCards2.style.color = 'black';
    }
}

//JS hace un zoom al pasar el mouse sobre las imagenes del index
const container = document.getElementById('container');
const img = document.querySelector('.img-titulo');

container.addEventListener('mousemove', (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    
    console.log(x,y);

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = 'scale(1.5)';   
})

container,addEventListener('mouseleave', () => {
    img.style.transformOrigin = 'center';
    img.style.transform = 'scale(1)';
})


//Al hacer clic en comprar tira mensaje "Producto agregado correctamente" al carrito

const cardButton = document.getElementById('car-button');
cardButton.onclick = muestraAlerta;

function muestraAlerta(evento) {
    alert("Producto agregado correctamente ✅");
}
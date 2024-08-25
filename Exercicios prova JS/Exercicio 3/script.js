const mostrar = document.getElementById('mostrar')
const ocultar = document.getElementById('ocultar')
const elemento = document.getElementById('elemento')

mostrar.addEventListener('click', () =>{
    elemento.style.display = 'block'
})

ocultar.addEventListener('click', () =>{
    elemento.style.display = 'none'
})





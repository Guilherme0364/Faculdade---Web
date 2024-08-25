const itemLista = document.getElementsByClassName('nome')
console.log(itemLista)

Array.from(itemLista).forEach(element => {
    element.style.setProperty('color', 'green') 
});
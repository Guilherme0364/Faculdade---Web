const salvar = document.getElementById('salvar')
const campoTexto = document.getElementById('nome')

salvar.addEventListener('click', (evento) =>{
    textoDigitado = evento.target.value;
    alert('Seja bem vindo ' + textoDigitado + '!')
})





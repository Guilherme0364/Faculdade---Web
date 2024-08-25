const botao = document.querySelector('[data-botao]');
const imagem = document.querySelector('[data-imagem]');

botao.addEventListener('click', () => { // Para eventos em objetos obtidos pelo DOM, usar addEventListener
    imagem.setAttribute('src', 'img/js.png');
});

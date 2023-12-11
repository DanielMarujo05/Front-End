'use strict';

var botao = document.querySelector('.botao');

botao.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
});
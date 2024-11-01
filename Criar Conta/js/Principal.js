function verificarLocalStorage() {

    if (!localStorage.getItem('nomeLogado') && !localStorage.getItem('senhaLogado')) {

        window.location.href = 'index.html';
    }
}

const limparLogin = document.querySelector('#limparLogin')

limparLogin.addEventListener('click' , () =>{

    localStorage.removeItem('nomeLogado')
    localStorage.removeItem('senhaLogado')
})

window.onload = verificarLocalStorage;


// Botões do Mobile
var mobileButton = document.querySelector('#mobile-icon-button');
var mobileNav = document.querySelector('#nav-bar-mobile');
var mobileImg = document.querySelector('#mobile-icon')

mobileButton.addEventListener('click', function() {
    if (mobileNav.style.display === 'none' || mobileNav.style.display === '') {
        mobileNav.style.display = 'flex';
        mobileImg.src = 'img/menu-icon-fechar.png'

    } else {
        mobileNav.style.display = 'none';
        mobileImg.src = 'img/menu-icon.png'
    }
});

var idade = 20
var nome = 'lucas'
console.log('o seu nome é ' + nome + 'e sua idade é ' + idade)
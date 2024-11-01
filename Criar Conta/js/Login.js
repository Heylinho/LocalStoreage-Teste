// Esconder e Aparecer o Login
function ContaLogada() {
    const NomeDoUsuario = localStorage.getItem('nome');
    const SenhaDoUsuario = localStorage.getItem('senha');

    if (NomeDoUsuario && SenhaDoUsuario) {
        document.querySelector('#deslogado').style.display = 'none';
        document.querySelector('#logado').style.display = 'flex';
    } else {
        document.querySelector('#deslogado').style.display = 'flex';
        document.querySelector('#logado').style.display = 'none';
    }
}

//Quando clickar no botão ele criará uma LocalStorage
document.querySelector('#CriandoConta').addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.querySelector('#nome').value.toUpperCase();
    const senha = document.querySelector('#senha').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('senha', senha);

    document.querySelector('#nome').value = '';
    document.querySelector('#senha').value = '';

    ContaLogada();
});

//Confirma se o login bate com dados do LocalStorage
document.querySelector('#LogandoConta').addEventListener('submit', (e) => {
    e.preventDefault();

    const NomeDoUsuario = localStorage.getItem('nome');
    const SenhaDoUsuario = localStorage.getItem('senha');

    const ConfirNome = document.querySelector('#nome_con').value.toUpperCase();
    const ConfirSenha = document.querySelector('#senha_con').value;


    if (NomeDoUsuario === ConfirNome && SenhaDoUsuario === ConfirSenha) {
        location.href = 'Principal.html';
        localStorage.setItem('nomeLogado' , 'nomeLogado')
        localStorage.setItem('senhaLogado' , 'senhaLogado')
    }
        
    document.querySelector('#nome_con').value = '';
    document.querySelector('#senha_con').value = '';

    ContaLogada();
});

//Reseta o Login
document.querySelector('#resetar').addEventListener('click', () => {

    localStorage.clear();

    ContaLogada();

});

//Ao entrar irá o function
ContaLogada();

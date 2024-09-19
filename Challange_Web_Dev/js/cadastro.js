document.getElementById('formCadastro').addEventListener('submit', cadastro);

function cadastro(e) {
    e.preventDefault();

    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    let userExists = USERS.some((user) => user.nome === nome || user.email === email);

    if (userExists) {
        if (USERS.some((user) => user.nome === nome)) {
            alert('Nome já cadastrado!');
        } else {
            alert('Email já cadastrado!');
        }
    } else {
        USERS.push({ nome, email, senha });
        window.location.href = '../views/login.html';
        alert('Cadastro efetuado com sucesso');
    }
}

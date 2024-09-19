function logar() {
  let email = document.getElementById('email').value;
  let senha = document.getElementById('senha').value;

  let user = USERS

  user.map ((user) => {
    if (user.email == email && user.senha == senha) {
      window.location.href = '../views/home.html';
      alert('Login efetuado com sucesso');
    } else {
      alert('Email ou senha incorretos');
    }
  });
}

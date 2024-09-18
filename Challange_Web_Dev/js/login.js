document.querySelector('#loginForm').addEventListener('submit', function (e) {
  const nome = document.querySelector('input[name="nome"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const senha = document.querySelector('input[name="senha"]').value;
  e.preventDefault();
  if (!nome || !email || !senha) {
    alert('Por favor, preencha todos os campos.');

    //se a validação for bem sucedida, redirecione para a home 
  } else {
    window.location.href = "./home.html";
  }
});

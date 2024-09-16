document.querySelector('form').addEventListener('submit', function(e) {
  const nome = document.querySelector('input[name="nome"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const senha = document.querySelector('input[name="senha"]').value;

  if (!nome || !email || !senha) {
      alert('Por favor, preencha todos os campos.');
      e.preventDefault(); // Prevent form submission
  }
});
const form = document.getElementById('cadastro-form');
form.addEventListener('submit', function(event) 
{ event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (name && email && password) {
                alert('Ainda aprendendo Front End, logo vou para o Back! Obrigado por testar. Ficarei feliz com contribuições ao código. Deixe seu comentário.');
      } else {
                alert('Por favor, preencha todas as informações obrigatórias.');
      }
    });
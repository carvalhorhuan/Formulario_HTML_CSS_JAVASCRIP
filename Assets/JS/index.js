document.getElementById("entrar-btn").addEventListener("click", function() {
validarLogin();});

    function validarLogin() {
        var email = document.getElementById("email").value;
        var senha = document.getElementById("password-confirm").value;

        if (email === "admin@teste.com.br" && senha === "123abc") {
        exibirMensagem("Parabéns, você logou!");
        } else {
        exibirMensagem("Usuário não cadastrado.")}
        }

    function exibirMensagem(mensagem) {
    alert(mensagem);
        }   
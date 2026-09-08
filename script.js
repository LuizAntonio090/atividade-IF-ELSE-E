document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario == "admin" && senha == "1234") {

        document.getElementById("resultado").innerHTML = "Login bem-sucedido!";

    } else if (usuario == "admin") {

        document.getElementById("resultado").innerHTML = "Senha incorreta!";

    } else {

        document.getElementById("resultado").innerHTML = "Usuário não encontrado!";

    }
});

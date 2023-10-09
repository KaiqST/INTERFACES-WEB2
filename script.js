
function cadastrar() {
    var usuario = document.getElementById("usuario").value;
    if (usuario == '') {
        alert("Preencha o nome de usuário.");
        return;
    }
    var senha = document.getElementById("senha").value;
    if (senha == '') {
        alert("Preencha o nome de senha.");
        return;
    }
    var tipo = document.getElementById("tipo").value;

    if (usuario == "teste" && senha == "teste") {
        if (tipo === "cliente") {
            alert("Cadastro realizado como cliente.");
            window.location.href = './arquivo2.html'
        } else if (tipo === "administrador") {
            alert("Cadastro realizado como administrador.");
        } else {
            alert("Selecione um tipo de usuário válido.");
        }
    } else {
        alert("usuário senha incorreto.");
    }
}
document.getElementById("formCadastro").addEventListener("submit", async function (event) {
    event.preventDefault();

    const token = localStorage.getItem("token");
    const name = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("senha").value;

    const userDados = {}
    if (name) {
        userDados.name = name
    }
    if (email) {
        userDados.email = email
    }
    if (password) {
        userDados.password
    }
    if (!userDados.name && !userDados.email && userDados.password) {
        document.getElementById("mensagem").textContent = "Nenhum campo para atualizar"
        document.getElementById("mensagem").style.color = "red"
        return;
    }

    console.log(name, email, password, token)

    try {
        const resposta = await fetch("http://localhost:3000/users/me", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(userDados)
        });

        if (!resposta.ok) {
            const erro = await resposta.text();
            throw new Error(erro);
        }

        const dados = await resposta.json()

        // Mostra mensagem de sucesso
        document.getElementById("mensagem").textContent = "✅ Usuário cadastrado com sucesso!";
        document.getElementById("mensagem").style.color = "green";

    } catch (erro) {
        console.error("Erro:", erro);
        document.getElementById("mensagem").textContent = "Erro: " + erro.message;
        document.getElementById("mensagem").style.color = "red";
    }
})

  window.addEventListener("DOMContentLoaded", carregarPerfil);
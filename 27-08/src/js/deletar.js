document.getElementById("delete").addEventListener("click", async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    try {
        const resposta = await fetch("http://localhost:3000/users/me", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        });

        if (!resposta.ok) {
            const erro = await resposta.text();
            throw new Error(erro);
        }

        document.getElementById("mensagem").textContent = "Usuario deletado com sucesso!";
        document.getElementById("mensagem").style.color = "green";

        window.location.href = "login.html";

    } catch (erro) {
      console.error("Erro:", erro);
      document.getElementById("mensagem").textContent = "Erro: " + erro.message;
      document.getElementById("mensagem").style.color = "red";
    }


})
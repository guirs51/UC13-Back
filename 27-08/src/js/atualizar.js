document.getElementById("formCadastro").addEventListener("submit", async function(event) {
        event.preventDefault();

        const token = localStorage.getItem("token");
        const name = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("senha").value;

        const userDados = {}
        if(name){
            userDados.name = name
        }
        if(email){
            userDados.email = email
        }
        if(password){
            userDados.password
        }
        if(!userDados.name && !userDados.email && userDados.password){
            document.getElementById("mensagem").textContent = "Nenhum campo para atualizar"
            document.getElementById("mensagem").style.color = "red"
            return;
        }

        try {
            const resposta = await fetch("http://localhost:3000/users/me", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify(name, email, password)
            });

            if(!resposta.ok){
                const erro = await resposta.text();
                throw new Error(erro);
            }



        }
        catch (err) {

        }
})
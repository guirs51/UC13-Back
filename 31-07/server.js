//biblioteca usada para criar servidores com node.js
const express = require('express');
// biblioteca que permite interação com o banco
const mysql = require('mysql2');
//permite que o servidor entenda o formato JSON
const bodyParser = require('body-parser');

//cria objeto express que me permite configurar metodos para configurar meu servidor
const app = express();
// configura o se4rvidor para aceitar dados no formato JSON
app.use(bodyParser.json());

// configuar a coexão, passando todas as informações necessarias para se conectar com o servidor de banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'meu_backend'
});

//O metodo connect (que é da biblioteca myslq2) tenta se conectar ao banco
//se erro não for nulo, não faz a conexão
//recebe como argumento uma função de callback  - ou seja, uma função que sera executada depois que o banco de dados responder.
connection.connect(error => {
    if (error) {
        console.log("Erro ao conectar ao banco de dados: " + error.stack);
        return;
    }
    console.log('Conectado ao bando de dados com ID ' + connection.threadId);
});

//Rotas 

//Cria uyma rota HTTP POST para cadastrar um nova usuario no vanco de dados
//app é a nossa aplicação esxpress
//.post() define que essa rota aceita paenas requisições HTTP do tipo POST 
// '/usuarios' é o caminho da URL
// (req, res) => {...} é a função de callback que se´ra executada qunado esse rota for chamada
// req (resquet): objeto que contem todas as inofrmaçoes da requisição feita pelo clientes.
//res (response): onjeto usado para enviar um resposra ao cliente

app.post('/usuarios', (req, res) => {
    const { nome, email, senha } = req.body;
    const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(sql, [nome, email, senha], (error) => {
        if (error) return res.status(500).send('Erro ao adicionar usuário: ' + error.message);
        res.status(201).send('Usuário adicionado com sucesso.');
    });
});


app.get('/usuarios', (req, res) => {
    connection.query('SELECT * FROM usuarios' ,( error, resultados) => {
        if(error){
            return res.status(500).send('ERRO AO LISTAR USUARIOS');
        }
        res.json(resultados)
    })
})

//rota para ter informações de um unico usuario
app.get('/usuarios/:id', (req, res) => {
    const {id} = req.params;
    connection.query('SELECT * FROM usuarios WHERE id =  ?', [id] , (error, results) => {
        if(error){
            return res.status(500).send('ERRO AO LISTAR USUARIOS: ' + error.message);
        }
        res.json(results)
    });
})

app.put('/usuarios/:id', (req, res) => {
    const id = req.params;
    connection.query('UPDATE usuarios WHERE id = ?', [id], (error) => {
        if(error){
            return res.status(500).send("Erro ao atualizar usuario");
        }
        res.send("usuario cadastrod com sucesso");
    })
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
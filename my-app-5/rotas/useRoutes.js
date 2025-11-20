const express = require('express'); 
const router = express.Router(); 

// Armazenamento em memória (simulando um banco de dados)
let users = []; 

// Rota para cadastro de usuário: POST /api/cadastro
router.post('/cadastro', (req, res) => { 
    const { nome, email, senha } = req.body; 

    console.log('Nome:', nome); 
    console.log('Email:', email); 
    console.log('Senha:', senha); 

    // Validando os dados
    if (!nome || !email || !senha) {
        return res.status(400).json({ message: 'Nome, email e senha são obrigatórios.' }); 
    }

    // Criar novo usuário e adicionar ao array
    const newUser = { nome, email, senha }; 
    users.push(newUser); 

    return res.status(201).json({ 
        message: 'Usuário cadastrado com sucesso!', 
        user: newUser 
    });
});

// Rota para consulta de usuários: GET /api/consulta
router.get('/consulta', (req, res) => { 
    if (users.length === 0) { 
        return res.status(404).json({ message: 'Nenhum usuário encontrado.' }); 
    }
    // Retornando o array de usuários
    return res.status(200).json(users); 
});

//Rota para atualização de usuário: PUT /api/atualizar/:id
router.put('/atualizacao/:id', (req, res) => { 
    const { id } = req.params; 
    const { nome, email, senha } = req.body;

    //Encontrar o índice do usuário pelo ID
    const userIndex = users.findIndex((user) => user.id === parseInt(id));

    //Verificar se o usuário existe
    if (userIndex === -1) { 
        return res.status(404).json({ message: 'Usuário não encontrado.' }); 
    }

    //Validando os dados
    if (!nome || !email || !senha) {
        return res.status(400).json({ message: 'Nome, email e senha são obrigatórios.' }); 
    }

    //Atualizar os dados do usuário
    users[userIndex] = { id: parseInt(id), nome, email, senha };
    return res.status(200).json({
        message: 'Usuário atualizado com sucesso!', 
        user: users[userIndex] 
    });

    //Rota para deletar usuário: DELETE /api/deletar/:id
    router.delete('/deletar/:id', (req, res) => {
        const { id } = req.params;
        //Encontrar o índice do usuário pelo ID
        const userIndex = users.findIndex((user) => user.id === parseInt(id));  
        if (userIndex === -1) { 
            return res.status(404).json({ message: 'Usuário não encontrado.' }); 
        }

        // Remover o usuário do array
        users.splice(userIndex, 1);

        return res.status(200).json({ message: 'Usuário deletado com sucesso!' });
    });



module.exports = router;
const express = require('express')
const bcrypt = require('bcrypt')
const app = express()

app.use(express.json())

const users = []

app.get('/users', async (req, res) => {
    res.status(200).json(users)
});

app.post('/users', async (req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.senha, 10)
    } catch (error) {
        res.status(500).send();
    }

    const user = await push({ nome, senha })

    res.json(users)
});

app.listen(3000)

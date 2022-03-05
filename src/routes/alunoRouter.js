const router = require('express').Router();

router.get('/', (req, res) => 
{
    res.send("TESTE GET ALUNOS");
});

router.post('/', (req, res) => 
{
    res.send("TESTE POST ALUNOS");
});

router.put('/', (req, res) => 
{
    res.send("TESTE PUT ALUNOS");
});

module.exports = app => app.use('/aluno', router);
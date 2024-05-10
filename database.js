const pg = require('pg')

const database = new pg.Client('postgres://znxmmmqe:RCNEHyq7-ohUFd0MMfyW9n_F6ATnxzY1@silly.db.elephantsql.com/znxmmmqe')

database.connect((erro) => {
    if (erro) return console.log('Erro na conexão com o DB', erro)
    return console.log('Conectado ao DB!')
})

module.exports = database
import express from 'express'
let server  = express()
server.get('/calculadora/soma', (req, resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)
    let soma = n1 + n2
    resp.send({
        soma: soma
    })
})


server.listen(5050, () => console.log('ta subindo ein'))
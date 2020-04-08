import dados from '../../database/dados.js'
import * as app from '../http.js'

export function index(req, res) {
    res.setHeader('Content-type', 'application/json')
    res.write(JSON.stringify(dados))
    res.end()
}

export function view(req, res) {
    const urlParam = app.getParam(req, 'id')
    res.setHeader('Content-type', 'application/json')
    const dadosFiltrados = dados.filter(dado => 
        dado.id == urlParam.id
    )
    res.write(JSON.stringify(dadosFiltrados))
    res.end()
}

export function create(req, res) {
    app.executeBody(req, body => {
        dados.push(JSON.parse(body))
        res.statusCode = 201
        res.setHeader('Content-type', 'application/json')
        res.end()
    })
}
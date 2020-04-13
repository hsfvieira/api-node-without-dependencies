import dados from '../../database/dados.js'
import { selectAll, insertOne, selectByFirstName } from '../models/users.js'

export function index(req, res) {
    
    if(req.query.first_name) {
        selectByFirstName(req.query.first_name, (data) => {
            res.json(data)
        })
    } else {
        selectAll((data) => {
            res.json(data)
        })    
    }
}

export function view(req, res) {
    const { id } = req.params
    const dadosFiltrados = dados.filter(dado => 
        dado.id == id
    )
    res.json(dadosFiltrados)
}

export async function create(req, res) {
    await insertOne(req.body)
    dados.push(req.body)
    res.statusCode = 201
    res.setHeader('Content-type', 'application/json')
    res.end()
}
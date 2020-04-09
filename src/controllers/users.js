import dados from '../../database/dados.js'

export function index(req, res) {
    res.json(dados)
}

export function view(req, res) {
    const { id } = req.params
    const dadosFiltrados = dados.filter(dado => 
        dado.id == id
    )
    res.json(dadosFiltrados)
}

export function create(req, res) {
    dados.push(req.body)
    res.statusCode = 201
    res.setHeader('Content-type', 'application/json')
    res.end()
}
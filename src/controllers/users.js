import dados from '../../database/dados.js'

export function index(req, res) {
    res.setHeader('Content-type', 'application/json')
    res.write(JSON.stringify(dados))
    res.end()
}

export function view(req, res) {
    const { id } = req.params
    res.setHeader('Content-type', 'application/json')
    const dadosFiltrados = dados.filter(dado => 
        dado.id == id
    )
    res.write(JSON.stringify(dadosFiltrados))
    res.end()
}

export function create(req, res) {
    dados.push(req.body)
    res.statusCode = 201
    res.setHeader('Content-type', 'application/json')
    res.end()
}
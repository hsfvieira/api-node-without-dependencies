import { selectAll, selectFromFirstName, selectFromID, insert, updateOne, deleteOne } from '../models/users.js'

export async function index(req, res) {
    if(req.query.first_name) {
        const { first_name } = req.query
        const data = await selectFromFirstName(first_name)

        res.json(data)
    } else {
        const data = await selectAll()
        res.json(data)
    }
}

export async function view(req, res) {
    const { id } = req.params
    const data = await selectFromID(id)

    res.json(data)
}

export async function create(req, res) {
    const data = req.body
    await insert(data)

    res.statusCode = 201
    res.end()
}

export async function update(req, res) {    
    const { id } = req.params
    const newObj = req.body

    await updateOne(id, newObj)

    res.end()
}

export async function del(req, res) {
    const { id } = req.params
    
    await deleteOne(id)

    res.end()
}
import { 
    count, 
    countFromFirstName,
    selectAll,
    selectFromFirstName, 
    selectFromID, 
    insert, 
    updateOne, 
    deleteOne 
} from '../models/users.js'

export async function index(req, res) {
    const { page } = !req.query.page ? { page: 1 } : req.query

    if(req.query.first_name) {
        const { first_name } = req.query
        const totalLines = await countFromFirstName(first_name)
        const data = await selectFromFirstName(first_name, (page - 1) * 10)

        res.setHeader('X-Total-Count', totalLines)
        res.json(data)
    } else {
        const totalLines = await count()
        const data = await selectAll((page - 1) * 10)
        res.setHeader('X-Total-Count', totalLines)
        res.json(data)
    }
}

export async function view(req, res) {
    const { id } = req.params
    const data = await selectFromID(id)

    if(data) {
        res.json(data)
    } else {
        res.json({})
    }
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

    const result = await updateOne(id, newObj)

    if(!result) {
        res.statusCode = 404
    } else {
        res.statusCode = 204
    }
    
    res.end()
}

export async function del(req, res) {
    const { id } = req.params
    
    const result = await deleteOne(id)

    if(!result) {
        res.statusCode = 404
    } else {
        res.statusCode = 204
    }
    
    res.end()
}
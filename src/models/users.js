import connect from '../../database/pg.js'
import usersQueries from '../../database/queries/users.js'

export async function count() {
    const client = await connect()
    const { rows: [{ count: res }] } = await client.query(usersQueries.countTotal)

    await client.end()

    return res
}

export async function countFromFirstName(value) {
    const client = await connect()
    const { rows: [{ count: res }] } = await client.query(usersQueries.countFromFirstName, [`%${value}%`])

    await client.end()

    return res
}

export async function selectAll(value) {
    const client = await connect()
    const { rows: res } = await client.query(usersQueries.selectAll, [value])

    await client.end()

    return res
}

export async function selectFromFirstName(value, pageOffset) {
    const client = await connect()
    const { rows: res } = await client.query(
        usersQueries.selectFromFirstName,
        [`%${value}%`, pageOffset]
    )

    await client.end()

    return res
}

export async function selectFromID(value) {
    const client = await connect()
    const { rows: res } = await client.query(usersQueries.selectFromID, [value])

    await client.end()

    return res
}

export async function insert(newObj) {
    const client = await connect()

    const values = [newObj.first_name, newObj.last_name]

    await client.query(usersQueries.insert, values)
    await client.end()
}

export async function updateOne(id, newObj) {
    const client = await connect()

    const values = [newObj.first_name, newObj.last_name, id]

    await client.query(usersQueries.update, values)
    await client.end()
}

export async function deleteOne(id) {
    const client = await connect()

    await client.query(usersQueries.delete, [id])
    await client.end()
}
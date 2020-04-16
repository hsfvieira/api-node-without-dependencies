import connect from '../../database/pg.js'
import usersQueries from '../../database/queries/users.js'

export async function selectAll() {
    const client = await connect()
    const { rows: res } = await client.query(usersQueries.selectAll)

    await client.end()

    return res
}

export async function selectFromFirstName(value) {
    const client = await connect()
    const { rows: res } = await client.query(
        usersQueries.selectFromFirstName,
        [`%${value}%`]
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
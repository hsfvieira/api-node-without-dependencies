import fs from 'fs'
import { connect } from '../../database/pg.js'

export async function selectAll(fn) {
    const client = await connect()
    const querySelectAll = './database/queries/users/SELECT_USERS.sql'
    fs.readFile(querySelectAll, 'utf8', async (err, data) => {
        if(err) {
            return err
        }
        const res = await client.query(data)
        fn(res.rows)
        await client.end()
    })
}

export async function selectByFirstName(value, fn) {
    const client = await connect()
    const querySelectAll = './database/queries/users/SELECT_FROM_FIRST_NAME_USERS.sql'
    fs.readFile(querySelectAll, 'utf8', async (err, data) => {
        if(err) {
            return err
        }
        const res = await client.query(data, [`%${value}%`])
        fn(res.rows)
        await client.end()
    })
}

export async function selectOne(value, fn) {
    const client = await connect()
    const querySelectAll = './database/queries/users/SELECT_ONE_USERS.sql'
    fs.readFile(querySelectAll, 'utf8', async (err, data) => {
        if(err) {
            return err
        }
        const res = await client.query(data, [value])
        fn(res.rows)
        await client.end()
    })
}

export async function insertOne(newObj, fn) {
    const client = await connect()
    const queryInsertOne = './database/queries/users/INSERT_USERS.sql'
    fs.readFile(queryInsertOne, 'utf8', async(err, data) => {
        if(err) {
            return err
        }
        const values = [newObj.first_name, newObj.last_name]
        const res = await client.query(data, values)
        fn(res)
        await client.end()
    })
}
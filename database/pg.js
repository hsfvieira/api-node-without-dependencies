import pg from 'pg'
import { uri } from '../config/pg.js'

export default async function connect() {
    const client = new pg.Client({
        connectionString: uri,
        ssl: { rejectUnauthorized: false }
    })
    await client.connect()
    return client
}
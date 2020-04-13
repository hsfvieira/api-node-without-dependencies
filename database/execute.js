import fs from 'fs'
import { connect, endConnection } from './pg.js'

async function execute() {
    const folder = './database/migrations'
    const client = await connect()
    fs.readdir(folder, (err, files) => {
        if(err) {
            console.log(err)
            return err
        }
        files.map(file => {
            fs.readFile(`${folder}/${file}`, 'utf8', async (err, data) => {
                if(err) {
                    console.log(err)
                    return err
                }
                await client.query(data)
                await client.end()
            })
        })
    })
    
}

execute()
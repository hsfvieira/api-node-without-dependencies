import http from 'http'
import dados from './database/dados.js'
import app from './src/routes.js'
const port = process.env.PORT || 3000

http.createServer(async (req, res) => {
    const method = req.method
    const path = req.url
    app.execute(method, path)(req, res)
    
}).listen(port)
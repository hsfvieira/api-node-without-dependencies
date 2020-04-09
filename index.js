import http from 'http'
import dados from './database/dados.js'
import app from './src/routes.js'
const port = process.env.PORT || 3000

http.createServer(app.execute).listen(port)
import * as app from './http/index.js'
import * as user from './controllers/users.js'

app.get('/users', user.index)

app.get('/users/:id', user.view)

app.post('/users/', user.create)

app.get('/', (req, res) => {
    res.send('teste')
})

export default app
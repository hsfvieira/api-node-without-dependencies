import * as app from 'hsfvieira-http'
import * as user from './controllers/users.js'

app.get('/users', user.index)

app.get('/users/:id', user.view)

app.post('/users/', user.create)

export default app
import * as app from './http.js'
import * as user from './controllers/users.js'

app.get('/users', user.index)

app.get('/users/:id', user.view)

app.post('/users/', user.create)

export default app
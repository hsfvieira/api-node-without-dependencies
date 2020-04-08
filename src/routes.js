import * as app from './http.js'
import * as user from './controllers/users.js'
import dados from '../database/dados.js'

app.get(/^\/users\/?$/, user.index)

app.get(/^\/users\/[0-9]*\/?$/, user.view)

app.post(/^\/users\/?$/, user.create)

export default app
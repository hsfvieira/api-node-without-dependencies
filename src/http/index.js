import { notFound } from './default.js'
import { getBody, getParams } from './request.js'
import { routes } from './router.js'

export { routes, get, post } from './router.js'

export function execute(req, res) {
    const {method, url: path} = req
    getBody(req, (req) => {
        const filteredRoute = routes[method].filter(route => 
            path.match(route.path)
        )
        if(filteredRoute.length != 0) {
            req.params = getParams(path, filteredRoute[0].path)
            filteredRoute[0].fn(req, res)
        } else {
            notFound(req, res)
        }
    })
}

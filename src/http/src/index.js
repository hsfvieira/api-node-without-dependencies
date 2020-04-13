import { notFound } from './default.js'
import { injectData, getPath } from './request.js'
import { filterRoute } from './router.js'
import { injectFunctions } from './response.js'

export { routes, get, post } from './router.js'

export function execute(request, response) {
    request.path = getPath(request)
    const res = injectFunctions(response)
    
    const routeFiltered = filterRoute(request)
    if(routeFiltered) {
        request.pathRegex = routeFiltered.path
        injectData(request, (req) => {
            routeFiltered.fn(req, res)    
        })
    } else {
        notFound(request, res)
    }
    
}
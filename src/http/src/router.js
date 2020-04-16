export const routes = { 
    GET: [],
    POST: []
}

function parsePath(path) {
    if(path.match(/^\/$/g)) {
        return /^\/$/
    }
    const matchPath = path.match(/\/([^\/]+)/g)
    const treatMatchPath = matchPath.map(pathPart => {
        const regexpParam = /\/:(.+)/
        const pathPartParam = pathPart.match(regexpParam)
        if(pathPartParam) {
            return `\/(?<${pathPartParam[1]}>.+)`
        }
        return pathPart
    })
    const pathString = treatMatchPath.join('')
    return RegExp(`^${pathString}\/?$`)
}



function registerRoute(path, fn, method) {
    const regexPath = parsePath(path)
    routes[method].push({path: regexPath, fn})
}

export function get(path, fn) {
    registerRoute(path, fn, 'GET')
}

export function post(path, fn) {
    registerRoute(path, fn, 'POST')
}

export function put(path, fn) {
    registerRoute(path, fn, 'PUT')
}

export function del(path, fn) {
    registerRoute(path, fn, 'DELETE')
}

export function filterRoute(req) {
    const filteredRoute = routes[req.method].filter(route => 
        req.path.match(route.path)
    )
    if(filteredRoute.length != 0) {
        return filteredRoute[0]
    } else {
        return false
    }
    
}
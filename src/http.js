export const routes = { 
    GET: [],
    POST: []
}

function parsePath(path) {
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
    return RegExp(`${pathString}\/?$`)
}

export function get(path, fn) {
    const regexPath = parsePath(path)
    routes.GET.push({path: regexPath, fn})
}

export function post(path, fn) {
    const regexPath = parsePath(path)
    routes.POST.push({path: regexPath, fn})
}

export function execute(req, res) {
    const {method, url: path} = req
    getBody(req, (req) => {
        const filteredRoute = routes[method].filter(route => 
            path.match(route.path)
        )
        if(filteredRoute.length != 0) {
            const {groups: params} = path.match(filteredRoute[0].path)
            req.params = params
            filteredRoute[0].fn(req, res)
        } else {
            notFound(req, res)
        }
    })
}

export async function getBody(req, fn) {
    const body = []
    req.on('data', async chunk => {
        body.push(await chunk)
    })
    req.on('end', async () => {
        if(body.length != 0) {
            req.body = JSON.parse(body)
        }
        fn(req)
    })
}

function notFound(req, res) {
    res.statusCode = 404
    res.setHeader('Content-type', 'application/json')
    res.write(JSON.stringify({
        message: 'Page not found',
        code: 404 
    }))
    res.end()
}
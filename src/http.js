export const routes = { 
    GET: [],
    POST: []
}

export function get(path, fn) {
    routes.GET.push({path, fn})
}

export function post(path, fn) {
    routes.POST.push({path, fn})
}

export function execute(method, path) {
    const filteredRoute = routes[method].filter(route => 
        path.match(route.path)
    )
    if(filteredRoute.length == 0) {
        return notFound
    }
    return filteredRoute[0].fn
}

export function getParam(req, paramName) {
    const reg = RegExp(`.*/(?<${paramName}>.*)\/?`)
    const result = req.url.match(reg)
    return result.groups
}

export async function getBody(req) {
    const body = []
    await req.on('data', chunk => {
        body.push(chunk)
    })
    await req.on('end', () => {
        return body
    })
}

export async function executeBody(req, fn) {
    const body = []
    await req.on('data', chunk => {
        body.push(chunk)
    })
    await req.on('end', () => {
        fn(body)
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
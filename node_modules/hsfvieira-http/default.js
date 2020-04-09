export function notFound(req, res) {
    res.statusCode = 404
    res.setHeader('Content-type', 'application/json')
    res.write(JSON.stringify({
        message: 'Page not found',
        code: 404 
    }))
    res.end()
}
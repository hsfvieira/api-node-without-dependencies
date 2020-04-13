function json(res) {
    return (objectJson) => {
        res.setHeader('Content-type', 'application/json')
        res.write(JSON.stringify(objectJson))
        res.end()
    }
}

function send(res) {
    return (text) => {
        res.write(text)
        res.end()
    }
}

function html(res) {
    return (html) => {
        res.setHeader('Content-type', 'text/html')
        res.write(text)
        res.end()
    }
}

export function injectFunctions(response) {
    response.json = json(response)
    response.send = send(response)
    response.html = html(response)
    return response
}
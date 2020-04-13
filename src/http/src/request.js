export function getPath(req) {
    const [path] = req.url.split(/\?/)
    return path
}

function getQuery(req) {
    const [, queryString] = req.url.split(/\?/)
    if(!queryString) {
        return {}
    }
    const queryValuesString = queryString.split(/&/)
    const queryArray = queryValuesString.map(queryValue => {
        const regexMatch = /(.+)=(.+)/
        if(!queryValue.match(regexMatch)) {
            return {}
        }
        const [, key, value] = queryValue.match(regexMatch)
        return { [key]: value }
    })
    const query = queryArray.reduce((newObj, valueObj) => Object.assign(newObj, valueObj))
    return query
}

function getParams(req) {
    const { groups } = req.path.match(req.pathRegex)    
    return groups
}

function getBody(req, fn) {
    const body = []
    req.on('data', chunk => {
        body.push(chunk)
    })
    req.on('end', () => {
        if (body.length != 0) {
            req.body = JSON.parse(body)
        }
        fn(req)
    })
}

export function injectData(req, execute) {
    req.query = getQuery(req)
    req.params = getParams(req)
    getBody(req, execute)
}
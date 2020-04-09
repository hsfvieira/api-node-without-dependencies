export function getParams(path, pathRegex) {
    const { groups } = path.match(pathRegex)
    return groups
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
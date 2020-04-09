import * as http from '../src/http.js'

function getTest() {
    http.get('/users', (req, res) => {
        res.end()
    })
    if(http.routes.GET.length == 1) {
        console.log(`getTest: OK`)
    }
}

function postTest() {
    http.post('/users', (req, res) => {
        res.end()
    })
    if(http.routes.POST.length == 1) {
        console.log(`postTest: OK`)
    }
}

function executeTest() {
    
}

function getParamTest() {
    
}

function parsePathTest() {
    console.log(http.parsePath('/users/'))
    console.log(http.parsePath('/users'))
    console.log(http.parsePath('/users/:id'))
    console.log(http.parsePath('/users/:id/'))
    console.log(http.parsePath('/users/:id/nome'))
    console.log(http.parsePath('/users/:id/nome/'))

    const regexParams = http.parsePath('/users/:id/')
    console.log('/users/id'.match(regexParams))
}


getTest()
postTest()
executeTest()
getParamTest()
parsePathTest()
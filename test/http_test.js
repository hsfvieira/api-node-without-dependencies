import * as http from '../src/http.js'

function getTest() {
    http.get(/\/users\/?/, (req, res) => {
        res.end()
    })
    if(http.routes.GET.length == 1) {
        console.log(`getTest: OK`)
    }
}

function postTest() {
    http.post(/\/users\/?/, (req, res) => {
        res.end()
    })
    if(http.routes.POST.length == 1) {
        console.log(`postTest: OK`)
    }
}

function executeTest() {
    
}

function getParamTest() {
    console.log(http.getParam({url: '/users/4'}, 'id'))
}


getTest()
postTest()
executeTest()
getParamTest()
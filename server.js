const express = require('express')
const app = express()   //now 'app' will require express
// const cors = require('cors')
const PORT = 8000

// app.use(cors())

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'Chance the Rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')    //__dirname tells server where to look for file
})

app.get('/api/:name', (request, response)=>{
    // response.json(rappers)

    const rapperName = request.params.name.toLowerCase()
    
    if(rappers[rapperName]){    //if "rapperName" is a property of "rappers"
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }

})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})
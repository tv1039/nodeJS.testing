const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.get('/dog', (req, res) => {
//     res.send({'sound' : '멍멍'})
// })

// app.get('/cat', (req, res) => {
//     res.send('고양이')
// })

// app.get('/user/:id', (req, res) => {
//     const q = req.params
//     console.log(q.id)

//     res.json({'userId' : q.id})
// })

// app.get('/user/', (req, res) => {
//     const q = req.query
//     console.log(q.q)
//     console.log(q.name)
//     console.log(q.age)

//     res.json({'userId' : q.name})
// })
app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if(name == "dog") {
        res.json({'sound' : '멍멍'})
    } else if(name == "cat") {
        res.json({'sound' : '야옹'})
    } else {
        res.json({'sound' : '놉'})
    }
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})

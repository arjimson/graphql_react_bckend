const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// allow cross-origin requests
app.use(cors())

// connect to mongoatlas db
mongoose.connect('mongodb+srv://arjimson:test123@cluster0-p57ox.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))



app.listen(4000, () => console.log('now listening for request on port 4000'))
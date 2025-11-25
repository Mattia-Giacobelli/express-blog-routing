const express = require('express')
const postsRouter = require('./routes/posts')
const app = express()
const port = 3000

app.use('/api/posts', postsRouter)

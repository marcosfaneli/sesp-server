import express from 'express'
import cors from 'cors'
import { errors } from "celebrate"
import { attachPaginate } from "knex-paginate"

import routes from './routes'

attachPaginate()

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use(errors())

app.listen(5000, () => {
    console.log('Servidor on line')
})
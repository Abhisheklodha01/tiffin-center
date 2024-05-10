import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import connectDB from './db/index.js'

config()

connectDB()
const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL
}))

app.get("/", (req, res)=> {
    res.send("working fine")
})

export default app
import express from 'express';
import path from 'path'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import auth from './routes/auth'

// passwordhash for pass 'abc': $2a$10$1zSye2oiueM6v9Xq9x4nVOGY1bKXzNuPCn1f1HcJhLE./7ev6hWhm
// passwordhash for pass 'lol': $2a$10$eaa15IlRRzOt6hMKP0D7wOBOnvn6IXvcA7B5GJjmSWl8b.eLVzOje

dotenv.config();

const app = express();
app.use(bodyParser.json())
mongoose.connect(process.env.MONGODB_URL);
// , { useMongoClient: true }
app.use('/api/auth', auth)

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(8080, console.log("Running on localhost:8080"))
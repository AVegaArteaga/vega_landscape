import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js'

const app = express();
dotenv.config();

//it is responsible for parsing the incoming request bodies in a middleware before you handle it.app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/user', userRoutes);

app.get('/', (req,res) => {res.send('Hello You!');});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) //it is now working //app.listen
    .catch((error) => console.log(error.message)); //gets an error if did not work
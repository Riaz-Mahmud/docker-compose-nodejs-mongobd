import express from 'express';
import mongoose from 'mongoose';
import config from "../config.js";
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const connectToDB = async () => {
    try {
        await mongoose.connect(config.db_uri, {})
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

const app = express();

// Middleware
const corsOptions = {
    origin: '*', // Allow any origin during development
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    cors(corsOptions)(req, res, next);
});

app.use(cookieParser());

// Global middleware
app.use((req, res, next) => {
    next();
});

app.use(bodyParser.json());
app.use(express.json());

await connectToDB();

export default app;
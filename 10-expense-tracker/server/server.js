import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
const app = express()

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:5173' }));

// import routes
import transactionRoutes from './modules/transaction.routes.js';

// connecting to database
mongoose.connect(process.env.MONGO, {})
    .then(() => console.log("Connected to MongoDB Database Successfully"))
    .catch((error) => console.log(`Error While Connecting to Database.${error}`));

//  import model
import "./model/transaction.model.js";

app.use('/api', transactionRoutes);

app.get('/', (req, res) => res.send('Hello World! Backend of Expense Tracker Project 😍'))
app.listen(process.env.PORT, () => console.log(`Backend is listening on port http://localhost:${process.env.PORT}`))
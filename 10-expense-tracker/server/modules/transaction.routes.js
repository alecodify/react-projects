import express from 'express'
import GetTransaction from './controllers/GetTransaction.js';
import AddTransaction from './controllers/AddTransaction.js';
import DeleteTransaction from './controllers/DeleteTransaction.js';

const transactionRoutes = express.Router()

transactionRoutes.post('/', AddTransaction);
transactionRoutes.get('/', GetTransaction);
transactionRoutes.delete('/:id', DeleteTransaction);

export default transactionRoutes;
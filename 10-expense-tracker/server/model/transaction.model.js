import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    text: {type: String, trim: true, required: true},
    amount: {type: Number, required: true},
    createAt: {type: Date, default: Date.now()},
});

const transactionModel = mongoose.model('transaction', transactionSchema);

export default transactionModel;
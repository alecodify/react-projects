import mongoose from "mongoose";

const AddTransaction = async (req, res) => {
    const { text, amount } = req.body;
    const transactionModel = mongoose.model('transaction');
    try {
        const transaction = await transactionModel.create(req.body);
        return res.status(201).json({ status: 'Success', data: transaction });
    } catch (error) {
        return res.status(500).json({ status: 'Failed', message: error });
    }
}

export default AddTransaction
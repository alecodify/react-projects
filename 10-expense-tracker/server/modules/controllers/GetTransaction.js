import mongoose from "mongoose"

const GetTransaction = async (req, res) => {
    const transactionModel = mongoose.model('transaction');
    try {
        const transactions = await transactionModel.find();
        return res.status(200).json({ status: 'Success', count: transactions.length, data: transactions });
    } catch (error) {
        return res.status(500).json({ status: 'Failed', message: error })
    }
}

export default GetTransaction;
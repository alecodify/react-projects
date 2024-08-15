import mongoose from "mongoose";

const DeleteTransaction = async(req, res) => {
    const transactionModel = mongoose.model('transaction');
    const { id } = req.params;
    try {
        const transaction = await transactionModel.findByIdAndDelete(id);
        if (!transaction) {
            return res.status(404).json({status: 'Failed', message: 'No Transaction Found'});
        }
        return res.status(200).json({status: 'Success', message: 'Deleted Successfully'})
    } catch (error) {
        return res.status(500).json({status: 'Failed', message: error});
    }
}

export default DeleteTransaction;
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";
import { Fragment } from "react";

const Transactions = () => {
    const transactions = [
        {
            id: "1",
            icon: BsCurrencyRupee,
            text: "INR Deposit",
            amount: "+ ₹81,123.10",
            timestamp: "2022-06-09 7:06 PM",
        },
        {
            id: "2",
            icon: FaBtc,
            text: "BTC Sell",
            amount: "- 12.48513391 BTC",
            timestamp: "2022-06-09 7:06 PM",
        },
        {
            id: "3",
            icon: BsCurrencyRupee,
            text: "INR Deposit",
            amount: "+ ₹81,123.10",
            timestamp: "2022-06-09 7:06 PM",
        },
    ];

    return (
        <div className="bg-white shadow-md px-6 py-4 rounded-lg h-full">
            <h2 className="text-lg font-medium text-gray-700 mb-6"> Recent Transactions </h2>

            <div className="space-y-4">
                {transactions.map((transaction, i) => {
                    const IconComponent = transaction.icon
                    return (
                        <Fragment key={transaction.id}>
                            {i !== 0 && <hr className="border-gray-200 my-4" />}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center bg-gray-100 p-2 rounded-full w-10 h-10">
                                    <IconComponent className="text-lg text-gray-600" />
                                </div>
                                <div className="flex justify-between w-full">
                                    <div className="space-y-1">
                                        <p className="text-base font-medium text-gray-800">{transaction.text}</p>
                                        <p className="text-sm text-gray-500">{transaction.timestamp}</p>
                                    </div>
                                    <p className="text-base font-medium text-gray-800">{transaction.amount}</p>
                                </div>
                            </div>
                        </Fragment>
                    )
                })}
            </div>

            <button className="w-full mt-6 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300"> View All </button>
        </div>
    )
}

export default Transactions
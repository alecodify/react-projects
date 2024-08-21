
const Table = () => {
    const tableData = [
        {
            id: "HD82NA2H",
            date: "2023-06-20",
            time: "07:00 AM",
            type: {
                name: "INR Deposit",
                tag: "E-Transfer",
            },
            amount: "+₹81,123",
            status: "pending",
        },
        {
            id: "HD82NA4H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "INR Widthdraw",
                tag: "Wire Transfer",
            },
            amount: "-₹55,123",
            status: "processing",
        },
        {
            id: "HD82NA5H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "Buy",
                tag: "BTC",
            },
            amount: "12.0554484 BTC",
            status: "cancelled",
        },
        {
            id: "HD82NA6H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "Sell",
                tag: "BTC",
            },
            amount: "-2.0554484 BTC",
            status: "completed",
        },
        {
            id: "HD82NA7H",
            date: "2023-06-20",
            time: "07:00 AM",
            type: {
                name: "BTC Deposit",
            },
            amount: "+15.5000000",
            status: "pending",
        },
        {
            id: "HD82NA8H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "BTC Widthdraw",
            },
            amount: "-5.05555544",
            status: "completed",
        },
    ];

    const statusColor = {
        pending: "text-gray-500 bg-gray-200",
        processing: "text-yellow-600 bg-yellow-200",
        completed: "text-green-600 bg-green-200",
        cancelled: "text-red-600 bg-red-200",
    };

    return (
        <div className="no-scrollbar overflow-x-auto tableClass">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {tableData.map((data) => (
                        <tr key={data.id}>
                            <td className="px-4 py-2 text-sm font-medium text-gray-900">{data.id}</td>
                            <td className="px-4 py-2 text-sm text-gray-500">
                                <div>{data.date}</div>
                                <div className="text-xs text-gray-400">{data.time}</div>
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-500">
                                <div>{data.type.name}</div>
                                <div className="text-xs text-gray-400">{data.type?.tag}</div>
                            </td>
                            <td className="px-4 py-2 text-sm font-medium text-gray-900">{data.amount}</td>
                            <td className="px-4 py-2 text-sm">
                                <span className={`inline-flex items-center px-2 py-1 text-xs font-medium text-white rounded-full ${statusColor[data.status]}`}>
                                    {data.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
import { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import Card from "./Card";

const List = () => {
    const { transactions, getTransactions } = useGlobalContext();

    useEffect(() => {
        getTransactions()
    }, []);

    return (
        <div className="list">
            <h3>History</h3>
            <ul className="list-items">
                {transactions.map(transaction => (
                    <Card key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}

export default List
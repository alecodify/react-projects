import { useGlobalContext } from "../context/context";
import { numberWithCommas } from "../format";

const Card = ({ transaction }) => {
    const { deleteTransaction } = useGlobalContext();
    const sign = transaction.amount < 0 ? "-" : "+"

    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text}{" "} <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction._id)}>X</button>
        </li>
    )
}

export default Card
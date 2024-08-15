import { useState } from 'react'
import { useGlobalContext } from "../context/context";

const Add = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useGlobalContext();

    const onSubmit = (e) => {
        e.preventDefault();

        const newData = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newData);
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...' />
                </div>
                <div className='form-control'>
                    <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' />
                </div>
                <button type='submit' className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}

export default Add
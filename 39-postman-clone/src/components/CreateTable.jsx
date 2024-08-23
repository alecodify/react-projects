import { useState } from 'react'
import AddRow from './AddRow';

const CreateTable = ({ text, data, setData }) => {
    const [rows, addRows] = useState([0]);

    return (
        <div>
            <h2 className='text-lg font-semibold mt-2 mb-2'>{text}</h2>
            <div className='overflow-x-auto'>
                <table className='min-w-full border border-gray-300 border-collapse'>
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">{" "}</th>
                            <th className="border border-gray-300 p-2">KEY</th>
                            <th className="border border-gray-300 p-2">VALUE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <AddRow
                                addRows={addRows}
                                rowId={index}
                                key={index}
                                setData={setData}
                                data={data}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default CreateTable
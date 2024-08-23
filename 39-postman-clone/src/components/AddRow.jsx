import { useState } from 'react';

const AddRow = ({ addRows, rowId, data, setData }) => {
    const [checkCheckbox, setCheckCheckbox] = useState(false);
    
    const handleChange = (e) => {
        let result = data.filter(entry => entry.id === Number(e.target.name))[0];
        
        if (!checkCheckbox) {
            setCheckCheckbox(true);
            addRows(oldArr => [...oldArr, rowId]);
            result = { ...result, id: rowId, check: true };
        } else {
            setCheckCheckbox(false);
            result = { ...result, id: rowId, check: false };
        }
        
        let index = data.findIndex((value) => value.id === Number(e.target.name));
        if (index === -1) {
            setData(oldArr => [...oldArr, result]);
        } else {
            const newArray = [...data];
            newArray[index] = result;
            setData(newArray);    
        }
    };
    
    const onTextChange = (e) => {
        let result = data.filter(entry => entry.id === rowId)[0];
        result = { ...result, id: rowId, [e.target.name]: e.target.value };

        let index = data.findIndex((value) => value.id === rowId);
        
        if (index === -1) {
            setData(oldArr => [...oldArr, result]);
        } else {
            const newArray = [...data];
            newArray[index] = result;
            setData(newArray);    
        }
    };
    
    return (
        <tr className="border-b border-gray-300">
            <td className="p-2">
                <input 
                    type="checkbox" 
                    checked={checkCheckbox}
                    className="form-checkbox h-5 w-5 text-blue-600" 
                    name={rowId}
                    onChange={(e) => handleChange(e)}
                />
            </td>
            <td className="p-2">
                <input 
                    type="text" 
                    className="w-full h-8 p-1 border border-gray-300 rounded"
                    name="key"
                    onChange={(e) => onTextChange(e)}
                />
            </td>
            <td className="p-2">
                <input 
                    type="text" 
                    className="w-full h-8 p-1 border border-gray-300 rounded"
                    name="value"
                    onChange={(e) => onTextChange(e)}
                />
            </td>
        </tr>
    );
}

export default AddRow;

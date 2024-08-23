import { useState } from 'react'
import { useGlobalContext } from '../context/DataProvider';
import CreateJsonText from './CreateJsonText';
import CreateTable from './CreateTable';

const SelectTab = () => {
    const [value, setValue] = useState(0);
    const { paramData, setParamData, headerData, setHeaderData } = useGlobalContext();

    const handleChange = (index) => {
        setValue(index);
    };

    return (
        <div className='mt-5'>
            <div className='flex border-b border-gray-300'>
                <button onClick={() => handleChange(0)} className={`py-2 px-4 text-sm font-medium border-b-2 ${value === 0 ? 'border-orange-500 text-orange-500' : 'border-transparent'}`}>Params</button>
                <button onClick={() => handleChange(1)} className={`py-2 px-4 text-sm font-medium border-b-2 ${value === 1 ? 'border-orange-500 text-orange-500' : 'border-transparent'}`}>Headers</button>
                <button onClick={() => handleChange(2)} className={`py-2 px-4 text-sm font-medium border-b-2 ${value === 2 ? 'border-orange-500 text-orange-500' : 'border-transparent'}`}>Body</button>
            </div>

            <div className='mt-4'>
                {value === 0 && (
                    <div id=''>
                        <CreateTable text={'Query Params'} data={paramData} setData={setParamData} />
                    </div>
                )}
                 {value === 1 && (
                    <div id=''>
                        <CreateTable text={'Headers'} data={headerData}  setData={setHeaderData}/>
                    </div>
                )}
                 {value === 2 && (
                    <div id=''>
                        <CreateJsonText />
                    </div>
                )}
            </div>
        </div>
    )
}

export default SelectTab
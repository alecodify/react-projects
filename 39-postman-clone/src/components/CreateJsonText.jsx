import { useGlobalContext } from '../context/DataProvider'

const CreateJsonText = () => {
    const { setJsonText } = useGlobalContext();

    const onValueChange = (e) => {
        setJsonText(e.target.value);
    }

    return (
        <div className='mt-2 mb-2'>
            <h2 className='text-lg font-semibold'>JSON</h2>
            <textarea
                rows={5}
                className="w-full p-4 bg-[url('http://i.imgur.com/2cOaJ.png')] bg-local bg-no-repeat pl-8 pt-2 border border-gray-300 resize-none"
                onChange={(e) => onValueChange(e)}
            />
        </div>
    )
}

export default CreateJsonText
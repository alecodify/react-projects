import { useGlobalContext } from "../context/DataProvider"

const Form = ({ onSendClick }) => {
    const { formData, setFormData } = useGlobalContext();

    const onUrlChange = (e) => {
        setFormData({ ...formData, url: e.target.value });
    }

    const handleChange = (e) => {
        setFormData({ ...formData, type: e.target.value });
    }

    return (
        <div className="flex items-center justify-between space-x-4">
            <select value={formData.type} onChange={(e) => handleChange(e)} className="w-36 h-10 bg-gray-200 border border-gray-300 rounded">
                <option value="POST">POST</option>
                <option value="GET">GET</option>
            </select>
            <input type="text" value={formData.url} onChange={(e) => onUrlChange(e)} className="w-full h-10 bg-gray-200 border border-gray-300 rounded px-2" placeholder="Enter URL" />
            <button className="w-24 h-10 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => onSendClick()}>Send</button>
        </div>
    )
}

export default Form
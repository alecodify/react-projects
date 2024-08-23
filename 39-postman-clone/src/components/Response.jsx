const Response = ({ data }) => {
    let obj = data;

    let readableObj = '{ \n';
    for (let key in obj) {
        readableObj += '\t';
        readableObj += (typeof obj[key] === "string") ? `${key}: "${obj[key]}"` : `${key}: ${obj[key]}`;
        if (Object.keys(obj).pop() !== key.toString()) {
            readableObj += ',\n';
        }
    }
    readableObj += '\n}';

    return (
        <div className="py-4">
            <h2 className="text-xl font-semibold mt-2 mb-2">Response</h2>
            <textarea
                rows={5}
                className="w-full p-4 bg-[url('http://i.imgur.com/2cOaJ.png')] bg-local bg-no-repeat pl-8 pt-2 border border-gray-300 resize-none"
                disabled
                value={readableObj}
            />
        </div>
    );
}

export default Response;

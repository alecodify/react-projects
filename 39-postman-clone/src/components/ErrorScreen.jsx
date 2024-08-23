const ErrorScreen = () => {
    const error = 'https://i.stack.imgur.com/01tZQ.png';

    return (
        <div className="w-4/5 mx-auto">
            <h2 className="text-xl font-semibold mt-2 mb-2">Response</h2>
            <div className="flex justify-center">
                <img 
                    src={error} 
                    alt="error" 
                    className="w-full max-w-md h-auto object-center"
                />
            </div>
        </div>
    );
}

export default ErrorScreen;

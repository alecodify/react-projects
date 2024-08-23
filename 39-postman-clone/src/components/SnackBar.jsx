import { useState, useEffect } from 'react';

const SnackBar = ({ errorMsg, error, setError }) => {
    const [visible, setVisible] = useState(error);

    useEffect(() => {
        setVisible(error);
        if (error) {
            const timer = setTimeout(() => {
                setVisible(false);
                setError(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [error, setError]);

    const handleClose = () => {
        setVisible(false);
        setError(false);
    };

    return (
        <>
            {visible && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg z-50">
                    <div className="flex items-center justify-between">
                        <span className="text-sm sm:text-base">{errorMsg}</span>
                        <button onClick={handleClose} className="ml-4 text-lg sm:text-xl font-bold">
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default SnackBar;

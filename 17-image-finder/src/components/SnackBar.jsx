import { useEffect, useState } from 'react'

const SnackBar = ({ open, toggleSnack }) => {
    const [isVisible, setIsVisible] = useState(open);

    useEffect(() => {
        if (open) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
                toggleSnack(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [open, toggleSnack])

    return (
        <div className={`snackbar ${isVisible ? 'show' : ''}`}>
            <div className='alert'>
                <span className='close-btn' onClick={() => setIsVisible(false)}>&times;</span>
                Number of Images should be between 3 and 200
            </div>
        </div>
    )
}

export default SnackBar
import { useEffect } from 'react'

const Alert = ({ type, message, removeAlert, list }) => {
    useEffect(() => {
        const timeOut = setTimeout(() => { removeAlert() }, 3000);
        return () => clearTimeout(timeOut);
    }, [list])

    return (
        <p className={`alert alert-${type}`}>{message}</p>
    )
}

export default Alert
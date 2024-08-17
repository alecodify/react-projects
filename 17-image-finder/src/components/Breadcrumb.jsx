const Breadcrumb = ({ onChange, onCountChange }) => {
    return (
        <div className="breadcrumb">
            <input placeholder='Search images...' className='input' onChange={(e) => onChange(e.target.value)} />
            <input type="number" placeholder='Number of images' className='input' onChange={(e) => onCountChange(e.target.value)} />
        </div>
    )
}

export default Breadcrumb
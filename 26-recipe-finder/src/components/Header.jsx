
const Header = (props) => {
    const { className, children, title } = props;
    
    return (
        <div className={className}>
            <div className='text-content'>
                <h1 className='header-title'>{title}</h1>
                {children}
            </div>
        </div>
    )
}

export default Header
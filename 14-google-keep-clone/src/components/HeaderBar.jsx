import { MdMenu } from 'react-icons/md';

const HeaderBar = ({ handleDrawer }) => {
    return (
        <div className="headerbar">
            <button onClick={handleDrawer} className="headerbar-btn"><MdMenu size={30} /></button>
            <img src={'/logo.png'} alt="logo" style={{ width: '20px' }} />
            <h1>Keeper</h1>
        </div>
    )
}

export default HeaderBar
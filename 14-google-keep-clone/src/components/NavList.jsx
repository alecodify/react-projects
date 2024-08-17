import { FaLightbulb, FaArchive, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavList = ({ onClick }) => {
    const navList = [
        { id: 1, name: 'Notes', icon: <FaLightbulb />, route: '/' },
        { id: 2, name: 'Archives', icon: <FaArchive />, route: '/archive' },
        { id: 3, name: 'Trash', icon: <FaTrash />, route: '/delete' },
    ];

    return (
        <ul className='navlinks'>
            {navList.map(list => (
                <li key={list.id} style={{ margin: '10px 0' }}>
                    <Link to={list.route} className='navlink' onClick={onClick}>
                        <span style={{ marginRight: '10px' }}>{list.icon}</span>
                        <span>{list.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default NavList
import { FaSun, FaMoon } from 'react-icons/fa';
import { useGlobalContext } from '../context/ThemeContext';

const Header = () => {
    const { themeMode, setThemeMode } = useGlobalContext();

    return (
        <header className='header'>
            <h1>Theme Toggler</h1>
            <p>click icon below to switch mode</p>
            <div className='icon'  onClick={() => setThemeMode(themeMode === 'light' ? 'dark': 'light')}>{themeMode === "light" ? <FaMoon size={30} /> : <FaSun size={30} />}</div>
        </header>
    )
}

export default Header
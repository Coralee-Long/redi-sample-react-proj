import { useContext } from 'react';
import { AppContext } from '../App';

const Header = () => {
	const { theme, setTheme } = useContext(AppContext);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<header>
			<div className='header-main-container'>
				<div className='header-title-container'>
					<h1>Twitter Clone</h1>
				</div>
				<div className='theme-toggle'>
					<button onClick={toggleTheme}>
						Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;

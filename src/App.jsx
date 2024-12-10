import { useState, useEffect, createContext } from 'react';
import TweetInput from './components/TweetInput';
import TweetList from './components/TweetList';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Profile from './components/Profile';
import './App.css';

export const AppContext = createContext();

const App = () => {
	const [tweets, setTweets] = useState([]);
	const [user, setUser] = useState({
		name: 'User',
		profilePicture: '/avatar.jpg',
	});
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		// Fetch initial data from remote server, ex. https://jsonplaceholder.org/posts
		// ...
		fetchTweets();
	}, []);

	const fetchTweets = async () => {
		try {
			const response = await fetch('https://jsonplaceholder.org/posts');
			const data = await response.json();

			// Limit to the first 10 items
			const limitedData = data.slice(0, 10);

			console.log(limitedData);

			const formattedTweets = limitedData.map((post) => ({
				id: post.userId,
				content: post.thumbnail,
				user: { name: 'API User', profilePicture: 'default.jpg' },
			}));
			setTweets(formattedTweets);
		} catch (error) {
			console.error('Error fetching tweets:', error);
		}
	};

	const addTweet = (tweet) => {
		setTweets([tweet, ...tweets]);
	};

	return (
		<AppContext.Provider value={{ user, setUser, theme, setTheme }}>
			<div className={`app ${theme}`}>
				<Header />
				<Sidebar />
				<main>
					<Profile />
					<TweetInput
						addTweet={addTweet}
						tweets={tweets}
					/>
					<TweetList tweets={tweets} />
				</main>
			</div>
		</AppContext.Provider>
	);
};

export default App;

import { useState, useEffect, createContext } from 'react';
import TweetInput from './components/TweetInput';
import TweetList from './components/TweetList';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Profile from './components/Profile';

import './App.css';

// Context is not really being used yet, but will be necessary if you do the Profile component etc
export const AppContext = createContext();

const App = () => {
	const [tweets, setTweets] = useState([]);
	const [user, setUser] = useState({
		name: 'Joe Smith',
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
			const response = await fetch(
				'https://my.api.mockaroo.com/tweets?key=c8f44730'
			); // find better mock data
			const data = await response.json();

			console.log(data);

			setTweets(data);
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

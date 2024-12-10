import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../App';

const TweetInput = ({ addTweet }) => {
	// Retrieve saved tweets from localStorage if available
	const [tweets, setTweets] = useState(() => {
		const savedTweets = localStorage.getItem('tweets');
		return savedTweets ? JSON.parse(savedTweets) : [];
	});
	const [tweet, setTweet] = useState('');
	const { user } = useContext(AppContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTweet = { content: tweet, author: user.name, date: new Date() };
		const updatedTweets = [...tweets, newTweet];
		setTweets(updatedTweets); // Update state with new tweets
		setTweet(''); // Clear the input field
		addTweet(newTweet); // Optional: Use if you want to keep the `addTweet` functionality
	};

	// OPTIONAL FOR LATER:
	// Save tweets to localStorage whenever they change
	// useEffect(() => {
	// 	localStorage.setItem('tweets', JSON.stringify(tweets));
	// }, [tweets]);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={tweet}
					onChange={(e) => setTweet(e.target.value)}
					placeholder="What's happening?"
				/>
				<button type='submit'>Tweet</button>
			</form>
			{/* <div>
				<h2>Your Tweets</h2>
				<ul>
					{tweets.map((t, index) => (
						<li key={index}>
							<strong>{t.author}</strong>: {t.content} (
							{new Date(t.date).toLocaleString()})
						</li>
					))}
				</ul>
			</div> */}
		</div>
	);
};

export default TweetInput;

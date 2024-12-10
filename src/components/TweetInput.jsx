import { useState } from 'react';

const TweetInput = ({ addTweet }) => {
	const [content, setContent] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!content.trim()) return;

		// Create a hardcoded tweet structure
		const newTweet = {
			id: Date.now(), // Unique ID
			content,
			publishedAt: new Date().toISOString(), // Current date-time
			name: 'Anne West', // Hardcoded user name
			profilePicture: '/gen-avatar.png', // Hardcoded avatar image
		};

		// Pass the new tweet to the parent component
		addTweet(newTweet);

		// Clear the input field
		setContent('');
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={content}
					onChange={(e) => setContent(e.target.value)}
					placeholder="What's happening?"
				/>
				<button type='submit'>Tweet</button>
			</form>
		</div>
	);
};

export default TweetInput;

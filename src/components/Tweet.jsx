const Tweet = ({ tweet }) => {
	console.log(tweet?.publishedAt);
	console.log(tweet);

	return (
		<li
			className='tweet-list-item'
			style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
			{/* Avatar */}
			<img
				src={tweet.thumbnail || '/gen-avatar.png'} // Default to gen-avatar.png if no avatar is provided
				alt={`${tweet.name}'s avatar`}
				className='tweet-avatar'
				style={{
					width: '50px',
					height: '50px',
					borderRadius: '50%',
					objectFit: 'cover',
				}}
			/>
			{/* Tweet Content */}
			<div>
				<p>{tweet.content}</p>
				<small>
					By {tweet.name} on {new Date(tweet.publishedAt).toLocaleString()}
				</small>
				<div className='tweet-buttons-container'>
					<button>Like 0</button>
					<button>Retweet</button>
					<button>Reply</button>
				</div>
			</div>
		</li>
	);
};

export default Tweet;

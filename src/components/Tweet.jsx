const Tweet = ({ tweet }) => {
	return (
		<li className='tweet-list-item'>
			<p>{tweet.content}</p>
			<small>
				By {tweet.author} on {new Date(tweet.date).toLocaleString()}
			</small>
			<div className='tweet-buttons-container'>
				<button>Like 0</button>
				<button>Retweet</button>
				<button>Reply</button>
			</div>
		</li>
	);
};

export default Tweet;

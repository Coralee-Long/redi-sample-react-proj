const TweetInteractions = ({ likes, onLike }) => {
	return (
		<div>
			<button onClick={onLike}>Like {likes}</button>
			<button>Retweet</button>
			<button>Reply</button>
		</div>
	);
};

export default TweetInteractions;

import Tweet from './Tweet';

const TweetList = ({ tweets }) => {
	return (
		<ul>
			{tweets.map((tweet, index) => (
				<Tweet
					key={index}
					tweet={tweet}
				/>
			))}
		</ul>
	);
};

export default TweetList;

import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const Emojis = () => {
	const [allEmojis, setAllEmojis] = useState([]);
	const [loading, setLoading] = useState(true);
	const [query, setQuery] = useState('');

	const fetchEmojis = async () => {
		const res = await fetch(
			`https://emojiapi.dev/api/v1/emoji_names.json`
		);
		const data = await res.json();
		setAllEmojis(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchEmojis();
	}, [query]);

	return (
		<div className="emojis">
			<div className="search">
				<input placeholder="Search for keyword" value={query} onChange={(e) => setQuery(e.target.value)} />
			</div>

			<div className="grid-emojis">
				{loading === true ? (
					<Loader />
				) : (
					Object.entries(allEmojis).slice(0, 9).map(([key, value]) => (
						<div className="item">
							<span>{value}</span>
							<img src={`https://emojiapi.dev/api/v1/${key}.svg`}></img>
						</div>
					))
				)}

				{allEmojis === null && <h1>No Emoji Found</h1>}
			</div>
		</div>
	);
};

export default Emojis;

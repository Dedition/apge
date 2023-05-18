const axios = require('axios');

module.exports.run = async function (movies) {
	/*
		You are given a list of urls that will be used to search up movies.
		Make a GET call with axios using the given urls to search each movies.
		Then return an array of objects with the properties 'Title, Year, Genre' of each movie in the same order it came in as.

		You are welcome to change this function to an async/await.

		Example:

		function (['https://www.omdbapi.com/?t=Lion%20King', 'https://www.omdbapi.com/?t=Up']) =>
		[
			{Title: 'The Lion King', Year: '1994', Genre: 'Animation, Adventure, Drama, Family, Musical'},
			{Title: 'Up', Year: '2009', Genre: 'Animation, Adventure, Comedy, Family'},
		]

		Write your code below the comment.
	*/

	/*
	 const result = [];
	   for (const movieUrl of movies) {
		  const res = await axios.get(movieUrl);
		  // console.log('res', res);
		  const { Title, Year, Genre } = res.data;
		  result.push({ Title, Year, Genre });
	 }
	 return result;
	*/

	// Mappiing each URL to a promise that resolves to the movie data. Optimised for speed/efficiency.
	const movProm = movies.map(async (movieUrl) => {
		const res = await axios.get(movieUrl);
		const { Title, Year, Genre } = res.data;
		return { Title, Year, Genre }
	});

	return Promise.all(movProm);
};

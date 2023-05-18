const axios = require('axios');

module.exports.run = async function (url) {
	/*
		You are given a url. Make a GET call with axios using the given url.
		However, there is something wrong with the url, and it throws an error.
		This error will have a property 'message'. Properly return the message, adding 'Error: ' to the beginning of the message.

		You are welcome to change this function to an async/await.

		Write your code below the comment.
	*/

	/*
	return axios.get(url)
		  .then(resp => respo.data)
		  .catch(error => {
					return `Error: ${error.message}`;
	  }
		  );
	*/

	// async/await version
	try {
		const res = await axios.get(url);
		// console.log('res', res);
		return res.data;
	} catch (err) {
		return `Error: ${err.message}`;
	}

};

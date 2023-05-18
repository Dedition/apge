
module.exports.run = function (x, y) {
	/*
		You are given a 2D array. Using the x and y co-ordinates, find the sum of all the numbers from (0, 0) to (x, y)

		Example:
		-1  1  5        function(1, 1) => 12
		 9  3  7		function(1, 0) => 0
		 2  8  4		function(0, 1) => 8

		 Write your code below the comment.
	*/
	const twoDArray = [[0, 4, 2, 1],
	[3, -1, 1, 0],
	[0, 0, 2, 3],
	[1, 3, -3, 0]];

	/*	✓ ✓ ✓ ✓ ✓
		let sum = 0;
		 for (let i = 0; i <= x; i++) {
			  for (let j = 0; j <= y; j++) {
					if (i < twoDArray.length && j < twoDArray[i].length) {
						sum += twoDArray[i][j];
					}
			  }
		 }
		✓ ✓ ✓ ✓ ✓
		*/

	// This was a second attempt in making the code more optimised and trying to be safer for edge cases for x and y being larger than the array.
	let sum = 0;

	for (let i = 0; i <= Math.min(x, twoDArray.length - 1); i++) {
		for (let j = 0; j <= Math.min(y, twoDArray[i].length - 1); j++) {
			sum += twoDArray[j][i];
		}
	}

	return sum;
};

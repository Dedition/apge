module.exports.run = function (a, b, c) {
	/*
	Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

	Examples:
		function(1, 2, 3) => 6
		function(3, 2, 3) => 2
		function(3, 3, 3) => 0

	Write your code below the comment.
	*/

	if (a === b && b === c) { // base case
		return 0;
	} else if (a === b) {
		return c;
	} else if (a === c) {
		return b;
	} else if (b === c) {
		return a;
	}
	return a + b + c;


};

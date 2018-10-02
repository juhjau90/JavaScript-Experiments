function sum (arr) {
	return arr.reduce(function(c, d) {
		return c + d
	}, 0)
}

module.exports.sum = sum
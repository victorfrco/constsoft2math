module.exports = function integerToBinary(number) {
	return (number >>> 0).toString(2);
}

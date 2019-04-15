var crypto = require('crypto');
exports.md5 = function(str) {
	if (!str || typeof(str) != 'string')
		throw new Error('Invalid parameter!');
	var md5 = crypto.createHash('md5');
	md5.update(str.toString());
	return md5.digest('hex');
};

exports.randomArray = function(arrayLength, range, isRepeat) {
	// input validation
	if(typeof(arrayLength)=='object'){
		isRepeat = range;
		range = arrayLength;
	}
	if(typeof(arrayLength)=='boolean')
		isRepeat = arrayLength;
	if(typeof(range)=='boolean')
		isRepeat = range;
	if (!arrayLength || typeof(arrayLength) != 'number')
		arrayLength = 10;
	if (!range || typeof(range) != 'object')
		range = [0, 9];
	if (isRepeat === undefined || typeof(isRepeat) != 'boolean')
		isRepeat = true;
	if (range[1] - range[0] + 1 < arrayLength)
		isRepeat = true;

	// generate sequence
	const min = range[0];
	const max = range[1];
	if (isRepeat) {
		let sequence = [];
		for (var i = 0; i < arrayLength; i++)
			sequence.push(Math.floor(Math.random() * (max - min + 1) + min));
		return sequence;
	} else {
		let sequence = new Set();
		while(sequence.size != arrayLength)
			sequence.add(Math.floor(Math.random() * (max - min + 1) + min));
		return Array.from(sequence);
	}
};
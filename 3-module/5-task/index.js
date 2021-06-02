function getMinMax(str) {
	
	let elements = str.split(/[\s,]+/)
		.filter(el => !isNaN(el))
		.map(el => parseFloat(el))
		.sort((a, b) => a - b)

	if( elements.legth == 0) {
	return {}
	} else if(elements.legth < 2) {
	return {min: elements[0], max: elements[0]}
	}

	return {min: elements[0], max: elements[elements.length - 1]};
}

function camelize(str) {
	letters = str.split('');
	for(let i = 0; i < letters.length; i++) {
	  if(letters[i] === '-') {
		 letters[i + 1] = letters[i + 1].toUpperCase()
	  }
	}
	return letters.filter(el => el !== '-').join('');
}

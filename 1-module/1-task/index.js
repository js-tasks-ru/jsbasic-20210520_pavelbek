'use strict'

function factorial(n) {
	if (typeof n !== "number") return "value should be a number";
	if (n < 0) return "value should be >= 0";
	if (n < 2) return 1;

	let res = 1;

	for (let i = 1; i <= n; i++) {
		res *= i;
	}

	return res;
}

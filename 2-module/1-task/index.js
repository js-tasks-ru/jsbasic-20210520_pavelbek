function sumSalary(salaries) {
	return Object.values(salaries)
		.filter(e => Number.isInteger(e))
		.reduce((sum, e) => sum + e, 0);
}

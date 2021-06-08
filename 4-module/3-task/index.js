function highlight(table) {

	let rows = table.rows;
	const age = 1;
	const gender = 2;
	const status = 3;

	for (let i = 1; i < rows.length; i++) {

		let cells = rows[i].children;

		parseInt(cells[age].textContent) < 18 ? rows[i].style.textDecoration = "line-through" : null;

		cells[gender].textContent === "m" ? rows[i].classList.add("male") : rows[i].classList.add("female");

		if (cells[status].hasAttribute("data-available")) {
			cells[status].dataset.available === "true" ? rows[i].classList.add("available") : rows[i].classList.add("unavailable");
		} else {
			rows[i].hidden = true;
		}
	}

}
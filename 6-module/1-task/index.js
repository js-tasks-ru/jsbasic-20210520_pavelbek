
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
	constructor(rows) {
		this.rows = rows;
		this.elem = document.createElement('table');

		this.elem.innerHTML = '<thead><tr></tr></thead><tbody></tbody>';

		let theaderRow = this.elem.querySelector('thead tr');
		let tbody = this.elem.querySelector('tbody');
		let headers = Object.keys(rows[0]);

		headers.forEach(key => {
			theaderRow.insertAdjacentHTML('beforeend', `<th>${key.charAt(0).toUpperCase() + key.slice(1)}</th>`)
		});

		rows.forEach(() => tbody.insertAdjacentHTML('beforeend', `<tr></tr>`));
		let tbodyRows = tbody.querySelectorAll('tr');

		for (let i = 0; i < tbodyRows.length; i++) {
			let data = Object.values(rows[i]);

			for (let j = 0; j < tbodyRows.length; j++) {
				tbodyRows[i].insertAdjacentHTML('beforeend', `<td>${data[j]}</td>`);
			}
			tbodyRows[i].insertAdjacentHTML('beforeend', `<td><button>X</button></td>`)
		}

		this.elem.addEventListener('click', (event) => this.addDeleteRowEvent(event, this.elem));
	}

	addDeleteRowEvent(event, table) {
		let target = event.target;
		let res = target.tagName !== 'BUTTON' || !target.closest('td') || !table.contains(target);
		if (!res) {
			target.closest('tr').remove();
		}
	}
}
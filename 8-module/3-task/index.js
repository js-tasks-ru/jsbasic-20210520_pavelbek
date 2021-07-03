export default class Cart {
	cartItems = []; // [product: {...}, count: N]

	constructor(cartIcon) {
		this.cartIcon = cartIcon;
	}

	addProduct(product) {
		let found = this.cartItems.find(el => el.product.id === product.id);
		let newItem;
		if (!found) {
			newItem = {
				product: product,
				count: 1,
			}
			this.cartItems.push(newItem);
		} else {
			found.count++;
		}

		this.onProductUpdate(newItem);
	}

	updateProductCount(productId, amount) {
		let found = this.cartItems.find(el => el.product.id === productId);

		if (found && found.count > 0) {
			found.count += amount;
		}
		if (found.count === 0) {
			this.cartItems.splice(this.cartItems.indexOf(found), 1);
		}

		this.onProductUpdate(found);
	}

	isEmpty() {
		let res = new Boolean(this.cartItems.length);
		return res;
	}

	getTotalCount() {
		if (this.cartItems.length) {
			return this.cartItems.map(item => item.count).reduce((total, current) => total + current, 0);
		}
	}

	getTotalPrice() {
		if (this.cartItems.length) {
			return this.cartItems.reduce((total, current) => total + current.price * current.count, 0);
		}
	}

	onProductUpdate(cartItem) {

		this.cartIcon.update(this);
	}
}


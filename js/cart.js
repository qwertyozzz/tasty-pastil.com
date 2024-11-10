// Функція для додавання товару до кошика (додано параметр для картинки)
function addToCart(productName, price, imageUrl) {
	
	let cart = JSON.parse(localStorage.getItem('cart')) || []
	cart.push({ name: productName, price: price, image: imageUrl })
	localStorage.setItem('cart', JSON.stringify(cart))

	alert(`${productName} додано до кошика!`)
}
// Функція для відображення товарів у кошику
function displayCart() {
	let cart = JSON.parse(localStorage.getItem('cart')) || []
	let cartContainer = document.getElementById('cart-items')
	let totalContainer = document.getElementById('cart-total')

	cartContainer.innerHTML = ''
	let total = 0
	// Перебираємо кожен товар у кошику та додаємо його до сторінки
	cart.forEach((item, index) => {
		let itemElement = document.createElement('div')
		itemElement.classList.add('cart-item')
		itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <span class="cart-item-name">${item.name}</span>
            <span class="cart-item-price">${item.price} грн</span>
            <button class="remove-button" onclick="removeFromCart(${index})">Видалити</button>`
		cartContainer.appendChild(itemElement)

		total += item.price
	})
	// Зберігаємо загальну суму у localStorage
	localStorage.setItem('totalPrice', JSON.stringify(total))
	totalContainer.innerHTML = `Загальна сума: ${total} грн`
}

// Функція для видалення товару з кошика
function removeFromCart(index) {
	let cart = JSON.parse(localStorage.getItem('cart')) || []
	// Видаляємо товар за індексом
	cart.splice(index, 1)
	// Оновлюємо кошик у localStorage
	localStorage.setItem('cart', JSON.stringify(cart))
	// Оновлюємо відображення кошика
	displayCart()
}
// Викликаємо displayCart при завантаженні сторінки кошика
document.addEventListener('DOMContentLoaded', displayCart)
// Функція для очищення кошика
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
    alert("Кошик очищено!");
}
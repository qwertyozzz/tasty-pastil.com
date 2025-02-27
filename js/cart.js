// Функція для додавання товару до кошика (додано параметр для картинки)
function addToCart(productName, price, imageUrl) {
	let cart = JSON.parse(localStorage.getItem('cart')) || []
	cart.push({ name: productName, price: price, image: imageUrl })
	// Перевіряємо, чи товар вже є у кошику
	let existingItem = cart.find(item => item.name === productName)

	if (existingItem) {
		existingItem.quantity += 1 // Якщо є, збільшуємо кількість
	} else {
		cart.push({ name: productName, price: price, image: imageUrl, quantity: 1 }) // Додаємо новий товар з quantity: 1
	}

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
            <span class="cart-item-name" font-size="50px">${item.name}</span>
            <span class="cart-item-price">${item.price} грн</span>
            <button class="remove-button" onclick="removeFromCart(${index})">Видалити</button>`;
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
	localStorage.removeItem('cart')
	displayCart()
	alert('Кошик очищено!')
}


document.addEventListener('DOMContentLoaded', function () {
	loadCart()
})

function addToCart(productName, price, imageUrl) {
	let cart = JSON.parse(localStorage.getItem('cart')) || []
	let existingItem = cart.find(item => item.name === productName)

	if (existingItem) {
		existingItem.quantity += 1
	} else {
		cart.push({ name: productName, price: price, image: imageUrl, quantity: 1 })
	}

	localStorage.setItem('cart', JSON.stringify(cart))
	loadCart()
}

function loadCart() {
	let cart = JSON.parse(localStorage.getItem('cart')) || []
	let cartItemsContainer = document.getElementById('cart-items')
	let cartTotalContainer = document.getElementById('cart-total')
	
	cartItemsContainer.innerHTML = ''
	let total = 0
	
	cart.forEach((item, index) => {
		let itemElement = document.createElement('div')
		itemElement.classList.add('cart-item')
		itemElement.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" width="100">
					 </div>
            <div class="cart-item-info">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-price">${item.price} грн</span>
					 </div>
            <div class="cart-item-controls">
                <button onclick="updateQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${index}, 1)">+</button>
                <button class="remove-button" onclick="removeFromCart(${index})">Видалити</button>
            </div>
        `
		cartItemsContainer.appendChild(itemElement)
		total += item.price * item.quantity
	})

	cartTotalContainer.innerHTML = `Загальна сума: ${total} грн`
	localStorage.setItem('cart', JSON.stringify(cart))
}

function updateQuantity(index, change) {
	let cart = JSON.parse(localStorage.getItem('cart')) || []
	if (cart[index]) {
		cart[index].quantity += change
		if (cart[index].quantity <= 0) {
			cart.splice(index, 1)
		}
	}
	localStorage.setItem('cart', JSON.stringify(cart))
	loadCart()
}

function removeFromCart(index) {
	let cart = JSON.parse(localStorage.getItem('cart')) || []
	cart.splice(index, 1)
	localStorage.setItem('cart', JSON.stringify(cart))
	loadCart()
}

function clearCart() {
	localStorage.removeItem('cart')
	loadCart()
}

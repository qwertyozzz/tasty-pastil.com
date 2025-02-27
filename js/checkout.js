// Отримуємо вартість замовлення з localStorage або задаємо 0 за замовчуванням
document.addEventListener('DOMContentLoaded', () => {
	let totalPrice = JSON.parse(localStorage.getItem('totalPrice')) || 0
	document.getElementById('totalPrice').innerText = `${totalPrice} грн`
})

function submitOrder() {
	const name = document.getElementById('name').value
	const phone = document.getElementById('phone').value
	const email = document.getElementById('email').value
	const address = document.getElementById('address').value
	const notes = document.getElementById('notes').value

	if (!name || !phone || !address) {
		alert('Будь ласка, заповніть поля.')
		return
	}

	const orderDetails = {
		name,
		phone,
		email,
		address,
		notes,
		totalPrice: JSON.parse(localStorage.getItem('totalPrice')) || 0,
	}

	console.log('Дані замовлення:', orderDetails)
	alert('Ваше замовлення успішно оформлено!')

	// Очистити форму та localStorage
	document.getElementById('orderForm').reset()
	localStorage.removeItem('cart')
	localStorage.removeItem('totalPrice')
	document.getElementById('totalPrice').innerText = '0 грн'
}

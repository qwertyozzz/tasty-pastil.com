let currentSlide = 0

function showSlide(index) {
	const slides = document.querySelectorAll('.carousel-image')

	// Перевірка виходу за межі
	if (index >= slides.length) {
		currentSlide = 0
	} else if (index < 0) {
		currentSlide = slides.length - 1
	} else {
		currentSlide = index
	}

	// Ховаємо всі слайди
	slides.forEach(slide => slide.classList.remove('active'))

	// Показуємо активний слайд з плавною анімацією
	slides[currentSlide].classList.add('active')
}

function nextSlide() {
	showSlide(currentSlide + 1)
}

function prevSlide() {
	showSlide(currentSlide - 1)
}

document.addEventListener('DOMContentLoaded', () => {
	showSlide(currentSlide)

	document.querySelector('.next').addEventListener('click', nextSlide)
	document.querySelector('.prev').addEventListener('click', prevSlide)
})

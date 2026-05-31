import Swiper from 'swiper'
import { Navigation, Scrollbar } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

export function initSliders() {
	let resultsSlider = null
	let reviewsSlider = null
	let teamSlider = null

	if (document.querySelector('.results__slider')) {
		const paginations = document.querySelectorAll('.results__pagination')

		resultsSlider = new Swiper('.results__slider', {
			modules: [Navigation, Scrollbar],

			observer: true,
			observeParents: true,

			slidesPerView: 1,
			spaceBetween: 16,
			speed: 800,

			scrollbar: {
				el: '.results__scrollbar',
				draggable: true,
			},

			navigation: {
				prevEl: '.results__btn-prev',
				nextEl: '.results__btn-next',
			},

			on: {
				init(swiper) {
					updateFraction(swiper)
				},

				slideChange(swiper) {
					updateFraction(swiper)
				},
			},
		})

		function updateFraction(swiper) {
			const visibleSlides = [...swiper.slides].filter(
				(slide) => !slide.classList.contains('is-hidden')
			)

			const current = String(swiper.realIndex + 1).padStart(2, '0')
			const total = String(visibleSlides.length).padStart(2, '0')

			paginations.forEach((el) => {
				el.textContent = `${current}/${total}`
			})
		}
	}

	if (document.querySelector('.reviews__slider')) {
		const paginations = document.querySelectorAll('.reviews__pagination')

		reviewsSlider = new Swiper('.reviews__slider', {
			modules: [Navigation, Scrollbar],

			observer: true,
			observeParents: true,
			centeredSlides: false,

			slidesPerView: 1,
			spaceBetween: 16,
			speed: 800,

			scrollbar: {
				el: '.reviews__scrollbar',
				draggable: true,
			},

			navigation: {
				prevEl: '.reviews__btn-prev',
				nextEl: '.reviews__btn-next',
			},

			breakpoints: {
				1200: {
					slidesPerView: 1.7,
					spaceBetween: 20,
					centeredSlides: true,
				},
			},

			on: {
				init(swiper) {
					updateFraction(swiper)
				},

				slideChange(swiper) {
					updateFraction(swiper)
				},
			},
		})

		function updateFraction(swiper) {
			const visibleSlides = [...swiper.slides].filter(
				(slide) => !slide.classList.contains('is-hidden')
			)

			const current = String(swiper.realIndex + 1).padStart(2, '0')
			const total = String(visibleSlides.length).padStart(2, '0')

			paginations.forEach((el) => {
				el.textContent = `${current}/${total}`
			})
		}
	}

	if (document.querySelector('.team__slider')) {
		const paginations = document.querySelectorAll('.team__pagination')

		reviewsSlider = new Swiper('.team__slider', {
			modules: [Navigation, Scrollbar],

			observer: true,
			observeParents: true,

			slidesPerView: 1,
			spaceBetween: 16,
			speed: 800,

			scrollbar: {
				el: '.team__scrollbar',
				draggable: true,
			},

			navigation: {
				prevEl: '.team__btn-prev',
				nextEl: '.team__btn-next',
			},

			breakpoints: {
				991: {
					slidesPerView: 1.7,
					spaceBetween: 20,
				},
				1280: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
			},

			on: {
				init(swiper) {
					updateFraction(swiper)
				},

				slideChange(swiper) {
					updateFraction(swiper)
				},
			},
		})

		function updateFraction(swiper) {
			const visibleSlides = [...swiper.slides].filter(
				(slide) => !slide.classList.contains('is-hidden')
			)

			const current = String(swiper.realIndex + 1).padStart(2, '0')
			const total = String(visibleSlides.length).padStart(2, '0')

			paginations.forEach((el) => {
				el.textContent = `${current}/${total}`
			})
		}
	}

	return {
		resultsSlider,
		reviewsSlider,
		teamSlider,
	}
}

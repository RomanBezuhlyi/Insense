import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

export function initSliders() {
	let resultsSlider = null
	let reviewsSlider = null
	let teamSlider = null

	// ================= RESULTS =================
	if (document.querySelector('.results__slider')) {
		const progressFill = document.querySelector('.results__progress-fill')
		const paginations = document.querySelectorAll('.results__pagination')

		resultsSlider = new Swiper('.results__slider', {
			modules: [Navigation],

			observer: true,
			observeParents: true,

			slidesPerView: 1,
			spaceBetween: 16,
			speed: 800,

			navigation: {
				prevEl: '.results__btn-prev',
				nextEl: '.results__btn-next',
			},

			on: {
				init(swiper) {
					requestAnimationFrame(() => updateUI(swiper))
				},
				slideChange(swiper) {
					updateUI(swiper)
				},
			},
		})

		function updateUI(swiper) {
			updateProgress(swiper, progressFill)
			updateFraction(swiper, paginations)
		}
	}

	// ================= REVIEWS =================
	if (document.querySelector('.reviews__slider')) {
		const progressFill = document.querySelector('.reviews__progress-fill')
		const paginations = document.querySelectorAll('.reviews__pagination')

		reviewsSlider = new Swiper('.reviews__slider', {
			modules: [Navigation],

			observer: true,
			observeParents: true,

			slidesPerView: 1,
			spaceBetween: 16,
			speed: 800,

			breakpoints: {
				1200: {
					slidesPerView: 1.7,
					spaceBetween: 20,
					centeredSlides: true,
				},
			},

			navigation: {
				prevEl: '.reviews__btn-prev',
				nextEl: '.reviews__btn-next',
			},

			on: {
				init(swiper) {
					requestAnimationFrame(() => updateUI(swiper))
				},
				slideChange(swiper) {
					updateUI(swiper)
				},
			},
		})

		function updateUI(swiper) {
			updateProgress(swiper, progressFill)
			updateFraction(swiper, paginations)
		}
	}

	// ================= TEAM =================
	if (document.querySelector('.team__slider')) {
		const progressFill = document.querySelector('.team__progress-fill')
		const paginations = document.querySelectorAll('.team__pagination')

		teamSlider = new Swiper('.team__slider', {
			modules: [Navigation],

			observer: true,
			observeParents: true,

			slidesPerView: 1,
			spaceBetween: 16,
			speed: 800,

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

			navigation: {
				prevEl: '.team__btn-prev',
				nextEl: '.team__btn-next',
			},

			on: {
				init(swiper) {
					requestAnimationFrame(() => updateUI(swiper))
				},
				slideChange(swiper) {
					updateUI(swiper)
				},
			},
		})

		function updateUI(swiper) {
			updateProgress(swiper, progressFill)
			updateFraction(swiper, paginations)
		}
	}

	// ================= HELPERS =================

	function updateProgress(swiper, el) {
		if (!el) return

		const total = swiper.snapGrid.length
		const current = swiper.snapIndex

		const progress = total > 1 ? (current / (total - 1)) * 100 : 100

		el.style.width = `${progress}%`
	}

	function updateFraction(swiper, els) {
		// 🔥 FIX: тільки видимі slides (tabs-safe)
		const visibleSlides = swiper.slides.filter((slide) => {
			return getComputedStyle(slide).display !== 'none'
		})

		const total = visibleSlides.length
		const current = swiper.realIndex + 1

		els.forEach((el) => {
			el.textContent = `${String(current).padStart(2, '0')}/${String(
				total
			).padStart(2, '0')}`
		})
	}

	// ================= TABS FIX =================
	window.updateResultsSlider = function () {
		if (!resultsSlider) return

		requestAnimationFrame(() => {
			resultsSlider.update()
			resultsSlider.updateSlides()
			resultsSlider.updateProgress()
			resultsSlider.updateSize()
		})
	}

	return {
		resultsSlider,
		reviewsSlider,
		teamSlider,
	}
}

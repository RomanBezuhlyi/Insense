import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

export function initReviewsSlider() {
	if (!document.querySelector('.reviews__slider')) return null

	const progressFill = document.querySelector('.reviews__progress-fill')
	const paginations = document.querySelectorAll('.reviews__pagination')

	const slider = new Swiper('.reviews__slider', {
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

	function updateProgress(swiper, el) {
		if (!el) return

		const total = swiper.snapGrid.length
		const current = swiper.snapIndex + 1

		const progress = (current / total) * 100
		el.style.width = `${progress}%`
	}

	function updateFraction(swiper, els) {
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

	return slider
}

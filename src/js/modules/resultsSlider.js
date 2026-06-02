import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

export function initResultsSlider() {
	let resultsSlider = null
	let activeCategory = null

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

		function updateProgress(swiper, el) {
			if (!el) return

			const total = swiper.snapGrid.length
			const current = swiper.snapIndex + 1

			el.style.width = `${(current / total) * 100}%`
		}

		function getCategoryTotal(swiper) {
			if (!activeCategory) return swiper.slides.length

			return swiper.slides.filter(
				(slide) => slide.dataset.category === activeCategory
			).length
		}

		function updateFraction(swiper, els) {
			const total = getCategoryTotal(swiper)
			const current = swiper.realIndex + 1

			els.forEach((el) => {
				el.textContent = `${String(current).padStart(2, '0')}/${String(
					total
				).padStart(2, '0')}`
			})
		}

		window.updateResultsSlider = function (category) {
			if (!resultsSlider) return

			if (category) activeCategory = category

			requestAnimationFrame(() => {
				resultsSlider.update()
				resultsSlider.updateSlides()
				resultsSlider.updateProgress()
				resultsSlider.updateSize()

				updateUI(resultsSlider)
			})
		}
	}

	return {
		resultsSlider,
	}
}

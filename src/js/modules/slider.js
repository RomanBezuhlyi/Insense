import Swiper from 'swiper'
import { Navigation, Scrollbar } from 'swiper/modules'
import 'swiper/css'

export function initSliders() {
	if (!document.querySelector('.results__slider')) return

	const paginations = document.querySelectorAll('.results__pagination')

	const resultsSlider = new Swiper('.results__slider', {
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
			slide => !slide.classList.contains('is-hidden')
		)

		const current = String(swiper.realIndex + 1).padStart(2, '0')

		const total = String(visibleSlides.length).padStart(2, '0')

		paginations.forEach(el => {
			el.innerHTML = `${current}/${total}`
		})
	}

	return {
		resultsSlider,
	}
}

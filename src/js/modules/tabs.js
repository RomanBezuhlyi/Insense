export function initTabs({
	tabsSelector,
	slideSelector,
	activeClass = 'active',
	swiper,
}) {
	const tabs = document.querySelectorAll(tabsSelector)
	const slides = document.querySelectorAll(slideSelector)

	if (!tabs.length || !slides.length) return

	function getCategoryTotal(category) {
		return Array.from(slides).filter(
			(slide) => slide.dataset.category === category
		).length
	}

	function filterSlides(category) {
		const sliderEl = document.querySelector('.results__slider')

		sliderEl.classList.add('is-changing')

		setTimeout(() => {
			slides.forEach((slide) => {
				slide.style.display = slide.dataset.category === category ? '' : 'none'
			})

			swiper.update()
			swiper.slideTo(0, 0)

			window.updateResultsSlider?.(category)

			sliderEl.classList.remove('is-changing')
		}, 300)
	}

	tabs.forEach((tab) => {
		tab.addEventListener('click', () => {
			const category = tab.dataset.tab

			tabs.forEach((btn) => btn.classList.remove(activeClass))
			tab.classList.add(activeClass)

			filterSlides(category)
		})
	})

	const activeTab = document.querySelector(`${tabsSelector}.${activeClass}`)

	if (activeTab) {
		filterSlides(activeTab.dataset.tab)
	}
}

export function initTabs({
	tabsSelector,
	slideSelector,
	activeClass = 'active',
	swiper,
}) {
	const tabs = document.querySelectorAll(tabsSelector)
	const slides = document.querySelectorAll(slideSelector)

	if (!tabs.length || !slides.length) return

	function filterSlides(category) {
		slides.forEach(slide => {
			const slideCategory = slide.dataset.category

			if (slideCategory === category) {
				slide.style.display = ''
			} else {
				slide.style.display = 'none'
			}
		})

		swiper.update()
		swiper.slideTo(0)
	}

	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			const category = tab.dataset.tab

			tabs.forEach(btn => {
				btn.classList.remove(activeClass)
			})

			tab.classList.add(activeClass)

			filterSlides(category)
		})
	})

	// initial active tab
	const activeTab = document.querySelector(`${tabsSelector}.${activeClass}`)

	if (activeTab) {
		filterSlides(activeTab.dataset.tab)
	}
}

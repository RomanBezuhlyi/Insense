export function initServicesAccordion({
	itemSelector = '.services__item',
	toggleSelector = '.services__item-icon',
	hiddenClass = 'hide',
} = {}) {
	const items = document.querySelectorAll(itemSelector)

	if (!items.length) return

	items.forEach(item => {
		const btn = item.querySelector(toggleSelector)
		if (!btn) return

		btn.addEventListener('click', () => {
			const isHidden = item.classList.contains(hiddenClass)

			if (isHidden) {
				item.classList.remove(hiddenClass)
			} else {
				item.classList.add(hiddenClass)
			}
		})
	})
}

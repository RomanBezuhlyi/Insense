export function initAccordion({
	rootSelector,
	itemSelector,
	triggerSelector,
	contentSelector,
	activeClass,
}) {
	if (
		!rootSelector ||
		!itemSelector ||
		!triggerSelector ||
		!contentSelector ||
		!activeClass
	) {
		console.warn('initAccordion: missing required options')
		return
	}

	const roots = document.querySelectorAll(rootSelector)
	if (!roots.length) return

	roots.forEach(root => {
		const items = root.querySelectorAll(itemSelector)
		if (!items.length) return

		root.addEventListener('click', event => {
			const trigger = event.target.closest(triggerSelector)
			if (!trigger || !root.contains(trigger)) return

			const currentItem = trigger.closest(itemSelector)
			if (!currentItem) return

			const currentContent = currentItem.querySelector(contentSelector)
			if (!currentContent) return

			const isOpen = currentItem.classList.contains(activeClass)

			items.forEach(item => {
				const content = item.querySelector(contentSelector)
				if (!content) return

				item.classList.remove(activeClass)
				content.style.maxHeight = null
			})

			if (!isOpen) {
				currentItem.classList.add(activeClass)
				currentContent.style.maxHeight = currentContent.scrollHeight + 'px'
			}
		})
	})
}

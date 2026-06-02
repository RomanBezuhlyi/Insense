export function initHeaderDropdown({
	itemSelector,
	triggerSelector,
	activeClass,
}) {
	if (!itemSelector || !triggerSelector || !activeClass) {
		console.warn('initHeaderDropdown: missing required options')
		return
	}

	const items = document.querySelectorAll(itemSelector)

	if (!items.length) return

	function closeAll() {
		items.forEach((item) => {
			item.classList.remove(activeClass)
		})
	}

	items.forEach((item) => {
		const trigger = item.querySelector(triggerSelector)

		if (!trigger) return

		trigger.addEventListener('click', (e) => {
			e.stopPropagation()

			const isOpen = item.classList.contains(activeClass)

			closeAll()

			if (!isOpen) {
				item.classList.add(activeClass)
			}
		})

		item.querySelectorAll('a, button').forEach((el) => {
			if (el === trigger) return

			el.addEventListener('click', () => {
				closeAll()
			})
		})
	})

	document.addEventListener('click', (e) => {
		if (!e.target.closest(itemSelector)) {
			closeAll()
		}
	})
}

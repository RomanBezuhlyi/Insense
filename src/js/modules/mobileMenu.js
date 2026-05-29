export function initMobileMenu({
	burgerSelector,
	menuSelector,
	activeClass,
	lockClass,
}) {
	if (!burgerSelector || !menuSelector || !activeClass || !lockClass) {
		console.warn('initMobileMenu: missing required options')
		return
	}

	const burger = document.querySelector(burgerSelector)
	const menu = document.querySelector(menuSelector)

	if (!burger || !menu) return

	burger.addEventListener('click', () => {
		const isOpen = menu.classList.toggle(activeClass)
		burger.classList.toggle(activeClass, isOpen)
		document.body.classList.toggle(lockClass, isOpen)
	})
}

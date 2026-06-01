export function initScrollAnimations() {
	window.addEventListener('load', () => {
		document.querySelector('.hero')?.classList.add('is-loaded')
	})
	const elements = document.querySelectorAll('[data-animate]')

	if (!elements.length) return

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible')
					observer.unobserve(entry.target) // тільки 1 раз
				}
			})
		},
		{
			threshold: 0.15, // коли 15% елемента видно
			rootMargin: '0px 0px -10% 0px',
		}
	)

	elements.forEach((el) => observer.observe(el))
}

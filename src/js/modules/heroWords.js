export function initHeroWords({
	containerSelector = '.hero__words',
	wordSelector = '.hero__word',
	interval = 2500,
	enterDelay = 500,
	leaveDelay = 1000,
} = {}) {
	const container = document.querySelector(containerSelector)
	const words = document.querySelectorAll(wordSelector)

	if (!container || !words.length) return

	let current = 0

	function setWidth(el) {
		container.style.width = `${Math.ceil(el.getBoundingClientRect().width)}px`
	}

	function activateWord(index) {
		words.forEach((w) => {
			w.classList.remove('is-active', 'is-leave')
		})

		words[index].classList.add('is-active')
		setWidth(words[index])
	}

	function next() {
		const currentWord = words[current]

		currentWord.classList.remove('is-active')
		currentWord.classList.add('is-leave')

		current = (current + 1) % words.length
		const nextWord = words[current]

		setTimeout(() => {
			setWidth(nextWord)

			nextWord.classList.remove('is-leave')

			void nextWord.offsetWidth

			nextWord.classList.add('is-active')
		}, enterDelay)

		setTimeout(() => {
			currentWord.classList.remove('is-leave')
		}, leaveDelay)
	}

	window.addEventListener('load', () => {
		activateWord(current)
	})

	const timer = setInterval(next, interval)

	return () => clearInterval(timer)
}

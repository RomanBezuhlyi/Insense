import IMask from 'imask'

export function initPhoneMask(selector) {
	document.querySelectorAll(selector).forEach(input => {
		if (input) {
			IMask(input, {
				mask: '+{380} (00) 000-00-00',
			})
		} else return
	})
}

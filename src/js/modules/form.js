export function initForms() {
	// =========================
	// PHONE INPUTS
	// =========================

	const phoneInputs = document.querySelectorAll('.phone-input')

	phoneInputs.forEach((input) => {
		window.intlTelInput(input, {
			initialCountry: 'auto',
			geoIpLookup(callback) {
				fetch('https://ipapi.co/json')
					.then((res) => res.json())
					.then((data) => callback(data.country_code))
					.catch(() => callback('us'))
			},
			utilsScript:
				'https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.0/build/js/utils.js',
		})
	})

	// =========================
	// FORMS
	// =========================

	const forms = document.querySelectorAll('.form')

	forms.forEach((form) => {
		const radios = form.querySelectorAll('input[name="contactMethod"]')
		const hiddenInput = form.querySelector('input[name="contactMethodHidden"]')

		const successBlock = form.querySelector('.form__success')

		// =========================
		// RADIO LOGIC
		// =========================

		const setValue = () => {
			if (!hiddenInput) return

			const selected = form.querySelector('input[name="contactMethod"]:checked')

			if (selected) {
				hiddenInput.value = selected.value
			}
		}

		const updateActiveRadio = () => {
			radios.forEach((radio) => {
				const label = radio.closest('.form__radio-btn')

				if (!label) return

				label.classList.toggle('active', radio.checked)
			})
		}

		if (hiddenInput && radios.length) {
			setValue()
			updateActiveRadio()

			radios.forEach((radio) => {
				radio.addEventListener('change', () => {
					setValue()
					updateActiveRadio()
				})
			})
		}

		// =========================
		// SUBMIT
		// =========================

		form.addEventListener('submit', (e) => {
			e.preventDefault()

			const data = {
				name: form.querySelector('#name')?.value || '',
				phone: form.querySelector('.phone-input')?.value || '',
				message: form.querySelector("textarea[name='message']")?.value || '',
				contactMethod: hiddenInput?.value || '',
			}

			console.log('FORM DATA:', data)

			if (successBlock) {
				successBlock.classList.add('active')

				setTimeout(() => {
					successBlock.classList.remove('active')
				}, 5000)
			}

			form.reset()

			if (hiddenInput && radios.length) {
				setValue()
				updateActiveRadio()
			}
		})
	})
}

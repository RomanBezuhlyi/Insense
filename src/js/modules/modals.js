export function initModals() {
	const body = document.body

	const closeModal = (modal) => {
		modal.classList.remove('active')

		if (!document.querySelector('[data-modal].active')) {
			body.classList.remove('lock')
		}
	}

	document.addEventListener('click', (e) => {
		const openBtn = e.target.closest('[data-modal-open]')

		if (openBtn) {
			const modal = document.querySelector(
				`[data-modal="${openBtn.dataset.modalOpen}"]`
			)

			if (!modal) return

			modal.classList.add('active')
			body.classList.add('lock')

			return
		}

		const closeBtn = e.target.closest('[data-modal-close]')

		if (closeBtn) {
			const modal = closeBtn.closest('[data-modal]')

			if (modal) {
				closeModal(modal)
			}

			return
		}

		// Клік по фону модалки
		const modal = e.target.closest('[data-modal]')
		if (modal && !e.target.closest('.modal__content, .popup__content')) {
			closeModal(modal)
		}
	})

	document.addEventListener('keydown', (e) => {
		if (e.key !== 'Escape') return

		document.querySelectorAll('[data-modal].active').forEach((modal) => {
			closeModal(modal)
		})
	})
}

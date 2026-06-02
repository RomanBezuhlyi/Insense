export function initReviewsVideoModal() {
	const triggers = document.querySelectorAll('.reviews__card-video')

	const modal = document.createElement('div')
	modal.className = 'video-modal'
	modal.innerHTML = `
    <div class="video-modal__overlay"></div>
    <div class="video-modal__content">
      <button class="video-modal__close" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M9.40034 9.40034L22.5997 22.5997M22.5997 9.40034L9.40034 22.5997" stroke="black" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="video-modal__frame"></div>
    </div>
  `
	document.body.appendChild(modal)

	const frameContainer = modal.querySelector('.video-modal__frame')
	const closeBtn = modal.querySelector('.video-modal__close')
	const overlay = modal.querySelector('.video-modal__overlay')

	function openModal(videoId) {
		frameContainer.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${videoId}?autoplay=1"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    `
		modal.classList.add('is-open')
		document.body.classList.add('lock')
	}

	function closeModal() {
		modal.classList.remove('is-open')
		document.body.classList.remove('lock')
		frameContainer.innerHTML = ''
	}

	triggers.forEach((el) => {
		el.addEventListener('click', () => {
			const id = el.dataset.youtube
			if (!id) return
			openModal(id)
		})
	})

	closeBtn.addEventListener('click', closeModal)
	overlay.addEventListener('click', closeModal)

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') closeModal()
	})
}

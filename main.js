import '@/styles/main.scss'

import { initSliders } from '@/js/modules/slider'
import { initAccordion } from '@/js/modules/accordion'
import { initMobileMenu } from '@/js/modules/mobileMenu'
import { initHeaderDropdown } from '@/js/modules/dropdown'
import { initTabs } from '@/js/modules/tabs'
import { initHeroWords } from '@/js/modules/heroWords'
import { initServicesAccordion } from '@/js/modules/servicesAccordion'
import { initReviewsVideoModal } from '@/js/modules/reviewsVideo'
import { initForms } from '@/js/modules/form'
import { initModals } from '@/js/modules/modals'

document.addEventListener('DOMContentLoaded', () => {
	initMobileMenu({
		burgerSelector: '.header__burger',
		menuSelector: '.header__nav',
		activeClass: 'is-open',
		lockClass: 'lock',
	})
	const { resultsSlider } = initSliders()
	initTabs({
		tabsSelector: '.results__tab',
		slideSelector: '.results__item',
		swiper: resultsSlider,
	})
	initHeroWords()
	initAccordion({
		rootSelector: '.faq',
		itemSelector: '.faq__item',
		triggerSelector: '.faq__item-btn',
		contentSelector: '.faq__item-body',
		activeClass: 'is-open',
	})
	initAccordion({
		rootSelector: '.process',
		itemSelector: '.process__item',
		triggerSelector: '.process__item-btn',
		contentSelector: '.process__item-text',
		activeClass: 'is-open',
	})
	initHeaderDropdown({
		itemSelector: '.header__lang',
		triggerSelector: '.header__lang-current',
		activeClass: 'is-open',
	})
	initServicesAccordion()
	initReviewsVideoModal()
	initForms()
	initModals()
})

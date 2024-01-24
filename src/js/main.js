// Animation SlideIn / SlideOut
/* SLIDE UP */
let slideUp = (target, duration = 300) => {
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = duration + 'ms'
	target.style.boxSizing = 'border-box'
	target.style.height = target.offsetHeight + 'px'
	target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.style.border = 'none'

	window.setTimeout(() => {
		target.style.display = 'none'
		target.style.removeProperty('height')
		target.style.removeProperty('padding-top')
		target.style.removeProperty('padding-bottom')
		target.style.removeProperty('margin-top')
		target.style.removeProperty('margin-bottom')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		target.style.removeProperty('border')
	}, duration)
}
/* SLIDE DOWN */
let slideDown = (target, duration = 300) => {
	target.style.removeProperty('display')
	let display = window.getComputedStyle(target).display
	if (display === 'none') display = 'grid'
	target.style.display = display
	let height = target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.offsetHeight
	target.style.boxSizing = 'border-box'
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = duration + 'ms'
	target.style.height = height + 'px'
	target.style.border = 'none'

	target.style.removeProperty('padding-top')
	target.style.removeProperty('padding-bottom')
	target.style.removeProperty('margin-top')
	target.style.removeProperty('margin-bottom')
	target.style.removeProperty('border')

	window.setTimeout(() => {
		target.style.removeProperty('height')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		target.style.removeProperty('border')
	}, duration)
}
/* TOOGLE */
const slideToggle = (target, duration = 300) => {
	if (window.getComputedStyle(target).display === 'none') {
		return slideDown(target, duration)
	} else {
		return slideUp(target, duration)
	}
}

const swiper = new Swiper('.swiper-partners', {
	loop: true,
	autoplay: {
		delay: 2000,
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		// when window width is >= 640px
		768: {
			slidesPerView: 5,
		},
	},
})

const swiperTestimonials = new Swiper('.swiper-testimonails', {
	// Optional parameters
	loop: true,
	spaceBetween: 40,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 3,
		},
	},
})

const swiperResults = new Swiper('.swiper-results', {
	// Optional parameters
	loop: true,
	spaceBetween: 2,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
	},
})

const swiperInfo = new Swiper('.swiper-info', {
	// Optional parameters
	loop: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
	slidesPerView: 1,
})

// Accodrion
function accordion() {
	const items = document.querySelectorAll('.accordion-item')
	const triggers = document.querySelectorAll('.accordion-trigger')
	const contents = document.querySelectorAll('.accordion-content')

	triggers.forEach((trigger, idx) => {
		if (items[0].classList.contains('active')) {
			slideDown(contents[0])
		}
		trigger.addEventListener('click', () => {
			const parent = trigger.parentNode

			if (!parent.classList.contains('active')) {
				// If you want only one to be open at a time, and others to close - UNCOMMENT the code below.
				// Если нужно что бы открывался ТОЛЬКО один, а остальные закрывались - РАСКОММЕНТИРУЙ код ниже

				// items.forEach((item, i) => {
				// 	if (i !== idx && item.classList.contains('active')) {
				// 		slideUp(contents[i])
				// 		item.classList.remove('active')
				// 	}
				// })

				// Open the current accordion item
				// Открыть текущий пункт аккордеона
				parent.classList.add('active')
				slideDown(contents[idx])
			} else {
				// Close the current accordion item
				// Закрыть текущий пункт аккордеона
				parent.classList.remove('active')
				slideUp(contents[idx])
			}
		})
	})
}

accordion()

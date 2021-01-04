document.addEventListener("DOMContentLoaded", () => {
	// MIDDLE WRAPPER
	let letter = document.querySelectorAll('.letter');
	anime({
		targets: letter,
		translateY: [-50, 0],
		delay: (el, i) => 300 + 70 * i,
		easing: 'easeOutExpo',
		opacity: [0, 1],
	})

	anime({
		targets: '.middle-wrapper h3',
		translateY: [20, 0],
		opacity: [0, 1],
		easing: 'easeOutExpo',
		delay: 1100,
	})

	anime({
		targets: '.middle-wrapper a',
		translateY: [-20, 0],
		opacity: [0, 1],
		easing: 'easeOutExpo',
		delay: 1100,
	})

	// NAV WRAPPER
	anime({
		targets: '.hamburger div',
		translateX: [-20, 0],
		opacity: [0, 1],
		easing: 'easeOutExpo',
		delay: (el, i) => 1000 + 100 * i,
	})

	anime({
		targets: '.nav-wrapper h1',
		translateY: [-20, 0],
		opacity: [0, 1],
		easing: 'easeOutExpo',
		delay: 1000,
	})

	anime({
		targets: '.info-wrapper span',
		translateX: [-20, 0],
		opacity: [0, 1],
		easing: 'easeOutExpo',
		delay: 1000,
	})

	anime({
		targets: '.circle',
		opacity: [0, 1],
		easing: 'linear',
		delay: 1000,
	})

	anime({
		targets: '.circle .one',
		height: ['0px', '8px'],
		easing: 'easeOutExpo',
		duration: 800,
		delay: 1500,
	})

	anime({
		targets: '.circle .two',
		height: ['0px', '6px'],
		easing: 'easeOutExpo',
		duration: 800,
		delay: 1600,
	})

	anime({
		targets: '.circle .three',
		height: ['0px', '15px'],
		easing: 'easeOutExpo',
		duration: 800,
		delay: 1700,
	})

	anime({
		targets: '.scroll-circle',
		translateY: [-100, 0],
		easing: 'easeOutExpo',
		delay: 1900,
		opacity: [0, 1],
	})
})

// Отключение стандартного скролла
document.body.style.overflow = 'hidden';

// Скролл страниц

let firstScreen = document.getElementById('first-screen');
let pagination = document.getElementById('pagination');
let next = document.getElementById('next');
let secondScreen = document.getElementById('second-screen');
let thirdScreen = document.getElementById('third-screen');
let startingPoint;
let sliderStartingPoint;
let handlePosition;
let sliderChange;
let sliderBgWidth;

window.onscroll = function() {
let offsetFirst = window.pageYOffset;
let offsetSecond = 1536 - window.pageYOffset;
firstScreen.querySelector('.main-screen__title').style.transform = 'translateY(-'+offsetFirst/3+'px)';
firstScreen.querySelector('.main-screen__text.text-1').style.transform = 'translateY(-'+offsetFirst/3+'px)';
firstScreen.querySelector('.main-screen__text.text-2').style.transform = 'translateY(-'+offsetFirst/3+'px)';
firstScreen.querySelector('.main-screen__text.text-3').style.transform = 'translateY(-'+offsetFirst/3+'px)';
firstScreen.querySelector('.main-screen__text.text-4').style.transform = 'translateY(-'+offsetFirst/3+'px)';
firstScreen.querySelector('.main-screen__ellipses').style.transform = 'translateY(-'+offsetFirst/3+'px)';

secondScreen.querySelector('.ice-1').style.transform = 'translateY('+offsetSecond/3+'px)';
secondScreen.querySelector('.ice-2').style.transform = 'translateY('+offsetSecond/3+'px)';
secondScreen.querySelector('.ice-3').style.transform = 'translateY('+offsetSecond/3+'px)';
secondScreen.querySelector('.ice-4').style.transform = 'translateY('+offsetSecond/3+'px)';
secondScreen.querySelector('.second-screen__title').style.transform = 'translateY('+offsetSecond/3+'px)';
}

function funcTouchStartFirst (event) {
	startingPoint = event.touches[0].clientY;
}
function funcTouchMoveFirst (event) {
	event.preventDefault();
}
function funcTouchEndFirst (event) {
	let touch = event.changedTouches[0];
	let change = startingPoint - touch.clientY;
	if(change > 200) {
		let scroller = setInterval(function() {
			let scrollBy = 1536 / 24;
			if(window.pageYOffset < 1536) {
			window.scrollBy(0, scrollBy);
			} else {
			clearInterval(scroller);
			}
			}, 15);
		next.style.display = 'none';
		pagination.querySelector('.pagination__indicator:nth-child(2)').classList.add('indicator-active');
		pagination.querySelector('.pagination__indicator:nth-child(1)').classList.remove('indicator-active');
	}
	event.preventDefault();
}

firstScreen.addEventListener('touchstart', funcTouchStartFirst);
firstScreen.addEventListener('touchmove', funcTouchMoveFirst);
firstScreen.addEventListener('touchend', funcTouchEndFirst);

function funcTouchStartSecond (event) {
	startingPoint = event.touches[0].clientY;
}
function funcTouchMoveSecond (event) {
	event.preventDefault();
}
function funcTouchEndSecond (event) {
	let touch = event.changedTouches[0];
	let change = startingPoint - touch.clientY;
	if(change > 200) {
		let scroller = setInterval(function() {
			let scrollBy = 1536 / 24;
			if(window.pageYOffset < 3072) {
			window.scrollBy(0, scrollBy);
			} else {
			clearInterval(scroller);
			}
			}, 15);
		pagination.querySelector('.pagination__indicator:nth-child(3)').classList.add('indicator-active');
		pagination.querySelector('.pagination__indicator:nth-child(2)').classList.remove('indicator-active');
	}
	if(change < -200) {
		let scroller = setInterval(function() {
			let scrollBy = 1536 / 24;
			if(window.pageYOffset > 0) {
			window.scrollBy(0, -scrollBy);
			} else {
			clearInterval(scroller);
			}
		}, 15);
		next.style.display = 'block';
		pagination.querySelector('.pagination__indicator:nth-child(1)').classList.add('indicator-active');
		pagination.querySelector('.pagination__indicator:nth-child(2)').classList.remove('indicator-active');
	}
	event.preventDefault();
}

secondScreen.addEventListener('touchstart', funcTouchStartSecond);
secondScreen.addEventListener('touchmove', funcTouchMoveSecond);
secondScreen.addEventListener('touchend', funcTouchEndSecond);

function funcTouchStartThird (event) {
	startingPoint = event.touches[0].clientY;
}
function funcTouchMoveThird (event) {
	event.preventDefault();
}
function funcTouchEndThird (event) {
	let touch = event.changedTouches[0];
	let change = startingPoint - touch.clientY;
	if(change < -200) {
		let scroller = setInterval(function() {
			let scrollBy = 1536 / 24;
			if(window.pageYOffset > 1536) {
			window.scrollBy(0, -scrollBy);
			} else {
			clearInterval(scroller);
			}
		}, 15);
		pagination.querySelector('.pagination__indicator:nth-child(2)').classList.add('indicator-active');
		pagination.querySelector('.pagination__indicator:nth-child(3)').classList.remove('indicator-active');
	}
	event.preventDefault();
}

thirdScreen.addEventListener('touchstart', funcTouchStartThird);
thirdScreen.addEventListener('touchmove', funcTouchMoveThird);
thirdScreen.addEventListener('touchend', funcTouchEndThird);


// Скролл табов в 3-ем окне
function sliderTouchStart (event) {
	sliderStartingPoint = event.touches[0].clientX;
	handlePosition = parseInt(window.getComputedStyle(this).left.slice(0, -2));	
	sliderBgWidth = parseInt(window.getComputedStyle(thirdScreen.querySelector('.toggle .toggle__bar')).width.slice(0, -2));
	this.style.transition = '';
	thirdScreen.querySelector('.toggle .toggle__bar').style.transition = '';

}

function sliderTouchMove (event) {
	sliderChange = event.touches[0].clientX - sliderStartingPoint;
	if(sliderChange + handlePosition > -50 && sliderChange + handlePosition < 1196){
		this.style.left = sliderChange + handlePosition + 'px';
		thirdScreen.querySelector('.tabs-wrapper').style.transition = 'all 0.3s';
		if(sliderChange + handlePosition < 280) {
			thirdScreen.querySelector('.tabs-wrapper').style.transform = 'translateX(0)';
		} else if(sliderChange + handlePosition > 280 && sliderChange + handlePosition < 887) {
			thirdScreen.querySelector('.tabs-wrapper').style.transform = 'translateX(-2048px)';
		} else {
			thirdScreen.querySelector('.tabs-wrapper').style.transform = 'translateX(-4096px)';
		}
		thirdScreen.querySelector('.toggle .toggle__bar').style.width = sliderBgWidth+sliderChange+'px';
	}
}

function sliderTouchEnd (event) {
	this.style.transition = 'all 0.3s';
	thirdScreen.querySelector('.toggle .toggle__bar').style.transition = 'all 0.3s';
	if(sliderChange + handlePosition < 280) {
		this.style.left = '-22px';
		thirdScreen.querySelector('.toggle .toggle__bar').style.width = 0;
	} else if(sliderChange + handlePosition > 280 && sliderChange + handlePosition < 887) {
		this.style.left = '587px';
		thirdScreen.querySelector('.toggle .toggle__bar').style.width = '600px';
	} else {
		this.style.left = '1196px';
		thirdScreen.querySelector('.toggle .toggle__bar').style.width = '1200px';
	}
}



console.log(thirdScreen.querySelector('.toggle .toggle__handle'));

thirdScreen.querySelector('.toggle .toggle__handle').addEventListener('touchstart', sliderTouchStart);
thirdScreen.querySelector('.toggle .toggle__handle').addEventListener('touchmove', sliderTouchMove);
thirdScreen.querySelector('.toggle .toggle__handle').addEventListener('touchend', sliderTouchEnd);
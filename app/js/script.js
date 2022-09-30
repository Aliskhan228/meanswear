new Swiper('.swiper-1', {
	navigation: {
		nextEl: '.swiper-1-button-next',
		prevEl: '.swiper-1-button-prev',
	},
	pagination: {
		el: '.swiper-1-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 4000,
	},
	speed: 1000,
	
});

new Swiper('.swiper-2', {
	pagination: {
		el: '.swiper-2-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 4000,
	},
	speed: 1000,
	
});

let humburger = document.querySelector(".humburger");
humburger.addEventListener('click', () => {
	let menu = document.querySelector(".topbar__burger-menu");
	menu.style.display = "block";
});

let close_btn = document.querySelector(".close_btn");
close_btn.addEventListener('click', () => {
	let menu = document.querySelector(".topbar__burger-menu");
	menu.style.display = "none";
});

let cart_icon = document.querySelector('.header-middle__cart');
let cart_amount = document.querySelector('.header-middle__amount-cart');
cart_icon.addEventListener('mouseover', () => {
	cart_amount.style.backgroundColor = "#fff";
	cart_amount.style.color = "#03CEA4";
	cart_icon.style.color = "#03CEA4";
});
cart_icon.addEventListener('mouseout', () => {
	cart_amount.style.backgroundColor = "#03CEA4";
	cart_amount.style.color = "#fff";
	cart_icon.style.color = "#424551";
});

let open_modal = document.querySelector('.topbar__register-signin');
let modal = document.querySelector('.popup');
let close_modal = document.querySelector('.popup__close-btn');
let body = document.querySelector('body');
let open_popup_signup = document.querySelector('.topbar__register-signup');
let popup_signup = document.querySelector('.popup-signup');
let close_popup_signup = document.querySelector('.popup-signup__close-btn');
let popup_signup_link = document.querySelector('.popup-signup__sign-up__link');
let popup_link = document.querySelector('.popup__sign-up__link'); 

open_modal.addEventListener('click', () => {
	modal.classList.add('is-active');
	modal.classList.remove('is-non-active');
	body.style.overflow = "hidden";
});
close_modal.addEventListener('click', () => {
	modal.classList.remove('is-active');
	modal.classList.add('is-non-active');
	body.style.overflow = "visible";
});

open_popup_signup.addEventListener('click', () => {
	popup_signup.classList.add('is-active');
	popup_signup.classList.remove('is-non-active');
	body.style.overflow = "hidden";
});
close_popup_signup.addEventListener('click', () => {
	popup_signup.classList.remove('is-active');
	popup_signup.classList.add('is-non-active');
	body.style.overflow = "visible";
});

popup_link.addEventListener('click', () => {
	modal.classList.remove('is-active');
	modal.classList.add('is-non-active');
	popup_signup.classList.add('is-active');
	popup_signup.classList.remove('is-non-active');
	body.style.overflow = "hidden";
});

popup_signup_link.addEventListener('click', () => {
	popup_signup.classList.remove('is-active');
	popup_signup.classList.add('is-non-active');
	modal.classList.add('is-active');
	modal.classList.remove('is-non-active');
	body.style.overflow = "hidden";
});
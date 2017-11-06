const submit = document.querySelector('.submit');
const x = parseInt(document.querySelector('.xx').innerText);
const y = parseInt(document.querySelector('.yy').innerText);
const success = document.querySelector('.success');
const content = document.querySelector('.content');
const close = document.querySelector('.close');
const form = document.querySelector('.form');
const robots = document.querySelector('.no-robots');
const gif = 'https://media.giphy.com/media/111ebonMs90YLu/giphy.gif';
const fail = 'https://media.giphy.com/media/TZFmvyDvr3WaQ/giphy.gif';

function addNumbers(e) {
	let userValue = parseInt(document.querySelector('#answer').value);
	
	if (x + y === userValue) {
		form.classList.add('hide');
		robots.innerHTML = '<img src="' + gif + '" />';
		success.classList.remove('hide');
		e.preventDefault();
	} else {
		form.classList.add('hide');
		robots.innerHTML = '<img src="' + fail + '" />';
	}
}

submit.addEventListener('click',addNumbers);
close.addEventListener('click', () => success.classList.add('hide'));
success.addEventListener('click', () => success.classList.add('hide'));
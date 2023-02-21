let arr = ['Задача 1', 'Задача 2', 'Задача 3'];
const ul = document.querySelector('ul');

const input = document.createElement('input');
input.type = 'text';
input.className = 'input-text'
input.placeholder = 'Добавьте задачу';
ul.insertAdjacentElement('afterend', input);

function addLi() {
	const input = document.querySelector('.input-text');
	input.addEventListener('blur', function() {
		if (input.value.length > 0) {
			const span = document.createElement('span');
			const li = document.createElement('li');
			span.textContent = input.value;
			input.value = '';
			li.appendChild(span);
			ul.appendChild(li);
			li.classList.add('color2');

			const link = document.createElement('a');
			link.href = 'https://ya.ru/';
			link.textContent = 'DEL';
			span.insertAdjacentElement('afterend', link);

			const linkReady = document.createElement('a');
			linkReady.href = 'https://mail.ru/';
			linkReady.textContent = 'Не сделано';
			link.insertAdjacentElement('afterend', linkReady);

			setTimeout(function() {
				li.classList.remove('color2');
			}, 200)

			delLi(link);
			crossLi(span, li, linkReady);
		}
	})
}

function fillArray(arr) {

	for (let elem of arr) {
		const li = document.createElement('li');
		const span = document.createElement('span');
		span.textContent = elem;
		console.log(span)
		li.appendChild(span);
		ul.appendChild(li);

		const link = document.createElement('a');
		link.href = 'https://ya.ru/';
		link.textContent = 'DEL';
		span.insertAdjacentElement('afterend', link);

		const linkReady = document.createElement('a');
		linkReady.href = 'https://mail.ru/';
		linkReady.textContent = 'Не сделано';
		link.insertAdjacentElement('afterend', linkReady);

		delLi(link);
		crossLi(span, li, linkReady);
		


	}
}

function changeText() {
	ul.addEventListener('click', function(e) {
		if(e.target.matches('span')) {

			const span = e.target;
			const input = document.createElement('input');
			input.type = 'text';

			input.value = span.textContent;
			span.textContent = ''
			
			span.appendChild(input);
			input.focus();

			input.addEventListener('blur', function() {
				span.textContent = input.value;
				const li = span.closest('li')
					li.classList.add('color4');
				setTimeout(function() {
					li.classList.remove('color4');
				}, 200)

			})
		}
	})
}

function delLi(link) {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		const parent = link.closest('li');
		parent.classList.add('color3');
		setTimeout(function() {
			parent.remove(); 
		}, 200)
	})
}

function crossLi(span, li, linkReady) {
	linkReady.addEventListener('click', function(e) {
		e.preventDefault();
		li.classList.toggle('color5');
		if (linkReady.textContent === 'Не сделано') {
			linkReady.textContent = 'Cделано';
		} else {
			linkReady.textContent = 'Не сделано';
		}
		span.classList.toggle('cross-text');
	}) 	

}

addLi();
changeText();
fillArray(arr);



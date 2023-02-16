const arr = ['item 1', 'item 2', 'item 3'];

const ul = document.querySelector('ul');
let link;

ul.addEventListener('click', function (e) {
	
	if (e.target.matches('span')) {
		const input = document.createElement('input');
		input.type = 'text';
		input.value = e.target.textContent;
		e.target.textContent = '';

		input.addEventListener('blur', function() {

			const parentLi = e.target.closest('li');
			parentLi.classList.add('color4');
			setTimeout(function() {
				parentLi.classList.remove('color4');
				parentLi.classList.remove('color1');
				e.target.textContent = input.value;
			}, 200)

		})
		e.target.appendChild(input);
		input.focus();
	}
})

for (let i = 0; i < arr.length; i++) {
	const li = document.createElement('li');
	const span = document.createElement('span')
	link = document.createElement('a');
	link.href = 'https://ya.ru/';
	link.textContent = 'del';
	span.innerHTML = arr[i];
	li.append(span, link)
	ul.appendChild(li);

	delLi();

}

const addLi = document.createElement('input');
addLi.type = 'text';
addLi.style.marginTop = '15px';
ul.insertAdjacentElement('afterend', addLi);

addLi.addEventListener('blur', function() {
	if (addLi.value === '') {
		return;
	}
	
	const li = document.createElement('li');
	const span = document.createElement('span')
	link = document.createElement('a');
	link.href = 'https://ya.ru/';
	link.textContent = 'del';
	span.innerHTML = addLi.value;

	li.append(span, link)
	ul.appendChild(li);
	addLi.value = '';

	li.classList.add('color2');

	setTimeout(function() {
		li.classList.remove('color2');
		li.classList.add('color1');
	}, 200)

	delLi();	

})

function delLi() {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		const parentLi = this.closest('li');
		parentLi.classList.add('color3');
		setTimeout(function() {
			parentLi.remove();
		}, 200);

	})
}
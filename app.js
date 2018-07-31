const form = document.getElementById('my-form');
const submit = document.querySelector('.submit');
const ul = document.getElementById('list');

// Make Buttons and Append List Items

form.addEventListener('submit', e => {
	e.preventDefault();
	const inputText = document.querySelector('.textInput');
	const li = document.createElement('li');
	li.className = 'listItem';
	const remove = document.createElement('button');
	remove.className = 'remove';
	remove.textContent = 'Remove';
	li.textContent = inputText.value;
	li.appendChild(remove);
	ul.appendChild(li);
	inputText.value = '';
});

// Remove List Items

ul.addEventListener('click', e => {
	if (e.target.className == 'remove') {
		const li = e.target.parentNode;
		ul.removeChild(li);
	}
});
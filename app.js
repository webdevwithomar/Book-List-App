const form = document.getElementById('my-form');
const submit = document.querySelector('.submit');
const ul = document.getElementById('list');

// Make Buttons and Append List Items

form.addEventListener('submit', e => {
	
	// Prevent Default Form Behavior
	e.preventDefault();
	
	// Capture the input
	const inputText = document.querySelector('.textInput');

	// Create Elements
	const li = document.createElement('li');
	const span = document.createElement('span');
	const div = document.createElement('div');
	const edit = document.createElement('button');
	const remove = document.createElement('button');

	// Give Elements Class Names
	li.className = 'listItem';
	div.className = 'buttons'
	edit.className = 'edit';
	remove.className = 'remove';

	// Text Contents of New Elements
	edit.textContent = 'Edit';
	remove.textContent = 'Remove';
	span.textContent = inputText.value;

	// Append Elements
	div.appendChild(edit);
	div.appendChild(remove);
	li.appendChild(span);
	li.appendChild(div);
	ul.appendChild(li);

	// Clear the text of the input
	inputText.value = '';
});

// Remove List Items

ul.addEventListener('click', e => {
	// If remove button is clicked
	if (e.target.className == 'remove') {
		const li = e.target.parentNode.parentNode;
		ul.removeChild(li);
	} 
	// If Edit Button is clicked
	else if (e.target.className == 'edit') {
		const li = e.target.parentNode.parentNode;
		const span = li.children[0];
		const input = document.createElement('input');
		const button = e.target;
		button.textContent = 'Save';
		button.removeClass = 'edit';
		button.className = 'save';
		input.type = 'text';
		input.className = 'edit-mode';
		input.value = span.innerText;
		li.insertBefore(input, span);
		li.removeChild(span);
	} 
	// If Edit Button is clicked
	else if (e.target.className == 'save') {
		const li = e.target.parentNode.parentNode;
		const span = document.createElement('span');
		const input = li.children[0];
		const button = e.target;
		button.textContent = 'Edit';
		button.removeClass = 'save';
		button.className = 'edit';
		span.innerText = input.value;
		li.insertBefore(span, input);
		li.removeChild(input);
	}
});
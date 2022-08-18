let toDoInput = document.getElementById('newToDo');
let btnAddToDo = document.getElementById('AddToDo');
let toDoList = document.getElementById('toDoList');

let url = 'http://localhost:3000/posts';

const removeItem = (listItem) => (e) => {
	console.log(listItem, e);
	listItem.remove();	

	fetch(`${url}/${listItem.dataset.id}`, {
		method: "DELETE",
		headers: {
				"Content-Type": "application/json"
		}
	});
}


const renderListItem = (data) => {
	let listItem = document.createElement('li');
	listItem.dataset.id = data.id;

	listItem.innerHTML = `
			<input type="checkbox" class="DoneCheckbox" />
			<span class="TodoText">${data.title}</span>
			<button>Remove</button>
	`;

	let checkBox = listItem.querySelector('input');
	let removeBtn = listItem.querySelector('button');

	checkBox.addEventListener('input', () => {
		listItem.querySelector('.TodoText').classList.toggle('done');
	});

	removeBtn.addEventListener('click', removeItem(listItem));

	toDoList.appendChild(listItem);
}

btnAddToDo.addEventListener('click', function() {
	let data = {title: toDoInput.value, id: new Date().getTime()};

	let jsonData = JSON.stringify(data);

	fetch(url, {
			method: "POST",
			body: jsonData,
			headers: {
					"Content-Type": "application/json"
			}
		});

	renderListItem(data);
});


fetch(url)
	.then(res => res.json())
	.then(res => {
		res.forEach(item => {
			renderListItem(item);
		})
	});
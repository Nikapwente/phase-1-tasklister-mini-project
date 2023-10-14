document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form');
  form.addEventListener('submit', appendList)


  
});


function appendList(event) {
  
  event.preventDefault();
  let listItem = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x';
  let list = document.getElementById('tasks');

  listItem.textContent = `${event.target["new-task-description"]["value"]} `;
  list.append(listItem);
  listItem.appendChild(btn);
}

function handleDelete(event) {
  event.target.parentNode.remove()
}
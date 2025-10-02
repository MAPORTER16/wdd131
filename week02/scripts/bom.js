const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); // you need to fill in the blank to reference the HTML element that is a unordered list element.
const li = document.createElement('li') //The variable indentifier/name did not have to be named the same as the element being created.
const deleteButton = document.creatElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);

button.addEventListener('click'), function () {
    if (input.value.trim() !== '') { '' }
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('ul'); // you need to fill in the blank to reference the HTML element that is a unordered list element.
    const li = document.createElement('li') //The variable indentifier/name did not have to be named the same as the element being created.
    const deleteButton = document.creatElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);

}

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.quereySelector('#list');
//const list = document.querySelector('ul'); // you need to fill in the blank to reference the HTML element that is a unordered list element.
const li = document.createElement('li') //The variable indentifier/name did not have to be named the same as the element being created.
const deleteButton = document.creatElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);
let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
})

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});


function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
chaptersArray = chaptersArray.filter((item) => item !== chapter);


function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus(); // set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}


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


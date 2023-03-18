let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

const bookButton= document.getElementById("addBook");
const formBox= document.getElementById("formBox");

function addBook(){
    formBox.style.display='block';
}

bookButton.addEventListener('click', addBook);
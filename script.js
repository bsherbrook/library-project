const bookButton= document.getElementById("addBook");
const formBox= document.getElementById("formBox");
const submitButt= document.getElementById("submitButt");
const bookInfo= document.getElementsByClassName('bookInfo');
const form= document.querySelector('form');
const title= document.getElementById('title');
const author= document.getElementById('author');
const pageNum= document.getElementById('pageNum');
const readStatus= document.getElementById('readStatus');
const bookShelf= document.getElementById('bookShelf');
let myLibrary = [];

class Book {
  constructor(
    title = 'Unknown',
    author = 'Unknown',
    pageNum = '0',
    readStatus = false
  ) {
    this.title = title
    this.author = author
    this.pages = pageNum
    this.readStatus = readStatus
  }
}

function newBook(e){
  e.preventDefault();  //write conditional to validate form before array push
  if(title.value && author.value && pageNum.value){
  myLibrary.push(new Book(title.value, author.value, pageNum.value, readStatus.checked))  
  let lastBook= myLibrary[(myLibrary.length)-1];
  bookShelf.innerHTML += `I have read ${lastBook.title} by ${lastBook.author}<br>`;
  formBox.style.display= 'none';}
}

function addBookToLibrary() {
  // do stuff here
}

function addBook(){
  if(formBox.style.display==='block'){return};
    title.value='';
    author.value='';
    pageNum.value='';
    readStatus.checked=false;
    formBox.style.display='block';
}

submitButt.addEventListener('click', newBook)
bookButton.addEventListener('click', addBook);
const bookButton = document.getElementById("addBook");
const formBox = document.getElementById("formBox");
const submitButt = document.getElementById("submitButt");
const bookInfo = document.getElementsByClassName("bookInfo");
const form = document.querySelector("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pageNum = document.getElementById("pageNum");
const readStatus = document.getElementById("readStatus");
const bookTable = document.getElementById("bookTable");
let myLibrary = [];

class Book {
  constructor(
    title = "Unknown",
    author = "Unknown",
    pageNum = "0",
    readStatus = false
  ) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.readStatus = readStatus;
  }
}

function submitBook(event) {
  event.preventDefault();
  if (title.value && author.value && pageNum.value) {
    myLibrary.push(
      new Book(title.value, author.value, pageNum.value, readStatus.checked)
    );
    let lastBook = myLibrary[myLibrary.length - 1];
    if (lastBook.readStatus === false) {
      lastBook.readStatus = "Unread";
    }
    if (lastBook.readStatus === true) {
      lastBook.readStatus = "Read";
    }
    bookTable.innerHTML += `<tr><td>${lastBook.title}</td><td>${lastBook.author}</td><td>${lastBook.pageNum}</td><td>${lastBook.readStatus}</td></tr>`;
    formBox.style.display = "none";
  }
}

function addBookToLibrary() {
  // do stuff here
}

function addBook() {
  if (formBox.style.display === "block") {
    return;
  }
  title.value = "";
  author.value = "";
  pageNum.value = "";
  readStatus.checked = false;
  formBox.style.display = "block";
}

submitButt.addEventListener("click", submitBook);
bookButton.addEventListener("click", addBook);

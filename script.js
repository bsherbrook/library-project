const bookButton = document.getElementById("addBook");
const formBox = document.getElementById("formBox");
const submitButt = document.getElementById("submitButt");
const form = document.querySelector("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pageNum = document.getElementById("pageNum");
const readStatus = document.getElementById("readStatus");
const bookTable = document.getElementById("bookTable");
const deleteButton = document.querySelectorAll("deleteBook");

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
    libraryLoop();
    formBox.style.display = "none";
  }
}
function libraryLoop() {
  bookTable.innerHTML =
    "<tr><th>Title</th><th>Author</th><th>Pages</th><th>Read/Unread</th></tr>";
  for (let i = 0; i < myLibrary.length; i++) {
    const bookRow = document.createElement("tr");
    bookRow.classList.add("bookInfo");
    bookTable.appendChild(bookRow);
    //title
    const bookTitle = document.createElement("td");
    bookTitle.textContent = myLibrary[i].title;
    bookRow.appendChild(bookTitle);
    //author
    const bookAuthor = document.createElement("td");
    bookAuthor.textContent = myLibrary[i].author;
    bookRow.appendChild(bookAuthor);
    //pages
    const bookPages = document.createElement("td");
    bookPages.textContent = myLibrary[i].pageNum;
    bookRow.appendChild(bookPages);
    //readStatus
    const bookRead = document.createElement("td");
    bookRead.textContent = myLibrary[i].readStatus;
    bookRow.appendChild(bookRead);
    //button
    const rmvButton = document.createElement("button");
    rmvButton.setAttribute("class", `deleteBook`);
    rmvButton.setAttribute("id", `${i}`);
    rmvButton.textContent = "remove";
    bookRow.appendChild(rmvButton);
  }
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

document.addEventListener("click", (event) => {
  if (event.target.classList.value === "deleteBook") {
    const libraryIndex= event.target.id;
    myLibrary.splice(libraryIndex,1);
    libraryLoop();
  }
});

submitButt.addEventListener("click", submitBook);
bookButton.addEventListener("click", addBook);

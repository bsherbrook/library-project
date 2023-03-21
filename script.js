const bookButton = document.getElementById("addBook");
const formBox = document.getElementById("formBox");
const submitButt = document.getElementById("submitButt");
const form = document.querySelector("form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pageNum = document.getElementById("pageNum");
const readStatus = document.getElementById("readStatus");
const bookTable = document.getElementById("bookTable");
const deleteModal = document.getElementById("deleteModal");
const deleteConfirm = document.getElementById("confirmDelete");

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
    const bookReadButton = document.createElement("button");
    bookReadButton.textContent = myLibrary[i].readStatus;
    bookReadButton.setAttribute("id", `ReadButton${i}`);
    bookReadButton.addEventListener("click", (event) => {
      let x = event.target.id.slice(-1);
      let readstat = myLibrary[x].readStatus;
      if (readstat === "Read") {
        myLibrary[x].readStatus = "Unread";
        libraryLoop();
      } else {
        myLibrary[x].readStatus = "Read";
        libraryLoop();
      }
    });
    bookRead.appendChild(bookReadButton);
    bookRow.appendChild(bookRead);
    //delete button
    const rmvButton = document.createElement("button");
    rmvButton.setAttribute("class", `deleteBook`);
    rmvButton.setAttribute("id", `${i}`);
    rmvButton.textContent = "remove";
    bookRow.appendChild(rmvButton);
    buttons = document.querySelectorAll(".deleteBook");
    buttons.forEach((button) => {
      if (button.classList.contains("once")) {
        return;
      }
      button.classList.add("once");
      button.addEventListener("click", function handleClick(event) {
        const libraryIndex = event.target.id;
        myLibrary.splice(Number(libraryIndex), 1);
        libraryLoop();
      });
    });
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

let buttons;
// document.addEventListener("click", (event) => {
//   if (event.target.classList.value === "deleteBook") {
// const libraryIndex = event.target.id;
// myLibrary.splice(libraryIndex, 1);
//   libraryLoop();
//   console.log(myLibrary.splice(libraryIndex, 1));
// deleteModal.style.display = "block";
// deleteConfirm.addEventListener("click", confirmDelete);
// const cancelDelete = document.getElementById("cancelDelete");
// cancelDelete.addEventListener("click", (cancel) => {
//   deleteModal.style.display = "none";
//   return;
// });
// function confirmDelete() {
//   myLibrary.splice(libraryIndex, 1);
//   libraryLoop();
//   deleteModal.style.display = "none";
//}
//  }
//});
submitButt.addEventListener("click", submitBook);
bookButton.addEventListener("click", addBook);

/** @format */

const bookList = document.querySelector(".booklist");
const form = document.querySelector("#form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const addBtn = document.querySelector("#addBtn");
let userBooks = [];

// getItems
window.addEventListener("load", () => {
	const books = JSON.parse(localStorage.getItem("userBooks"));
	title.value = books.bookTitle;
	author.value = books.bookAuthor;
});

// setItems
function addBook() {
	if (title.value === "" && author.value === "") {
		alert("Please fill up all fields");
	} else {
		userBooks.push({
			id: Math.floor(Math.random() * 1000),
			bookTitle: title.value,
			bookAuthor: author.value,
		});
		localStorage.setItem("userBooks", JSON.stringify(userBooks));
	}
}

// Displaying
function showList() {
	const books = JSON.parse(localStorage.getItem("userBooks"));
	let content = "";
	books.forEach((book) => {
		content += `
    <div>
          <p class="title">${book.bookTitle}</p>
          <p class="author">${book.bookAuthor}</p><br>
          <button type="submit" class="removeBtn" id="${book.id}">Remove</button>
          <br>
    </div>
    `;
	});

	bookList.innerHTML = content;
}

// remove
document.addEventListener("click", (e) => {
	if (e.target.classList.contains("removeBtn")) {
		userBooks = userBooks.filter((book) => {
			return book.id.toString() !== e.target.id;
		});

		localStorage.setItem("userBooks", JSON.stringify(userBooks));
	}
	document.querySelectorAll(".removeBtn").forEach((deleteBtn) => {
		deleteBtn.addEventListener("click", () => {
			console.log("test");
		});
	});
});

// Add
addBtn.addEventListener("click", (e) => {
	e.preventDefault();

	addBook();
	showList();
	title.value = "";
	author.value = "";
});

// document.addEventListener('DOMContentLoaded', () =>{
//   showList();
// })

const form = document.querySelector('.books-form');
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const bookNameInput = document.getElementById('book-name');
const booksContainer = document.querySelector('.books-container');
const booksList = document.querySelector('.books-list');
const clearBtn = document.querySelector('.clear-btn');
const alert = document.querySelector('.alert');

form.addEventListener('submit', addBook);
clearBtn.addEventListener('click', clearBooks);

function addBook(e) {
  e.preventDefault();
  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const bookName = bookNameInput.value.trim();

  if (fullName && email && bookName) {
    const bookItem = document.createElement('article');
    bookItem.classList.add('books-item');
    bookItem.innerHTML = `
      <p class="title">${fullName} - ${email} - ${bookName}</p>
      <div class="btn-container">
        <button type="button" class="edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;
    const editBtn = bookItem.querySelector('.edit-btn');
    const deleteBtn = bookItem.querySelector('.delete-btn');
    editBtn.addEventListener('click', () => editBook(bookItem, fullName, email, bookName));
    deleteBtn.addEventListener('click', () => deleteBook(bookItem));
    booksList.appendChild(bookItem);
    showContainer();
    displayAlert('Book added to the list');
    clearInputs();
  } else {
    displayAlert('Please enter all details');
  }
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  alert.style.display = 'block';
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
    alert.style.display = 'none';
  }, 3000);
}

function showContainer() {
  booksContainer.style.display = 'block';
  clearBtn.style.display = 'block';
}

function clearInputs() {
  fullNameInput.value = '';
  emailInput.value = '';
  bookNameInput.value = '';
}

function clearBooks() {
  const books = document.querySelectorAll('.books-item');
  if (books.length > 0) {
    books.forEach((book) => {
      booksList.removeChild(book);
    });
  }
  booksContainer.style.display = 'none';
  clearBtn.style.display = 'none';
  displayAlert('All books cleared', 'success');
}

function deleteBook(bookItem) {
  booksList.removeChild(bookItem);
  if (booksList.children.length === 0) {
    booksContainer.style.display = 'none';
    clearBtn.style.display = 'none';
  }
  displayAlert('Book removed', 'danger');
}

function editBook(bookItem, fullName, email, bookName) {
  fullNameInput.value = fullName;
  emailInput.value = email;
  bookNameInput.value = bookName;
  booksList.removeChild(bookItem);
  if (booksList.children.length === 0) {
    booksContainer.style.display = 'none';
    clearBtn.style.display = 'none';
  }
  displayAlert('Edit the book details', 'info');
}

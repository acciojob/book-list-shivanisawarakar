// Array to store the details of issued books
let issuedBooks = [];

// Function to issue a book
function issueBook() {
  const bookName = document.getElementById('bookName').value;
  const issuedTo = document.getElementById('issuedTo').value;

  // Create a new object with book details
  const issuedBook = {
    id: issuedBooks.length + 1,
    bookName,
    issuedTo,
    issuedTime: new Date(),
    status: "not returned"
  };

  // Add the book to the array
  issuedBooks.push(issuedBook);

  // Clear the form inputs
  document.getElementById('bookName').value = '';
  document.getElementById('issuedTo').value = '';

  // Update the table
  updateTable();
}

// Function to update the table
function updateTable() {
  const table = document.getElementById('issuedBooks');

  // Clear the table
  table.innerHTML = '';

  // Add the table headers
  const row = table.insertRow();
  row.innerHTML = '<th>ID</th><th>Book Name</th><th>Issued To</th><th>Issued Time</th><th>Status</th>';

  // Add the table rows
  issuedBooks.forEach(book => {
    const row = table.insertRow();
    row.innerHTML = `<td>${book.id}</td><td>${book.bookName}</td><td>${book.issuedTo}</td><td>${book.issuedTime.toLocaleString()}</td><td contenteditable="true" style="color:${book.status === 'returned' ? 'green' : 'red'}">${book.status}</td>`;
    row.addEventListener('input', function() {
      book.status = this.cells[4].textContent.trim();
      this.cells[4].style.color = book.status === 'returned' ? 'green' : 'red';
    });
  });
}

// Initialize the table
updateTable();
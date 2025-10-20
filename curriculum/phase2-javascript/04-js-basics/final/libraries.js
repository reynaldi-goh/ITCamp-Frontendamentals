let library = [];
for (let i = 0; i < 9; i++) {
    let currentRow = []; // make a new shelf
    for (let j = 0; j < 26; j++) {
        // for each row, we put 26 books
        let book = createBook(i + 1, j + 1);
        currentRow.push(book);
    }
    library[i] = currentRow; // put the shelf into the library
}
console.log(library);

function createBook(row, column){
    let book = {
        title: "Title " + (row) + "-" + (column),
        row: row,
        column: column
    };
    return book;
}
console.log(createBook(3, 2));

function searchBook(row, column){
    let wantedBook;
    wantedBook = library[row - 1][column - 1];
    return wantedBook.title;
}

console.log(searchBook(4, 3));
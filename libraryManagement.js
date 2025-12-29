class Library {

    constructor () {
        this.books = [];
    }
    

    addBook(book) {
     this.books.push(book);
    }
    
    getLibrarySize() {
        return this.books.length;
    }
    
    isPresent(book) {
        return this.books.includes(book);
    }

    remove(book) {
        let index = this.books.findIndex((b) => b === book);
        if(index >=0){
            this.books.splice(index,1);
        }
    }

    display() {
        console.log("books present : ",this.books);
    }
}

let radhaLibrary = new Library();
radhaLibrary.addBook("chava");
radhaLibrary.addBook("CPP");
radhaLibrary.addBook("Kruchna");
radhaLibrary.addBook("HTML");
radhaLibrary.addBook("JS");

radhaLibrary.display();
radhaLibrary.remove("HTML");
radhaLibrary.display();

radhaLibrary.authors = ["shivaji sawant", "chetan bhagat"];
radhaLibrary.displayAuthors = () => {
    console.log("authors", radhaLibrary.authors);
}

radhaLibrary.displayAuthors();

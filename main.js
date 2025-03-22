 const dialog = document.querySelector("#theDialog");
 const cancelbtn = document.querySelector("#formcancel");
 const createbtn = document.querySelector("#formcreate");
 const opendialogbtn = document.querySelector("#createbook");
 const form = document.querySelector("#dialogform");

 const myLibrary = [];
 const state = {
    CREATE: "Create",
    UPDATE: "Update"
 }

 let currentstate = state.CREATE;
 

 function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID;
    this.object = document.createElement("div");

    this.onDelete = function(){
        this.object.remove();
        myLibrary = myLibrary.filter((book) => book.id !== this.id);
    }
    this.toggleRead = function(){
        read = !read;
    }
   // the constructor...
 }
 
 function addBookToLibrary() {
   // take params, create a book then store it in the array
 }



 opendialogbtn.addEventListener("click", (e) => dialog.showModal());
 cancelbtn.addEventListener("click", (e) => dialog.close());

 createbtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);

    const bookauthor = formData.get("author");
    const booktitle = formData.get("title");
    const bookpages = formData.get("pages");
    const bookread = formData.get("read") === "on";
    console.log(bookread);
 })
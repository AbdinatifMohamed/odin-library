 const dialog = document.querySelector("#theDialog");
 const cancelbtn = document.querySelector("#formcancel");
 const createbtn = document.querySelector("#formcreate");
 const opendialogbtn = document.querySelector("#createbook");
 const form = document.querySelector("#dialogform");
 const shelfone = document.querySelector(".shelfone");
 const shelftwo = document.querySelector(".shelftwo");
 const shelfthree = document.querySelector(".shelfthree");
 const formauthor = document.querySelector("#author");
 const formtitle = document.querySelector("#title");
 const formpages = document.querySelector("#pages");
 const formread = document.querySelector("#read");

 const myLibrary = [];
 const state = {
    CREATE: "Create",
    UPDATE: "Update"
 }

 let currentstate = state.CREATE;
 let currentbook;

 function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.object = document.createElement("div");
    this.deletebutton = document.createElement("button");
    this.deletebutton.textContent = "X";
    this.object.appendChild(this.deletebutton);


    this.onDelete = function(){
        this.object.remove();
        myLibrary = myLibrary.filter((book) => book.id !== this.id);
    }

    this.object.addEventListener("click", (e) => {
         formauthor.value = this.author;
         formtitle.value = this.title;
         formpages.value = this.pages;
         formread.checked = this.read;
         
         createbtn.textContent = "Update";

         currentstate = state.UPDATE;
         currentbook = this;
         dialog.showModal()
    });

    this.deletebutton.addEventListener("click", (e) => {
      e.stopPropagation();
      this.onDelete();
    })

   // the constructor...
 }
 
 function addBookToLibrary(author, title, pages, read) {
   const newBook = new Book(author, title, pages, read);
   
   if (shelfone.childElementCount < 9) {
      shelfone.appendChild(newBook.object);
   } else if(shelftwo.childElementCount < 9) {
      shelftwo.appendChild(newBook.object);
   } else if(shelfthree.childElementCount < 9) {
      shelfthree.appendChild(newBook.object);
   } else {
      return;
   }
   

   myLibrary.push(newBook);
   // take params, create a book then store it in the array

 }


 function updateBook(author, title, pages, read){
   if (currentstate == state.UPDATE && currentbook !== undefined){
      currentbook.author = author;
      currentbook.title = title;
      currentbook.pages = pages;
      currentbook.read = read;
      currentbook = undefined;
   }
 }

 opendialogbtn.addEventListener("click", (e) => {
      currentstate = state.CREATE
      formauthor.value = "";
      formtitle.value = "";
      formpages.value = "";
      formread.checked = false;
      
      createbtn.value = "Create";
      dialog.showModal()
 });
 cancelbtn.addEventListener("click", (e) =>{ 
   e.preventDefault(); 
   currentstate = state.CREATE; 
   currentbook = undefined;
   dialog.close(); 
});

 form.addEventListener("submit", (e) => {
   e.preventDefault();
   const formData = new FormData(form);  
   const bookauthor = formData.get("author");
   const booktitle = formData.get("title");
   const bookpages = formData.get("pages");
   const bookread = formData.get("read");
    if (currentstate == state.CREATE){
      addBookToLibrary(bookauthor, booktitle, bookpages, bookread);
    } else if (currentstate == state.UPDATE){
      updateBook(bookauthor, booktitle, bookpages, bookread);
    }
    dialog.close();
 })
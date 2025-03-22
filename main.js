 const dialog = document.querySelector("#theDialog");
 const cancelbtn = document.querySelector("#formcancel");
 const createbtn = document.querySelector("#formcreate");
 const opendialogbtn = document.querySelector("#createbook");

 const myLibrary = [];
 const state = {
    CREATE: "Create",
    UPDATE: "Update"
 }

 let currentstate = state.CREATE;
 

 function Book() {
   // the constructor...
 }
 
 function addBookToLibrary() {
   // take params, create a book then store it in the array
 }



 opendialogbtn.addEventListener("click", (e) => dialog.showModal());
 cancelbtn.addEventListener("click", (e) => dialog.close());
const state = {
  bookCount: 0,
};

//function to add books
const addBook = (event) => {
  console.log("in addBook:", event);
  const newBook = document.createElement("span");
  const bookContainer = document.querySelector("#bookContainer");
  newBook.textContent = "📖";
  bookContainer.appendChild(newBook);

  //Book Count Behavior
  state.bookCount += 1;
  const bookCountContainer = document.querySelector("#bookCount");
  bookCountContainer.textContent = `Book Count: ${state.bookCount}`;
};

//registering event handler
const registerEventHandlers = (event) => {
  console.log("in registerEventHandelers:", event);
  const bookButton = document.querySelector("#addBookButton");
  bookButton.addEventListener("click", addBook);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

//this is my first javascript file in a webpage!

console.log("Hello, World!");

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

console.log(getRandomNumber(10));
console.log(getRandomNumber(100));

const getCurrentTime = () => {
  const currentDate = new Date();
  return (
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds()
  );
};

console.log(`The Current Time is ${getCurrentTime()}.`);

const bookListElement = document.getElementById("bookList");
//now you can change something about booklist if you want to. this doesn't do anything at the moment.

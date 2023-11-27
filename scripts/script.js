const header_paragraph_1 = document.getElementById("header_paragraph_1");
const header_paragraph_2 = document.getElementById("header_paragraph_2");
const header_paragraph_3 = document.getElementById("header_paragraph_3");
const header_paragraph_4 = document.getElementById("header_paragraph_4");
const arrow_left = document.getElementById("arrow_left");
const arrow_right = document.getElementById("arrow_right");

let counter = 1;

const arrowLeft = () => {
  if (counter == 1) {
    counter = 4;
  } else {
    counter--;
  }
  console.log("arrowLeft");
  console.log(counter);
};

const arrowRight = () => {
  if (counter == 4) {
    counter = 1;
  } else {
    counter++;
  }
  console.log("arrowRight");
  console.log(counter);
};
arrow_left.addEventListener("click", () => arrowLeft());
arrow_right.addEventListener("click", () => arrowRight());

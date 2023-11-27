const header_paragraph_1 = document.getElementById("header_paragraph_1");
const header_paragraph_2 = document.getElementById("header_paragraph_2");
const header_paragraph_3 = document.getElementById("header_paragraph_3");
const header_paragraph_4 = document.getElementById("header_paragraph_4");
const arrow_left = document.getElementById("arrow_left");
const arrow_right = document.getElementById("arrow_right");

const arrowLeft = () => {
  console.log("arrowLeft");
};

const arrowRight = () => {
  console.log("arrowRight");
};
arrow_left.addEventListener("click", () => arrowLeft());
arrow_right.addEventListener("click", () => arrowRight());

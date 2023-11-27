const arrow_left = document.getElementById("arrow_left");
const arrow_right = document.getElementById("arrow_right");

let counter = 1;

const showParagraph = (paragraph_number) => {
  for (let i = 1; i <= 4; i++) {
    document
      .getElementById(`header_paragraph_${i}`)
      .classList.add("display-none");
  }
  document
    .getElementById(`header_paragraph_${paragraph_number}`)
    .classList.remove("display-none");
  document
    .getElementById(`header_paragraph_${paragraph_number}`)
    .classList.add("flex");
};

const arrowLeft = () => {
  if (counter == 1) {
    counter = 4;
  } else {
    counter--;
  }
  showParagraph(counter);
};

const arrowRight = () => {
  if (counter == 4) {
    counter = 1;
  } else {
    counter++;
  }
  showParagraph(counter);
};

const handleScreenWidth = () => {
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (screenWidth <= 360) {
    showParagraph(1);
  } else {
    for (let i = 1; i <= 4; i++) {
      document
        .getElementById(`header_paragraph_${i}`)
        .classList.remove("display-none");
      document.getElementById(`header_paragraph_${i}`).classList.add("flex");
    }
  }
};

handleScreenWidth();

window.addEventListener("resize", handleScreenWidth);
arrow_left.addEventListener("click", () => arrowLeft());
arrow_right.addEventListener("click", () => arrowRight());

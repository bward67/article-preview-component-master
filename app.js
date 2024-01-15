const shareContainer = document.querySelector(".share-container");
console.log(shareContainer);
const triangleBox = document.querySelector(".triangle-box");
console.log(triangleBox);
const triangle = document.querySelector(".triangle");
const arrow = document.querySelector(".arrow");
console.log(arrow);

arrow.addEventListener("click", () => {
  shareContainer.classList.toggle("hide");
  triangleBox.classList.toggle("hide");
  /*triangle.classList.toggle("hide");*/
});

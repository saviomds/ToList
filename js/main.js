// main.js

document.addEventListener("DOMContentLoaded", function () {
  const addListBtn = document.getElementById("addList");
  const addListText = document.getElementById("addListText");

  addListBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const ul = document.querySelector(".items");
    ul.style.backgroundColor = "#323232af";

    if (addListText.value.trim() !== "") {
      // Check if input value is not empty
      const li = document.createElement("li");
      const i = document.createElement("i");
      let count;
      li.textContent = addListText.value;

      ul.appendChild(li); // Append the new <li> element to the <ul>

      addListText.value = ""; // Clear the input field
    }
  });
});

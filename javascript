// Change text content dynamically when button clicked
const changeTextBtn = document.getElementById("change-text-btn");
const description = document.getElementById("description");

changeTextBtn.addEventListener("click", () => {
  description.textContent = "The text has been changed dynamically!";
  description.style.color = "teal"; // Modify CSS styles
  description.style.fontWeight = "bold";
});

// Add or remove a colored box dynamically
const toggleBoxBtn = document.getElementById("toggle-box-btn");
let boxExists = false;

toggleBoxBtn.addEventListener("click", () => {
  if (!boxExists) {
    const box = document.createElement("div");
    box.id = "color-box";
    box.style.width = "150px";
    box.style.height = "150px";
    box.style.backgroundColor = "coral";
    box.style.marginTop = "20px";
    document.body.appendChild(box);
    boxExists = true;
  } else {
    const box = document.getElementById("color-box");
    if (box) {
      box.remove();
      boxExists = false;
    }
  }
});

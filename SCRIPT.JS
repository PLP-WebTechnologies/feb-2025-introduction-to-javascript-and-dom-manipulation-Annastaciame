// Change text content dynamically
const changeTextBtn = document.getElementById('changeTextBtn');
const dynamicText = document.getElementById('dynamicText');

changeTextBtn.addEventListener('click', () => {
  dynamicText.textContent = "Text has been changed dynamically!";
});

// Modify CSS styles dynamically
const changeColorBtn = document.getElementById('changeColorBtn');
const colorText = document.getElementById('colorText');

changeColorBtn.addEventListener('click', () => {
  // Random color generator
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  colorText.style.color = randomColor;
});

// Add and remove elements dynamically
const addItemBtn = document.getElementById('addItemBtn');
const removeItemBtn = document.getElementById('removeItemBtn');
const itemList = document.getElementById('itemList');

addItemBtn.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = `Item ${itemList.children.length + 1}`;
  itemList.appendChild(newItem);
});

removeItemBtn.addEventListener('click', () => {
  if (itemList.children.length > 0) {
    itemList.removeChild(itemList.lastElementChild);
  }
});

// Implement form validation and respond to submission
const sampleForm = document.getElementById('sampleForm');
const formMessage = document.getElementById('formMessage');

sampleForm.addEventListener('submit', (event) => {
  event.preventDefault();  // Prevent form submission to server

  const name = sampleForm.name.value.trim();
  const email = sampleForm.email.value.trim();

  if (name === "" || email === "") {
    formMessage.textContent = "Please fill in all required fields.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = `Thank you, ${name}! Your form was submitted successfully.`;
    formMessage.style.color = "green";
    sampleForm.reset();
  }
});

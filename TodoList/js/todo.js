const addButton = document.getElementById("add_button");
let li;

// doneButton.forEach(button => {
//   button.addEventListener("click",() => {
//     li = button.closest('li');
//     li.classList.toggle('done');
//   })
// });

addButton.addEventListener("click", () => {
  const input = document.getElementById('new_todo');
  const newLi = document.createElement('li');
  newLi.innerText = input.value;

  const doneButton = document.createElement('button');
  doneButton.innerText = "done";
  newLi.appendChild(doneButton);

  

  const ul = document.querySelector('ul');
  ul.appendChild(newLi);

  
});


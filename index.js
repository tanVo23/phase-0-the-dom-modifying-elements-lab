// Write your code here!
document.body.appendChild(element); 

const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul); 
var Names;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


Names = [];


document.getElementById('add_name').addEventListener('click', (event) => {
  let element_text = document.getElementById('text');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('text').value);
  Names.push(getNumberOrString(document.getElementById('text').value));

  element_text.appendChild(new_li);

});

document.getElementById('button_name').addEventListener('click', (event) => {
  let element_name = document.getElementById('name');
  let new_li2 = document.createElement('li');
  new_li2.innerText = randomMember(Names);

  element_name.appendChild(new_li2);

});
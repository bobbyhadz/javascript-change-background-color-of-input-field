console.log('bobbyhadz.com');

const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  const input = document.getElementById('first_name');

  input.style.backgroundColor = 'green';

  // 👇️ optionally change the text color
  // input.style.color = 'white';
});

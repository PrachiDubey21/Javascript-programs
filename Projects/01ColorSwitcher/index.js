const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

//NodeList
buttons.forEach(function (button) {
  //events
  button.addEventListener('click', function (e) {

    if (e.target.id === 'pink') {
      body.style.backgroundColor = '#FBCFE8';
    }

    if (e.target.id === 'purple') {
      body.style.backgroundColor = '#E9D5FF';
    }

    if (e.target.id === 'beige') {
      body.style.backgroundColor = '#F5F5DC';
    }

    if (e.target.id === 'yellow') {
      body.style.backgroundColor = '#FEF9C3';
    }

    if (e.target.id === 'blue') {
      body.style.backgroundColor = '#BFDBFE';
    }

    if (e.target.id === 'green') {
      body.style.backgroundColor = '#BBF7D0';
    }

    if (e.target.id === 'brown') {
      body.style.backgroundColor = '#D2B48C';
    }

  });
});
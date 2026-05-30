const form = document.querySelector('form');
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {

  e.preventDefault();

  //to fetch input value  (.value)
  //it will be in string so -> parseInt
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {

    results.innerHTML =
      '<p class="text-red-500 font-semibold">Please enter a valid height.</p>';
  } 
  else if (isNaN(weight) || weight <= 0) {

    results.innerHTML =
      '<p class="text-red-500 font-semibold">Please enter a valid weight.</p>';
  } 
  else {
    
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let category = '';
    let color = '';

    if (bmi < 18.6) {
      category = 'Underweight';
      color = 'text-yellow-500';
    } else if (bmi <= 24.9) {
      category = 'Normal';
      color = 'text-green-500';
    } else {
      category = 'Overweight';
      color = 'text-red-500';
    }

    results.innerHTML = `
      <div class="bg-gray-100 p-4 rounded-xl mt-4">
        <p class="text-3xl font-bold">${bmi}</p>
        <p class="text-lg font-semibold ${color}">
          ${category}
        </p>
      </div>
    `;
  }
});
function changeText() {

    let fpara = document.getElementById("fpara");
  fpara.textContent = "prachi";

}

let fpara = document.getElementById("fpara");

//adds action
fpara.addEventListener('click' , changeText); 

//removes action(now nothing will happen)
fpara.removeEventListener('click' , changeText);





 let div = document.querySelector('#mydiv');

// mydiv
// <div id=​"mydiv">​…​</div>​

let newelement = document.createElement('span');
// undefined

// newelement
// <span>​</span>​

 newelement.textContent = "this is me";
// 'this is me'

// newelement
// <span>​this is me​</span>​

// mydiv.insertAdjacentHTML('beforebegin' , newelement);
// undefined

mydiv.insertAdjacentElement('beforebegin' , newelement);
// <span>​this is me​</span>​


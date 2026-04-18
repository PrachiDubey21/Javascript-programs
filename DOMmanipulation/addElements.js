
//for creation
//createElement

//to add elements we use
//appendchild()

// let fHeading = document.createElement('h1'); 
// undefined

// fHeading
// <h1>​</h1>​

// fHeading.textContent = "my name is prachi";
// 'my name is prachi'

// fHeading
// <h1>​my name is prachi​</h1>​

// let bodyTag = document.querySelector('body');
// undefined

// bodyTag.appendChild(fHeading);
// adds this element at the last

//to decide the position on where to add the child
//insertAdjacentElement
// -> position (before begin , after begin , before end , before end)
// -> what to put

// let div = document.querySelector('#mydiv');
// undefined

// mydiv
// <div id=​"mydiv">​…​</div>​

// let newelement = document.createElement('span');
// undefined

// newelement
// <span>​</span>​

// newelement.textContent = "this is me";
// 'this is me'

// newelement
// <span>​this is me​</span>​

// mydiv.insertAdjacentHTML('beforebegin' , newelement);
// undefined

// mydiv.insertAdjacentElement('beforebegin' , newelement);
// <span>​this is me​</span>​


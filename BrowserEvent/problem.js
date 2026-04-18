
//AVOIDING TOO MANY LISTENER

// let paras = document.querySelectorAll('p');

function alertpara(event){
    //only for span tag
    if(event.target.nodeName === 'SPAN'){
        alert("you have clicked on para " + event.target.textContent);
    }
    }

// for(let i=0;i<paras.length;i++){

//     let para = paras[i];
//     para.addEventListener('click' , alertpara)

// }

let mydiv = document.getElementById('wrapper');
document.addEventListener('click' , alertpara);

//FIND OUT
//how to use the event DOMContentLoaded dynamically script add krne ke liye
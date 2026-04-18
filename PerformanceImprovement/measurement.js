//how to find out which code is good and faster

//what are the good practices we should do to make our code more efficient

//lets say we need to showcase 100 paras on UI 
//we can add it in two types

//there is a standard way in js to find out
//how much time the program is taking to run
//performance.now() -> returns a timestan
//we can take 1 timestan before the code and 1 after the code
// t2-t1 will give the overall time the code took

// code 1

const t1 = performance.now();

for(let i =1 ;i<=100 ; i++){

    let para =document.createElement('p');
    para.textContent = "this is para " + i;
    document.body.appendChild(para);

}

const t2 = performance.now();

console.log("total time code 1 took : " + (t2-t1));

//code 2

const t3 = performance.now();

let mydiv = document.createElement('div');


for(let i =1 ;i<=100 ; i++){

    let para =document.createElement('p');
    para.textContent = "this is para " + i;
    mydiv.appendChild(para);

}

document.body.appendChild(mydiv);

const t4 = performance.now();

console.log("total time code 2 took : " + (t4-t3));

//this is because
// 1-> reflow
// 2-> repaint

//When you change anything in the DOM
// (like size, position, layout, color, content), 
// the browser has to update the webpage.
// This update process mainly involves two steps: Reflow and Repaint.

//REFLOW
// Reflow means the browser recalculates the 
// layout of part of the webpage or the entire webpage.

//calculates the position / dimensions of a particular element
//that we would like to render on our page

//computationaly intensive task

//takes more time and resources to do task
//related with calculation

// What triggers reflow?
// Reflow happens when you change something 
// that affects the structure or size of elements, such as:

// Adding or removing elements from DOM
// Changing element size (width, height)
// Changing font size
// Changing margin, padding, border
// Changing position (top, left, display, position properties)
// Window resize

// Why reflow is heavy?
// Because the browser must:
// Recalculate positions of elements
// Recalculate size of elements
// Adjust child elements
// Possibly re-layout entire page
// Reflow is expensive and slow, so it should be minimized.




// REPAINT
// Repaint happens when the element’s 
// appearance changes but its layout does not change.

//it is the process of displaying the content pixel by pixel

//faster than reflow
//relates with painting

// What triggers repaint?
// Things like:
// Changing color (background, text color)
// Changing visibility
// Changing outline
// Changing box-shadow

// Repaint is lighter than reflow because only 
// the pixels need to be updated, not the layout.

//NOW WE WANT TO WRITE A CODE THAT TAKES LESS REFLOW AND LESS REPAINT

//for our code 1
// document append -> renders each time(reflow and repaint each time)
// 100 reflow , 100 repaint

//for code 2
// div append -> inserts text (nothing related to docment)
//(so nothing related to webpage render / UI)
//(so nothing to repaint)
// only at the end there is reflow and repaint when appending to document
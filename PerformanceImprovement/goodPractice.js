
// Document Fragement

// A Document Fragment is a lightweight, invisible
//  container used to build a group of DOM nodes in memory
//  without adding them directly to the real webpage.

// It acts like a temporary mini-DOM where you can
//  create, modify, and arrange elements without causing
//  reflow or repaint in the actual page.


//time
const t1 = performance.now();

// Create a document fragment
let fragment = document.createDocumentFragment();

// Add elements inside fragment
for (let i = 1; i <= 100; i++) {
    let p = document.createElement("p");
    p.textContent = "Paragraph " + i;
    fragment.appendChild(p);
}

// Add fragment to DOM (only one reflow)
document.body.appendChild(fragment);

//takes 1 reflow and 1 repaint

const t2 = performance.now();

console.log("this code took : " + (t2-t1) + " time to run ");


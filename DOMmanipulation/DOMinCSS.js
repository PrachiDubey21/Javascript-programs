//.style property
//we can get/set

//through this we can only change one thing at a time
// let paraelement = document.getElementById('spara');
// undefined

// paraelement;
// <p id=​"spara" style=​"background-color:​ palevioletred;​ padding:​ 1rem">
// ​ second para ​</p>​

// console.log(paraelement.style);
// VM289:1 CSSStyleDeclaration {0: 'background-color',
// 1: 'padding-top', 2: 'padding-right', 3: 'padding-bottom',
//  4: 'padding-left', accentColor: '', additiveSymbols: '',
// alignContent: '', alignItems: '', alignSelf: '', …}
// undefined

// paraelement.style.backgroundColor = "beige";
// 'beige'


//-------------------------------------------------------------

//FOR MULTIPLE CHANGES
// .csstext -> get/set

// let secondelement = document.getElementById('sdiv');
// undefined

// sdiv;
// <div id=​"sdiv" style=​"background-color:
// ​ navajowhite;​ padding:​ 1.2rem">​…​</div>​

// console.log(sdiv.style);
// VM716:1 CSSStyleDeclaration {0:
// 'background-color', 1: 'padding-top', 2:
//  'padding-right', 3: 'padding-bottom', 4: '
// padding-left', accentColor: '', additiveSymbols: '',
// alignContent: '', alignItems: '', alignSelf: '', …}
// undefined

// secondelement.style.cssText;
// 'background-color: navajowhite; padding: 1.2rem;'

// secondelement.style.cssText = "background-color: beige;
//  color: plum; padding: 0.7rem ";
// 'background-color: beige; color: plum; padding: 0.7rem '



//-------------------------------------------------------------


// FOR ADDING ID , CLASSES
//.setAttribute()

//it overwrite the previous attributes fully if present
// let felement = document.querySelector('#fdiv');
// undefined

// felement;
// <div id=​"fdiv" style=​"background-color:​
// blanchedalmond;​ padding:​ 2rem" class=​"divclass">​…
// ​</div>​" first div "<p id=​"fpara" style=​"background-color:​
// plum;​ padding:​ 1rem">​ first para ​</p>​<div id=​"sdiv" style=​"
// background-color:​ navajowhite;​ padding:​ 1.2rem">​…​</div>​</div>​

// felement.setAttribute('class' , 'divclass');
// undefined

// felement;
// <div id=​"fdiv" style=​"background-color:​
// blanchedalmond;​ padding:​ 2rem" class=​"divclass">​"
// first div "<p id=​"fpara" style=​"background-color:​ plum;​
// padding:​ 1rem">​ first para ​</p>​<div id=​"sdiv" style=​"background-color:​
// navajowhite;​ padding:​ 1.2rem">​…​</div>​</div>​

// felement.setAttribute('class' , 'seconddivclass');
// undefined

// felement;
// <div id=​"fdiv" style=​"background-color:​ blanchedalmond;​
// padding:​ 2rem" class=​"seconddivclass">​…​</div>​

// felement.setAttribute('style' , 'padding: 0.5rem');
// undefined


//---------------------------------------------------------------



//FOR CLASSNAME
//.className -> for getting and inserting multiple classes

//select fpara
// let fpara = $0;
// undefined

// fpara;
// <p id=​"fpara" style=​"background-color:
// ​ plum;​ padding:​ 1rem" class=​"prachi aditi">​
// first para ​</p>​

// fpara.className;
// 'prachi aditi'

// fpara.className = "adi picha";
// 'adi picha'

// fpara.className;
// 'adi picha'


//-------------------------------------------------------



//FOR GETTING MULTIPLE CLASSES
//GET IN FORMAT OF ARRAY / LIST
//ADD / REMOVE / TOOGLE CLASSES / CONTAINS(CHECKING)
//.classList

// let fpara = document.querySelector('#fpara');
// undefined

// fpara;
// <p id=​"fpara" style=​"background-color:​
// plum;​ padding:​ 1rem" class=​"prachi aditi">​ first para ​
// </p>​

// fpara.classList;
// DOMTokenList(2) ['prachi', 'aditi', value: 'prachi aditi']
// 0: "prachi"1: "aditi"length:
// 2value: "prachi aditi"[[Prototype]]: DOMTokenListadd: ƒ add()contains: ƒ contains()entries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)remove: ƒ remove()replace: ƒ replace()supports: ƒ supports()toString: ƒ toString()toggle: ƒ toggle()value: (...)values: ƒ values()constructor: ƒ DOMTokenList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "DOMTokenList"get length: ƒ length()get value: ƒ value()set value: ƒ value()[[Prototype]]: Object

// fpara.classList.add('pratibha');
// undefined

// fpara.classList;
// DOMTokenList(3) ['prachi', 'aditi', 'pratibha', value: 'prachi aditi pratibha']
// 0: "prachi"1: "aditi"2: "pratibha"length: 3value: "prachi aditi pratibha"
// [[Prototype]]: DOMTokenList

// fpara.classList.remove('prachi');
// undefined

// fpara.classList;
// DOMTokenList(2) ['aditi', 'pratibha', value: 'aditi pratibha']
// 0: "aditi"1: "pratibha"length: 2value: "aditi pratibha"[[Prototype]]:
// DOMTokenList

// fpara.classList.toggle('aditi');
// false

// fpara.classList;
// DOMTokenList ['pratibha', value: 'pratibha']
// 0: "pratibha"length: 1value: "pratibha"[[Prototype]]: DOMTokenList

// fpara.classList.toggle('aditi');
// true

// fpara.classList;
// DOMTokenList(2) ['pratibha', 'aditi', value: 'pratibha aditi']
// 0: "pratibha"1: "aditi"length: 2value: "pratibha aditi"[[Prototype]]:
//  DOMTokenListadd: ƒ add()contains: ƒ contains()entries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)remove: ƒ remove()replace: ƒ replace()supports: ƒ supports()toString: ƒ toString()toggle: ƒ toggle()value: (...)values: ƒ values()constructor: ƒ DOMTokenList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "DOMTokenList"get length: ƒ length()get value: ƒ value()set value: ƒ value()[[Prototype]]: Object

// fpara.classList.contains('aditi');
// true

// fpara.classList.contains('prachi');
// false

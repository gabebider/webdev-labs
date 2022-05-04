let currH = 2;
let currB = 1.4;
const makeBigger = () => {
   // alert('make bigger!');
   currH += .3;
   currB += .3;
   document.querySelector("h1").style.fontSize = `${currH}em`;
   document.querySelector(".content").style.fontSize = `${currB}em`;
};

const makeSmaller = () => {
   currH -= .3;
   currB -= .3;
   document.querySelector("h1").style.fontSize = `${currH}em`;
   document.querySelector(".content").style.fontSize = `${currB}em`;
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);


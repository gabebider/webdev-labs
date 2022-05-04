/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defaultButton = () => {
   // alert('default');
   // update the class to the default class
   document.body.className = 'default';
}

const desertButton = () => {
   // alert('desert');
   // update the class to the desert class
   document.body.className = 'desert';
}

const oceanButton = () => {
   // alert('ocean');
   // update the class to the ocean class
   document.body.className = 'ocean';
}

const highContrastButton = () => {
   // alert('high contrast');
   // update the class to the high contrast class
   document.body.className = 'high-contrast';
}

document.querySelector("#default").addEventListener('click', defaultButton);
document.querySelector("#desert").addEventListener('click', desertButton);
document.querySelector("#ocean").addEventListener('click', oceanButton);
document.querySelector("#high-contrast").addEventListener('click', highContrastButton);
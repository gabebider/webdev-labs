/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const dyslexiaToggle = () => {
  // alert('dys')
  // update class to the dyslexia class
  document.body.classList.toggle('dyslexia-mode');
}

document.querySelector("#dyslexia-toggle").addEventListener('click', dyslexiaToggle);
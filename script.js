// Select the button element
const button = document.querySelector('.click');

// Add event listener to button click
button.addEventListener('click', () => {
  // Hide all elements in the body by setting their display to 'none'
  document.querySelectorAll('body > *').forEach(el => el.style.display = 'none');
});

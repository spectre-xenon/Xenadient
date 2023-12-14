const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const gradientType = document.getElementById('gradient-type');
const direction = document.getElementById('direction');
const gradientBox = document.querySelector('.gradient-box');


function setGradient() {
  console.log('gradientType.value ', gradientType.value);
  if (gradientType.value === 'linear') {
    gradientBox.style.background = `linear-gradient(to${direction.value}, ${color1.value}, ${color2.value})`;
  } else if (gradientType.value === 'radial') {
    gradientBox.style.background = `radial-gradient(${color1.value}, ${color2.value})`;
  }
}


gradientType.addEventListener('change', setGradient);
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
direction.addEventListener('change', setGradient);

// Initial gradient setting
setGradient();

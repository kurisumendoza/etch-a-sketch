const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
  const content = document.createElement('div');
  content.setAttribute('class', `content`);
  content.setAttribute('style', 'flex-basis: 6.25%');
  container.appendChild(content);
}

drawing();

function drawing() {
  const sketchpad = document.querySelectorAll('.content').forEach(item => {
    item.addEventListener('mouseover', () => item.classList.add('sketch'))
  })
}

const newSketchpad = document.querySelector('.new-sketchpad');

newSketchpad.addEventListener('click', () => pixelAmount())

function pixelAmount() {
  let pixel;
  
  do {
    pixel = prompt('Enter amount of squares per side?', 'Min: 10; Max: 100');
  } while (pixel > 100 || pixel < 10 || pixel === NaN)

  if (pixel <= 100 && pixel > 0) {
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }

    for (let i = 0; i < pixel * pixel; i++) {
      const content = document.createElement('div');
      content.setAttribute('class', `content`);
      content.setAttribute('style', `flex-basis: ${100/pixel}%`);
      container.appendChild(content);
    }
  }

  drawing();
}
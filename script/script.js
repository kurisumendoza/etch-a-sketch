const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
  const content = document.createElement('div');
  content.setAttribute('class', `content`);
  content.setAttribute('style', 'flex-basis: 6.25%');
  container.appendChild(content);
}

drawing();

function drawing() {
  const sketchpad = document.querySelectorAll('.content');
  
  sketchpad.forEach(item => {
    item.addEventListener('mouseover', () => {
      if (item.classList.contains('sketch-ten')) {
        return;
      } else if (item.classList.contains('sketch-nine')) {
        item.classList.remove('sketch-nine');
        item.classList.add('sketch-ten');
      } else if (item.classList.contains('sketch-eight')) {
        item.classList.remove('sketch-eight');
        item.classList.add('sketch-nine');
      } else if (item.classList.contains('sketch-seven')) {
        item.classList.remove('sketch-seven');
        item.classList.add('sketch-eight');
      } else if (item.classList.contains('sketch-six')) {
        item.classList.remove('sketch-six');
        item.classList.add('sketch-seven');
      } else if (item.classList.contains('sketch-five')) {
        item.classList.remove('sketch-five');
        item.classList.add('sketch-six');
      } else if (item.classList.contains('sketch-four')) {
        item.classList.remove('sketch-four');
        item.classList.add('sketch-five');
      } else if (item.classList.contains('sketch-three')) {
        item.classList.remove('sketch-three');
        item.classList.add('sketch-four');
      } else if (item.classList.contains('sketch-two')) {
        item.classList.remove('sketch-two');
        item.classList.add('sketch-three');
      } else if (item.classList.contains('sketch')) {
        item.classList.remove('sketch');
        item.classList.add('sketch-two');
      } else {
        item.classList.add('sketch');
      }
    }
    )
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
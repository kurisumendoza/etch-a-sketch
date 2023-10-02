let container = document.querySelector('.container');

for (let i = 1; i < 257; i++) {
  const content = document.createElement('div');
  content.setAttribute('class', `content`);
  container.appendChild(content);
}


const sketchpad = document.querySelectorAll('.content').forEach(item => {
  item.addEventListener('mouseover', () => item.classList.add('sketch'))
})

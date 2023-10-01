let container = document.querySelector('.container');

for (let i = 1; i < 257; i++) {
  const content = document.createElement('div');
  content.setAttribute('class', `content no-${i}`);
  container.appendChild(content);
}
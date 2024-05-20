import {
  showPreviousImage,
  showNextImage,
  goToImage,
  fillCircle,
} from './carousel-functions';

function createContainer() {
  const container = document.createElement('div');
  container.classList.add('image-carousel');
  container.appendChild(document.createElement('div'));
  container.appendChild(document.createElement('div'));
  return container;
}

function createNavBtns(container, max) {
  const backBtn = document.createElement('button');
  backBtn.classList.add('back-button');
  backBtn.onclick = () => {
    showPreviousImage();
    fillCircle();
  };
  backBtn.textContent = 'p';
  container.appendChild(backBtn);

  const forwardBtn = document.createElement('button');
  forwardBtn.classList.add('forward-button');
  forwardBtn.onclick = () => {
    showNextImage((max - 1) * 600);
    fillCircle();
  };
  forwardBtn.textContent = 'n';
  container.appendChild(forwardBtn);
}

function createCircleNav(index) {
  const button = document.createElement('button');
  button.onclick = () => {
    goToImage(index);
    fillCircle();
  };

  return button;
}

function createImage(color, index) {
  const img = document.createElement('div');
  img.style.backgroundColor = color;
  img.classList.add('imgs');
  img.setAttribute('data-img-position', index);

  return img;
}

export default function createImageCarousel(colors) {
  const container = createContainer();
  const buttonContainer = container.querySelector('div:nth-child(2)');
  const imgContainer = container.querySelector('div:first-child');
  imgContainer.style.left = '0';
  createNavBtns(container, colors.length);
  colors.forEach((color, index) => {
    imgContainer.appendChild(createImage(color, index));
    buttonContainer.appendChild(createCircleNav(index));
  });
  return container;
}

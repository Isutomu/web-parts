export function showPreviousImage() {
  const containerWidth = document.querySelector(
    '.image-carousel div:first-child'
  );
  let offset = containerWidth.offsetLeft + 600;
  offset = offset > 0 ? 0 : offset;
  containerWidth.style.left = `${offset}px`;
}

export function showNextImage(max) {
  const containerWidth = document.querySelector(
    '.image-carousel div:first-child'
  );
  let offset = containerWidth.offsetLeft - 600;
  offset = offset < -max ? -max : offset;
  containerWidth.style.left = `${offset}px`;
}

export function goToImage(index) {
  const containerWidth = document.querySelector(
    '.image-carousel div:first-child'
  );
  containerWidth.style.left = `-${index * 600}px`;
}

export function fillCircle() {
  const activeCircle = Math.abs(
    document.querySelector('.image-carousel div:first-child').offsetLeft / 600
  );
  const navCircles = document.querySelectorAll(
    '.image-carousel div:nth-child(2) button'
  );

  [...navCircles].forEach((circle) => {
    circle.style.backgroundColor = 'white';
  });
  [...navCircles][activeCircle].style.backgroundColor = 'purple';
}

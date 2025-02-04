
document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.group');


  const images = document.querySelectorAll('.polaroid');

  images.forEach((image, index) => {
    setTimeout(() => {
      image.style.transform = 'rotate(0deg)';
      image.style.opacity = '1';
    }, 200 * index);
  });
});

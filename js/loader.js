function hideloader() {
    setTimeout(() => {
      const loader = document.querySelector('.loader');
      const backgroundLoader = document.querySelector('.background-loader');
      const container = document.querySelector('.all');

      loader.style.opacity = 0;
      backgroundLoader.style.opacity = 0;

      setTimeout(() => {
        loader.style.display = 'none';
        backgroundLoader.style.display = 'none';
        container.style.display = 'block';

        setTimeout(() => {
          container.style.opacity = 1;
        }, 50);
      }, 100);
    }, 3000);
  }
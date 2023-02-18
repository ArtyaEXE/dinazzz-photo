const swiper = new Swiper(".swiper", {
    spaceBetween: 20,
    slidesPerView: 2,
    preloadImages: false,
    lazy: true,
    centeredSlides: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 34,
      },
    },
    onlyExternal: true,
    allowTouchMove:false,
    loop: true,
  });

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  let options = {
    threshold: [0.2] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.works-container');
  for (let elm of elements) {
    observer.observe(elm);
  }
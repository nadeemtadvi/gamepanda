// Swiper slider start
const swiper = new Swiper(".swiper2", {
  // loop: true,
  speed:700,
  // autoplay: false,
  slidesPerView: 1,
  spaceBetween: 16,
  keyboard:true,
  mousewheel: {
forceToAxis:true
  },
 
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    890: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    468: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
  },
});

// Swiper slider end

// Dropdown Menu start

const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownBackdrop = document.getElementById('dropdown-backdrop');

function toggleDropdown() {
  const isHidden = dropdownMenu.classList.contains('hidden');
  dropdownMenu.classList.toggle('hidden', !isHidden);
  dropdownBackdrop.classList.toggle('hidden', !isHidden);

  dropdownToggle.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
}

function closeDropdown() {
  dropdownMenu.classList.add('hidden');
  dropdownBackdrop.classList.add('hidden');
  dropdownToggle.setAttribute('aria-expanded', 'false');
}

dropdownToggle.addEventListener('click', (event) => {
  event.stopPropagation(); 
  toggleDropdown();
});

dropdownBackdrop.addEventListener('click', closeDropdown);

document.addEventListener('click', (event) => {
  if (!dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)) {
    closeDropdown();
  }
});

// Dropdown Menu end


// Swipper with animation start

$(document).ready(function() {
  $(".slider-main_component").each(function (index) {
    const swiper = new Swiper($(this).find(".swiper")[0], {
      slidesPerView: 1,
      speed: 700,
      spaceBetween: 16,
      keyboard: true,
      mousewheel: {
        forceToAxis: true
      },
      breakpoints: {
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 16
        }
      },
      navigation: {
        nextEl: $(this).find(".swiper-next")[0],
        prevEl: $(this).find(".swiper-prev")[0],
        disabledClass: "is-disabled"
      }
    });
  });
});

$(document).ready(function () {
  // Select all images in Swiper slides
  $(".swiper-slide img").each(function (index) {
    // Add the aspect-ratio-1 class to every alternate image
    if (index % 2 !== 0) {
      $(this).addClass("aspect-ratio-1");
    }
  });
});

// Swipper with animation end
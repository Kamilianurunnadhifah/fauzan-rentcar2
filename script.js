// Smooth scroll helper
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// Mobile nav
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    navMobile.style.display = navMobile.style.display === 'block' ? 'none' : 'block';
  });
}

// Swiper Initialization for Catalog
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2, // Show two slides on medium screens
    },
    1024: {
      slidesPerView: 3, // Show three slides on larger screens
    }
  }
});

// Booking form -> WhatsApp
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(bookingForm);
    const data = Object.fromEntries(fd.entries());
    const message =
      `*Booking Fauzan Rentcar*%0A%0A` +
      `*Nama:* ${data.name}%0A` +
      `*Tanggal Mulai:* ${data.startDate}%0A` +
      `*Tujuan:* ${data.destination}%0A` +
      `*Lama Sewa:* ${data.duration}%0A` +
      `*Pilihan Mobil:* ${data.carType}%0A%0A` +
      `Terima kasih!`;
    const wa = `https://wa.me/6281511515141?text=${message}`;
    window.open(wa, '_blank');
  });
}

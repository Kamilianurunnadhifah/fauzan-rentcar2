// Smooth scroll
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Booking form -> WhatsApp
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(bookingForm);
    const data = Object.fromEntries(fd.entries());
    const message = `*Booking Fauzan Rentcar*%0A%0A*Nama:* ${data.name}%0A*Mulai:* ${data.startDate}%0A*Tujuan:* ${data.destination}%0A*Lama:* ${data.duration}%0A*Mobil:* ${data.carType}%0A%0ATerima kasih!`;
    const wa = `https://wa.me/6281511515141?text=${message}`;
    window.open(wa, '_blank');
  });
}

// Toggle sidebar saat tombol hamburger ditekan
const navToggle = document.getElementById('navToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

navToggle.addEventListener('click', () => {
  sidebar.classList.toggle('show'); // Toggling 'show' untuk sidebar
});

// Menutup sidebar ketika tombol close ditekan
if (closeSidebar) {
  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('show');
  });
}

// Data mobil dengan banyak foto
const cars = [
  {
    name: "Honda Jazz RS 2024",
    images: [
      "assets/mobil/jazz1.jpg",
      "assets/mobil/jazz2.jpg",
      "assets/mobil/jazz3.jpg"
    ],
    priceDaily: "Rp450.000",
    priceWeekly: "Rp3.000.000",
    priceMonthly: "Rp11.000.000",
  },
  {
    name: "Toyota Avanza",
    images: [
      "https://images.unsplash.com/photo-1748621019980-8c9278b61974?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1617430443861-3f4c6a15b8da?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1589391886645-d51941b7aeb9?auto=format&fit=crop&w=1200&q=60"
    ],
    priceDaily: "Rp350.000",
    priceWeekly: "Rp2.000.000",
    priceMonthly: "Rp6.500.000",
  },
  {
    name: "Honda Brio",
    images: [
      "https://images.unsplash.com/photo-1647240907605-2fe56a071bed?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1617957743095-1b80279f1e8c?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1610128603971-19e773ba8197?auto=format&fit=crop&w=1200&q=60"
    ],
    priceDaily: "Rp300.000",
    priceWeekly: "Rp1.800.000",
    priceMonthly: "Rp5.500.000",
  },
  {
    name: "Toyota Innova",
    images: [
      "https://images.unsplash.com/photo-1748215210939-ad8b6c8c086d?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1617440168935-fecffcb435e4?auto=format&fit=crop&w=1200&q=60",
      "https://images.unsplash.com/photo-1605960928642-cc0b9c80efee?auto=format&fit=crop&w=1200&q=60"
    ],
    priceDaily: "Rp450.000",
    priceWeekly: "Rp2.800.000",
    priceMonthly: "Rp8.500.000",
  },
];

// Render katalog
const grid = document.getElementById("catalogGrid");
if (grid) {
  grid.innerHTML = cars.map((car, i) => `
    <div class="catalog-card">
      <div class="swiper car-swiper-${i}">
        <div class="swiper-wrapper">
          ${car.images.map(img => `<div class="swiper-slide"><img src="${img}" alt="${car.name}"></div>`).join("")}
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      <div class="body">
        <h3>${car.name}</h3>
        <div class="price-row"><span>Harian</span><span class="price">${car.priceDaily}</span></div>
        <div class="price-row"><span>Mingguan</span><span class="price">${car.priceWeekly}</span></div>
        <div class="price-row"><span>Bulanan</span><span class="price">${car.priceMonthly}</span></div>
        <div class="card-actions"><button class="btn btn-primary btn-lg" onclick="scrollToId('booking')">Sewa Sekarang</button></div>
      </div>
    </div>
  `).join("");

  // Initialize Swiper for each car swiper
  cars.forEach((_, i) => {
    new Swiper(`.car-swiper-${i}`, {
      loop: true,
      navigation: {
        nextEl: `.car-swiper-${i} .swiper-button-next`,
        prevEl: `.car-swiper-${i} .swiper-button-prev`,
      },
    });
  });

  // Dynamic Options for 'Lama Sewa'
  document.getElementById("duration").addEventListener("change", function() {
    var timeSelect = document.getElementById("time");
    var durationValue = this.value;

    // Kosongkan opsi sebelumnya
    timeSelect.innerHTML = '<option value="">Pilih jumlah sewa</option>';

    // Tentukan jumlah pilihan berdasarkan lama sewa
    if (durationValue === "harian") {
      // Pilihan untuk harian (1-6 hari)
      for (var i = 1; i <= 6; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.textContent = i + " Hari";
        timeSelect.appendChild(option);
      }
    } else if (durationValue === "mingguan") {
      // Pilihan untuk mingguan (1-3 minggu)
      for (var i = 1; i <= 3; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.textContent = i + " Minggu";
        timeSelect.appendChild(option);
      }
    } else if (durationValue === "bulanan") {
      // Pilihan untuk bulanan (1-6 bulan)
      for (var i = 1; i <= 6; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.textContent = i + " Bulan";
        timeSelect.appendChild(option);
      }
    }
  });
}

// Smooth scroll
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Toggle menu mobile
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

if (navToggle && navMobile) {
  navToggle.addEventListener("click", function () {
    navMobile.classList.toggle("show");
  });
}

// ✅ Tutup menu saat tombol navigasi diklik (khusus navMobile)
document.querySelectorAll('#navMobile button').forEach(btn => {
  btn.addEventListener('click', function () {
    navMobile.classList.remove('show');
  });
});

// Booking form -> WhatsApp
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(bookingForm);
    const data = Object.fromEntries(fd.entries());
    const message = `*Halo, Fauzan Rentcar, saya ingin mengecek ketersediaan mobil:*%0A%0A*Nama:* ${data.name}%0A*Mulai:* ${data.startDate}%0A*Tujuan:* ${data.destination}%0A*Lama Sewa:* ${data.duration}%0A*Jumlah:* ${data.option}%0A*Mobil:* ${data.carType}%0A%0ATerima kasih!`;
    const wa = `https://wa.me/6287754907731?text=${message}`;
    window.open(wa, '_blank');
  });
}


// Data mobil dengan banyak foto
const cars = [
  {
    name: "Toyota Reborn 2.0 G Matic",
    images: [
      "assets/mobil/innova1.jpg",
      "assets/mobil/innova2.jpg",
      "assets/mobil/innova3.jpg"
    ],
    priceDaily: "Rp650.000",
    priceWeekly: "Rp4.500.000",
    priceMonthly: "Rp12.000.000",
  },
    {
    name: "Honda All New Brio 2025 Matic",
    images: [
      "assets/mobil/allbrio1.jpg",
      "assets/mobil/allbrio2.jpg",
      "assets/mobil/allbrio3.jpg"
    ],
    priceDaily: "Rp350.000",
    priceWeekly: "Rp2.000.000",
    priceMonthly: "Rp7.000.000",
  },
      {
    name: "Honda All New BRV Prestige 2024 Matic",
    images: [
      "assets/mobil/allbrv1.jpg",
      "assets/mobil/allbrv2.jpg",
      "assets/mobil/allbrv3.jpg"
    ],
    priceDaily: "Rp450.000",
    priceWeekly: "Rp3.000.000",
    priceMonthly: "Rp12.500.000",
  },
        {
    name: "Honda Jazz RS Fit 2017 Matic",
    images: [
      "assets/mobil/jazz1.jpg",
      "assets/mobil/jazz2.jpg",
      "assets/mobil/jazz3.jpg"
    ],
    priceDaily: "Rp350.000",
    priceWeekly: "Rp2.000.000",
    priceMonthly: "Rp7.000.000",
  },
          {
    name: "Honda Brio Facelift 2022 Matic",
    images: [
      "assets/mobil/briofl1.jpg",
      "assets/mobil/briofl2.jpg",
      "assets/mobil/briofl3.jpg"
    ],
    priceDaily: "Rp400.000",
    priceWeekly: "Rp2.400.000",
    priceMonthly: "Rp8.000.000",
  },
            {
    name: "Toyota Reborn Diesel Matic 2023",
    images: [
      "assets/mobil/innovadiesel1.jpg",
      "assets/mobil/innovadiesel2.jpg",
      "assets/mobil/innovadiesel3.jpg"
    ],
    priceDaily: "Rp650.000",
    priceWeekly: "Rp4.400.000",
    priceMonthly: "Rp16.000.000",
  },
              {
    name: "Toyota Avanza G 2019 Matic",
    images: [
      "assets/mobil/avanza1.jpg",
      "assets/mobil/avanza2.jpg",
      "assets/mobil/avanza3.jpg"
    ],
    priceDaily: "Rp350.000",
    priceWeekly: "Rp2.000.000",
    priceMonthly: "Rp8.000.000",
  },
                {
    name: "Mitsubishi Expander Facelift 2020 Matic",
    images: [
      "assets/mobil/expander1.jpg",
      "assets/mobil/expander2.jpg",
      "assets/mobil/expander3.jpg"
    ],
    priceDaily: "Rp450.000",
    priceWeekly: "Rp3.000.000",
    priceMonthly: "Rp9.000.000",
  },
                  {
    name: "Honda City RS Hatchback 2021 Matic",
    images: [
      "assets/mobil/cityrs1.jpg",
      "assets/mobil/cityrs2.jpg",
      "assets/mobil/cityrs3.jpg"
    ],
    priceDaily: "Rp500.000",
    priceWeekly: "Rp3.500.000",
    priceMonthly: "Rp14.000.000",
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
        <div class="card-actions"><button class="btn btn-primary btn-lg" onclick="selectCar('${car.name}')">Sewa Sekarang</button></div>
      </div>
    </div>
  `).join("");

  cars.forEach((_, i) => {
    new Swiper(`.car-swiper-${i}`, {
      loop: true,
      navigation: {
        nextEl: `.car-swiper-${i} .swiper-button-next`,
        prevEl: `.car-swiper-${i} .swiper-button-prev`,
      },
    });
  });

  // Tambahkan fungsi selectCar secara global. Fungsi ini akan mengisi select "Pilihan Mobil"
  // sesuai dengan nama mobil dari kartu yang diklik dan kemudian menggulir ke formulir pemesanan.
  window.selectCar = function(carName) {
    const select = document.getElementById('carType');
    if (select) {
      // Pastikan opsi mobil ada; jika belum, tambahkan.
      let optionExists = false;
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === carName || select.options[i].textContent === carName) {
          optionExists = true;
          break;
        }
      }
      if (!optionExists) {
        const opt = document.createElement('option');
        opt.value = carName;
        opt.textContent = carName;
        select.appendChild(opt);
      }
      // Set nilai select ke mobil yang dipilih
      select.value = carName;
    }
    // Scroll ke formulir booking
    scrollToId('booking');
  };

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
  
  // Inisialisasi GLightbox setelah halaman termuat
  const lightbox = GLightbox({
    touchNavigation: true,   // memungkinkan navigasi sentuh (swipe) di mobile
    loop: true               // memungkinkan looping ke foto pertama setelah foto terakhir
  });
  // Secara default, GLightbox akan otomatis mencari elemen dengan class "glightbox" dan mengaktifkan lightbox pada elemen tersebut.

  
}

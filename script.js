// Smooth scroll helper
function scrollToId(id){
  const el = document.getElementById(id);
  if(el){ el.scrollIntoView({behavior:'smooth'}); }
}

// Mobile nav
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
if(navToggle && navMobile){
  navToggle.addEventListener('click', ()=>{
    navMobile.style.display = navMobile.style.display === 'block' ? 'none' : 'block';
  });
}

// Modern header toggle & icon change
const navToggleBtn = document.getElementById('navToggle');
const navMobileMenu = document.getElementById('navMobile');

if (navToggleBtn && navMobileMenu) {
  navToggleBtn.addEventListener('click', () => {
    const isOpen = navMobileMenu.classList.toggle('show');
    navToggleBtn.innerHTML = isOpen
      ? '<i data-feather="x"></i>'
      : '<i data-feather="menu"></i>';
    if (window.feather) feather.replace();
  });
}

// Booking form -> WhatsApp
const bookingForm = document.getElementById('bookingForm');
if(bookingForm){
  bookingForm.addEventListener('submit', (e)=>{
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

// Catalog data
const cars = [
  {
    name: "Toyota Avanza",
    image: "https://images.unsplash.com/photo-1748621019980-8c9278b61974?auto=format&fit=crop&w=1200&q=60",
    priceDaily: "Rp 350.000",
    priceWeekly: "Rp 2.000.000",
    priceMonthly: "Rp 6.500.000",
  },
  {
    name: "Honda Brio",
    image: "https://images.unsplash.com/photo-1647240907605-2fe56a071bed?auto=format&fit=crop&w=1200&q=60",
    priceDaily: "Rp 300.000",
    priceWeekly: "Rp 1.800.000",
    priceMonthly: "Rp 5.500.000",
  },
  {
    name: "Daihatsu Xenia",
    image: "https://images.unsplash.com/photo-1562168672-108c590d2e63?auto=format&fit=crop&w=1200&q=60",
    priceDaily: "Rp 350.000",
    priceWeekly: "Rp 2.000.000",
    priceMonthly: "Rp 6.500.000",
  },
  {
    name: "Toyota Innova",
    image: "https://images.unsplash.com/photo-1748215210939-ad8b6c8c086d?auto=format&fit=crop&w=1200&q=60",
    priceDaily: "Rp 450.000",
    priceWeekly: "Rp 2.800.000",
    priceMonthly: "Rp 8.500.000",
  },
];

// Render catalog
const grid = document.getElementById('catalogGrid');
if(grid){
  grid.innerHTML = cars.map(car => `
    <div class="catalog-card">
      <div class="img-wrap">
        <img src="${car.image}" alt="${car.name}" onerror="this.src='https://via.placeholder.com/800x600?text=${encodeURIComponent(car.name)}'"/>
      </div>
      <div class="body">
        <h3>${car.name}</h3>
        <div class="price-row"><span>Harian:</span><span class="price">${car.priceDaily}</span></div>
        <div class="price-row"><span>Mingguan:</span><span class="price">${car.priceWeekly}</span></div>
        <div class="price-row"><span>Bulanan:</span><span class="price">${car.priceMonthly}</span></div>
        <div class="card-actions">
          <button class="btn btn-accent" onclick="scrollToId('booking')">Booking Sekarang</button>
        </div>
      </div>
    </div>
  `).join('');
}

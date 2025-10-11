// Fauzan Rentcar scripts
// 1) Ganti nomor WhatsApp berikut dengan nomor kamu (format internasional tanpa +): contoh 6281212345678
const WHATSAPP_NUMBER = "6281212345678";

// 2) Data mobil (bisa kamu ubah sesuai armada & harga)
const cars = [
  {
    name: "Toyota Avanza",
    img: "https://images.unsplash.com/photo-1617529497471-9218bfec8b7c?q=80&w=1200&auto=format&fit=crop",
    price: { harian: 350000, mingguan: 2000000, bulanan: 6500000 }
  },
  {
    name: "Honda Brio",
    img: "https://images.unsplash.com/photo-1549921296-3b4a78a8c0f6?q=80&w=1200&auto=format&fit=crop",
    price: { harian: 300000, mingguan: 1800000, bulanan: 6000000 }
  },
  {
    name: "Daihatsu Xenia",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
    price: { harian: 340000, mingguan: 1950000, bulanan: 6300000 }
  },
  {
    name: "Toyota Innova",
    img: "https://images.unsplash.com/photo-1621570167351-7a0b24768991?q=80&w=1200&auto=format&fit=crop",
    price: { harian: 550000, mingguan: 3200000, bulanan: 9000000 }
  }
];

// Render catalog
const catalogGrid = document.getElementById("catalogGrid");
const mobilSelect = document.getElementById("mobilSelect");
function rupiah(n){ return new Intl.NumberFormat('id-ID', { style:'currency', currency:'IDR', maximumFractionDigits:0 }).format(n); }

function renderCatalog(){
  catalogGrid.innerHTML = "";
  cars.forEach(car => {
    const card = document.createElement("div");
    card.className = "card-car";
    card.innerHTML = `
      <img src="${car.img}" alt="${car.name}" loading="lazy">
      <div class="card-body">
        <div>
          <h3>${car.name}</h3>
          <div class="price">
            <span>Harian<br>${rupiah(car.price.harian)}</span>
            <span>Mingguan<br>${rupiah(car.price.mingguan)}</span>
            <span>Bulanan<br>${rupiah(car.price.bulanan)}</span>
          </div>
        </div>
        <div class="card-actions">
          <a class="btn outline" href="#booking">Booking</a>
          <a class="btn primary" target="_blank" rel="noopener" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Halo Fauzan Rentcar, saya ingin sewa ${car.name}.`)}">Chat WA</a>
        </div>
      </div>
    `;
    catalogGrid.appendChild(card);
  });

  // Fill select
  mobilSelect.innerHTML = "<option value=''>Pilih mobil</option>";
  cars.forEach(car => {
    const opt = document.createElement("option");
    opt.value = car.name;
    opt.textContent = car.name;
    mobilSelect.appendChild(opt);
  });
}
renderCatalog();

// Booking -> open WhatsApp with message
const form = document.getElementById("bookingForm");
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const data = new FormData(form);
  const nama = data.get("nama") || "";
  const tanggal = data.get("tanggal") || "";
  const tujuan = data.get("tujuan") || "";
  const lama = data.get("lama") || "";
  const mobil = data.get("mobil") || "";

  const msg = `Halo Fauzan Rentcar,%0A%0ASaya ingin melakukan booking:%0A- Nama: ${nama}%0A- Tanggal Mulai: ${tanggal}%0A- Tujuan Pemakaian: ${tujuan}%0A- Lama Sewa: ${lama}%0A- Pilihan Mobil: ${mobil}%0A%0ATerima kasih.`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  window.open(url, "_blank");
});

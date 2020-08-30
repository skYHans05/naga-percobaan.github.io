

const tampilHari = document.querySelector(".box .hari h1");
const tampilJam = document.querySelector(".box .jam h1");
const tampilMenit = document.querySelector(".box .menit h1");
const tampilDetik = document.querySelector(".box .detik h1");

setInterval(function() {
  const hariH = new Date('Oct 5, 2020 12:00:00').getTime();
  const sekarang = new Date().getTime();
  const selisih = hariH - sekarang;
  
  
  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  tampilHari.innerHTML = hari;
  
  const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  tampilJam.innerHTML = jam;
  
  const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
  tampilMenit.innerHTML = menit;
  
  const detik = Math.floor(selisih % (1000 * 60) / (1000));
  tampilDetik.innerHTML = detik;
}, 1000);





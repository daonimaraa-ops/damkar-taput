function toggleMenu(){document.querySelector(".nav").classList.toggle("open")}
function getLocation(){
  const field=document.getElementById("location");
  if(!navigator.geolocation){field.value="Lokasi otomatis tidak tersedia";return}
  field.value="Mencari lokasi...";
  navigator.geolocation.getCurrentPosition(
    p=>field.value=`Koordinat: ${p.coords.latitude.toFixed(6)}, ${p.coords.longitude.toFixed(6)}`,
    ()=>field.value="Lokasi tidak dapat diakses. Silakan masukkan alamat manual."
  );
}
function submitReport(e){
  e.preventDefault();
  const status=document.getElementById("reportStatus");
  status.textContent="✓ Laporan berhasil diterima dalam mode prototype. Hubungkan ke backend untuk pengiriman nyata.";
  e.target.reset();
}
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".nav").classList.remove("open")));

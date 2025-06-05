function kirimData() {
  var nama = document.getElementById("nama").value;
  var nim = document.getElementById("nim").value;
  var peminatan = document.querySelector("input[name=pemintan]:checked")?.value || "Belum dipilih";
  var alamat = document.getElementById("alamat").value;
  var angkatan = document.getElementById("angkatan").value;
  var tanggal = document.getElementById("tanggal").value;

  alert(
    "Nama     : " + nama +
    "\nNIM      : " + nim +
    "\nPeminatan: " + peminatan +
    "\nAlamat   : " + alamat +
    "\nAngkatan : " + angkatan +
    "\nTanggal  : " + tanggal
  );
}

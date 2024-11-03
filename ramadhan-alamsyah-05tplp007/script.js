// Mengatur menu aktif berdasarkan halaman yang dikunjungi
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar nav a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

// Fungsi untuk menambah data karyawan baru
function tambahKaryawan() {
  const nama = prompt("Masukkan Nama Karyawan:");
  const jabatan = prompt("Masukkan Jabatan Karyawan:");
  const divisi = prompt("Masukkan Divisi Karyawan:");
  const status = "Aktif";

  if (nama && jabatan && divisi) {
    const tableBody = document.querySelector("#karyawanTable tbody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
            <td>${tableBody.children.length + 1}</td>
            <td>${nama}</td>
            <td>${jabatan}</td>
            <td>${divisi}</td>
            <td>${status}</td>
        `;

    tableBody.appendChild(newRow);
    alert("Karyawan berhasil ditambahkan.");
  } else {
    alert("Data karyawan tidak lengkap.");
  }
}

// Tampilkan atau sembunyikan sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

// Menampilkan tanggal saat ini pada elemen dengan ID 'tanggal-absensi'
document.addEventListener("DOMContentLoaded", () => {
  const tanggalElement = document.getElementById("tanggal-absensi");
  const options = { year: "numeric", month: "long", day: "numeric" };
  const today = new Date().toLocaleDateString("id-ID", options);

  tanggalElement.textContent = today;
});


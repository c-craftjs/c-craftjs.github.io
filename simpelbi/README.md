Cara Penggunaan Fungsi CihuyPagination
Langkah 1: Menyertakan Berkas JavaScript
Pastikan Anda telah menyertakan berkas JavaScript yang berisi definisi fungsi CihuyPagination dalam halaman HTML Anda. Anda dapat menyertakan berkas ini dengan menambahkan tag <script> seperti ini:
import { CihuyPaginations } from "https://c-craftjs.github.io/simpelbi/pagenations.js";


html
Copy code
<script src="path-to-your-script.js" type"module"></script>

Gantilah "path-to-your-script.js" dengan alamat URL atau path file JavaScript yang berisi fungsi CihuyPagination.

Langkah 2: Mempersiapkan Struktur HTML
Pastikan Anda memiliki struktur HTML yang sesuai untuk menampilkan data Anda. Anda perlu memiliki sebuah elemen HTML yang akan berfungsi sebagai kontainer untuk tabel data dan elemen untuk menampilkan pagination.

Contoh struktur HTML:

html
Copy code
<div id="table-container">
  <table>
    <thead>
      <!-- Header tabel -->
    </thead>
    <tbody id="content">
      <!-- Isi tabel akan ditampilkan di sini -->
    </tbody>
  </table>
</div>

<div class="dm-pagination">
</div>

pastikan mengcopy dibawah ini 

<div class="col-12">
    <div class="card card-default card-md mb-4">               
        <div class="card-body">
            <div id="pagination" class="dm-pagination d-flex"></div>
            <div id="content"></div>
        </div>
    </div>
</div>  

Pastikan elemen dengan ID "content" adalah tempat di mana Anda ingin menampilkan data pada tabel.

Langkah 3: Memanggil Fungsi CihuyPagination
Setelah Anda mempersiapkan struktur HTML dan menyertakan berkas JavaScript, Anda dapat memanggil fungsi CihuyPagination untuk membuat pagination.

Contoh cara memanggil fungsi CihuyPagination:

javascript
Copy code
// Data yang ingin Anda paginasi
const data = [/* Data Anda */];

// Jumlah item yang ingin ditampilkan per halaman
const itemsPerPage = 10;

// ID kontainer tabel dan itemRenderer adalah fungsi yang merender data
// Anda dapat menyesuaikan itemRenderer sesuai dengan struktur data Anda
const containerId = "content";
function itemRenderer(item, index) {
  // Buat tampilan baris data sesuai dengan struktur Anda
  return `
    <tr>
      <td>${item.field1}</td>
      <td>${item.field2}</td>
      <!-- Tambahkan kolom sesuai kebutuhan -->
    </tr>
  `;
}

// Halaman awal yang ingin ditampilkan (opsional, default adalah 1)
const currentPage = 1;

// Jumlah maksimal halaman yang ditampilkan pada pagination
const maxPagesToShow = 5;

// Panggil fungsi CihuyPagination
CihuyPagination(data, itemsPerPage, containerId, itemRenderer, currentPage, maxPagesToShow);
Langkah 4: Menyesuaikan Tampilan Item Renderer
Dalam fungsi itemRenderer, Anda perlu menyesuaikan tampilan baris data sesuai dengan struktur data Anda. Buat tampilan HTML untuk setiap baris data yang ingin ditampilkan dalam tabel.

Langkah 5: Menyesuaikan Pengaturan Pagination
Anda dapat menyesuaikan pengaturan pagination seperti jumlah halaman yang ditampilkan (maxPagesToShow) sesuai dengan preferensi Anda.

Dengan mengikuti langkah-langkah di atas, Anda dapat menggunakan fungsi CihuyPagination untuk membuat pagination pada data Anda dalam tabel. Fungsi ini akan mengatur tampilan pagination dan mengelola pemutaran halaman data Anda sesuai dengan pengaturan yang Anda berikan.
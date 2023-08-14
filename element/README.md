# createElement(tagName, attributes):
Fungsi ini digunakan untuk membuat elemen HTML baru dengan tag yang ditentukan. Anda dapat memberikan atribut yang akan diterapkan pada elemen tersebut dalam bentuk objek.

Contoh penggunaan:

const divElement = CihuyCreateElement('div', { class: 'my-div', id: 'unique-id' });

# addClass(element, className):
Fungsi ini digunakan untuk menambahkan kelas tertentu ke elemen HTML yang ada. Ini berguna untuk merubah tampilan atau gaya elemen melalui CSS.

Contoh penggunaan:

const myElement = document.getElementById('my-element');
CihuyAddClass(myElement, 'highlight');

# removeClass(element, className):
Fungsi ini digunakan untuk menghapus kelas tertentu dari elemen HTML yang ada. Ini berguna ketika Anda ingin menghapus efek atau gaya yang sebelumnya diterapkan melalui CSS.

Contoh penggunaan:

const myElement = document.getElementById('my-element');
CihuyRemoveClass(myElement, 'highlight');

### Dengan menggunakan fungsi-fungsi ini, Anda dapat dengan mudah membuat elemen baru, menambahkan atau menghapus kelas dari elemen, serta secara dinamis mengubah atribut dan tampilan elemen di dalam halaman web. Hal ini berguna terutama jika Anda ingin melakukan manipulasi elemen melalui kode JavaScript tanpa harus berinteraksi langsung dengan struktur HTML atau CSS.

# CihuyId(id):
Fungsi ini akan mendapatkan elemen dari dokumen berdasarkan ID yang Anda tentukan sebagai argumen. Itu akan mengembalikan elemen dengan ID yang cocok.

Contoh penggunaan:

const myElement = CihuyId('my-element');

# CihuyByClass(className):
Fungsi ini akan mendapatkan daftar elemen dari dokumen yang memiliki kelas yang sesuai dengan className yang Anda berikan. Ini akan mengembalikan koleksi elemen dengan kelas yang cocok.

Contoh penggunaan:

const myButtons = CihuyByClass('button');

# ElemByTag(tagName):
Fungsi ini akan mendapatkan daftar elemen dari dokumen yang memiliki tag yang sesuai dengan tagName yang Anda berikan. Ini akan mengembalikan koleksi elemen dengan tag yang cocok.

Contoh penggunaan:

const allParagraphs = ElemByTag('p');

# hideElement(element)
Penggunaan:
Fungsi ini digunakan untuk menyembunyikan elemen dengan mengatur properti display menjadi 'none'.


const myElement = document.getElementById('my-element');
hideElement(myElement);

# showElement(element)
Fungsi ini digunakan untuk menampilkan kembali elemen yang sebelumnya disembunyikan dengan fungsi hideElement, dengan mengatur properti display menjadi 'block'.


Penggunaan:

const myElement = document.getElementById('my-element');
showElement(myElement);

# createModal(title, content):
Fungsi ini membuat elemen modal dengan judul dan konten yang ditentukan. Modal ini memiliki tombol "Close" untuk menutup modal.
const modal = CihuyCreateModal('My Modal', '<p>This is the modal content.</p>');
document.body.appendChild(modal);

# appendToBody 
Dengan fungsi appendToBody, Anda dapat dengan mudah menambahkan elemen baru ke dalam document.body tanpa perlu menuliskan document.body.appendChild(element) setiap kali.

const modal = createModal('My Modal', '<p>This is the modal content.</p>');
disini yang dipakai ya --> appendToBody(modal);
// Fungsi untuk membuat elemen HTML dengan tag dan atribut
export function CihuyCreateElement(tagName, attributes) {
    const element = document.createElement(tagName);
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
    return element;
  }

// Fungsi untuk menambahkan kelas ke elemen
export function CihuyAddClass(element, className) {
    element.classList.add(className);
  }

// Fungsi untuk menghapus kelas dari elemen
export function CihuyRemoveClass(element, className) {
    element.classList.remove(className);
  }

  
// Fungsi untuk mendapatkan elemen berdasarkan id
export function CihuyId(id) {
    return document.getElementById(id);
  }
  
// Fungsi untuk mendapatkan elemen berdasarkan class
export function CihuyByClass(className) {
    return document.getElementsByClassName(className);
  }
  
// Fungsi untuk mendapatkan elemen berdasarkan tag
export function CihuyByTag(tagName) {
    return document.getElementsByTagName(tagName);
  }

  // Fungsi untuk menyembunyikan elemen
export function CihuyHide(element) {
    element.style.display = 'none';
  }
  
  // Fungsi untuk menampilkan elemen
export function CihuyShow(element) {
    element.style.display = 'block';
  }

  // Fungsi untuk membuat elemen modal dengan judul dan konten
export function CihuyCreateModal(title, content) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
  
    const modalTitle = document.createElement('h2');
    modalTitle.textContent = title;
  
    const modalBody = document.createElement('div');
    modalBody.innerHTML = content;
  
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
  
    return modal;
  }
// Fungsi untuk menambahkan elemen ke dalam document.body
export function CihuyAppendBody(element) {
    document.body.appendChild(element);
  }

// export function CihuyLinkClick(elementId) {
//     const linkElement = document.getElementById(elementId);
//     linkElement.addEventListener("click", handleLinkClick);
// }
export function CihuyLinkClick(event, url) {
  event.preventDefault();
  window.location.replace = url;
}

// Fungsi untuk mengurutkan tabel berdasarkan kolom tertentu
export function CihuyTableByColumn(tableId, columnIndex, ascending = true) {
    const table = CihuyId(tableId);
    const rows = Array.from(table.querySelectorAll('tbody tr'));

    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent.trim();
        const cellB = rowB.cells[columnIndex].textContent.trim();

        return ascending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });

    for (const row of rows) {
        table.querySelector('tbody').appendChild(row);
    }
}

// Fungsi untuk menghubungkan event ke header tabel untuk memicu pengurutan
export function CihuyTableSorting(tableId) {
    const tableHeaders = document.querySelectorAll(`#${tableId} th`);
    
    tableHeaders.forEach((header, index) => {
        header.addEventListener('click', () => {
            sortTableByColumn(tableId, index);
        });
    });
}

export function CihuyDomReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  export function CihuyQuerySelector(selector) {
    return document.querySelectorAll(selector);
  }
  


//
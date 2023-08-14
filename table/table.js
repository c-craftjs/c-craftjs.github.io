
function getTableHeaders(tableSelector) {
  const table = document.querySelector(tableSelector);
  if (!table) {
    console.error('Table not found');
    return [];
  }

  const headers = Array.from(table.querySelectorAll('th'));
  return headers.map(header => header.textContent);
}
// Tambahkan sebuah event listener pada header kolom yang ingin di-sort
export function CihuySortTableid(tableId) {
    const table = CihuyId(tableId);
    const headers = table.querySelectorAll('th');
    
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const columnIndex = Array.from(headers).indexOf(header);
        sortTableByColumn(table, columnIndex);
      });
    });
  }
  
  // Fungsi untuk melakukan sorting pada tabel berdasarkan kolom tertentu
export function CihuySortTableByColumn(table, columnIndex) {
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    
    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].textContent.trim();
      const cellB = rowB.cells[columnIndex].textContent.trim();
      return cellA.localeCompare(cellB, undefined, { numeric: true, sensitivity: 'base' });
    });
  
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';
    
    rows.forEach(row => {
      tbody.appendChild(row);
    });
  }
  
  // Panggil fungsi setupTableSorting dengan ID tabel yang ingin Anda sort
  CihuySortTableByColumn('myTable');
  
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

export function CihuySortTable(tableSelector) {
    const table = document.querySelector(tableSelector);
    
    if (!table) {
      console.error('Table not found');
      return;
    }

    const headers = table.querySelectorAll('th');
    
    headers.forEach((header, columnIndex) => {
      header.addEventListener('click', () => {
        CihuySortTableByColumn(table, columnIndex);
      });
    });
}

CihuySortTable('#myTable');

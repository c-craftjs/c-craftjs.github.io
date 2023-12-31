export function CihuyPaginations(data, itemsPerPage, containerId, itemRenderer, currentPage, maxPagesToShow) {
    const tableBody = document.getElementById(containerId);
    const paginationContainer = document.querySelector(".dm-pagination");
  
    const totalPages = Math.ceil(data.length / itemsPerPage);
    let current = currentPage || 1;
  
    function displayPage(page) {
      tableBody.innerHTML = "";
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  
      for (let i = startIndex; i < endIndex; i++) {
        const item = data[i];
        const barisBaru = document.createElement("tr");
        barisBaru.innerHTML = itemRenderer(item, i);
        tableBody.appendChild(barisBaru);
      }
    }
  
    // Fungsi untuk mengupdate tampilan pagination
     function updatePagination() {
      paginationContainer.innerHTML = "";
  
      // Hitung halaman yang akan ditampilkan
      let startPage = Math.max(current - Math.floor(maxPagesToShow / 2), 1);
      let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);
  
      if (endPage - startPage < maxPagesToShow - 1) {
        startPage = Math.max(endPage - maxPagesToShow + 1, 1);
      }
  
      // Tambahkan tombol "Previous"
      const prevButton = document.createElement("a");
      prevButton.href = "#";
      prevButton.classList.add("dm-pagination__link", "pagination-control");
      prevButton.innerHTML = '<span class="la la-angle-left"></span>';
      prevButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (current > 1) {
          current--;
          displayPage(current);
          updatePagination();
        }
      });
      paginationContainer.appendChild(prevButton);
  
      // Tambahkan halaman-halaman
      for (let i = startPage; i <= endPage; i++) {
        const pageLink = document.createElement("a");
        pageLink.href = "#";
        pageLink.classList.add("dm-pagination__link", "page-number");
        pageLink.textContent = i;
        pageLink.addEventListener("click", (e) => {
          e.preventDefault();
          current = i;
          displayPage(current);
          updatePagination();
        });
  
        if (i === current) {
          pageLink.classList.add("active");
        }
  
        paginationContainer.appendChild(pageLink);
      }
  
      // Tambahkan tombol "Next"
      const nextButton = document.createElement("a");
      nextButton.href = "#";
      nextButton.classList.add("dm-pagination__link", "pagination-control");
      nextButton.innerHTML = '<span class="la la-angle-right"></span>';
      nextButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (current < totalPages) {
          current++;
          displayPage(current);
          updatePagination();
        }
      });
      paginationContainer.appendChild(nextButton);
      
    } function fillTableWithData(data) {
      const tableBody = document.getElementById(containerId);
      tableBody.innerHTML = dataRenderer(data);
    }
  
    displayPage(current);
    updatePagination();
  }
  


export function CihuyPaginations2(data, currentPage, itemsPerPage, paginationContainer, onPageChange) {
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pagesPerGroup = 1;

  const groupNumber = Math.ceil(currentPage / pagesPerGroup);
  const startPage = (groupNumber - 1) * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

  if (currentPage > 1) {
    // Add "<" button
    const previousButton = document.createElement("a");
    previousButton.href = "#";
    previousButton.classList.add("dm-pagination__link");
    previousButton.textContent = "<";
    previousButton.addEventListener("click", () => {
      onPageChange(currentPage - 1);
    });
    paginationContainer.appendChild(previousButton);
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.classList.add("dm-pagination__link");
    pageLink.textContent = i;

    pageLink.addEventListener("click", () => {
      onPageChange(i);
    });

    if (i === currentPage) {
      pageLink.classList.add("active");
    }

    paginationContainer.appendChild(pageLink);
  }

  if (currentPage < totalPages) {
    // Add ">" button
    const nextButton = document.createElement("a");
    nextButton.href = "#";
    nextButton.classList.add("dm-pagination__link");
    nextButton.textContent = ">";
    nextButton.addEventListener("click", () => {
      onPageChange(currentPage + 1);
    });
    paginationContainer.appendChild(nextButton);
  }
}
  
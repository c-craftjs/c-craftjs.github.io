
// penggunaan Pagenation 
// sebelum pastikan mengimport dulu untuk cihuyqueryselector ya yang ada di table
CihuyDomReady(() => {
    const tablebody = CihuyId("id tabel body");
    const buttonsebelumnya = CihuyId("id prev button");
    const buttonselanjutnya = CihuyId("id next button");
    const halamansaatini = CihuyId("id currentpage");
    const itemperpage = 10;
    let halamannow = 1;
  
    // tambahkan disini untuk get data
    function displayData(page) {
      const baris = CihuyQuerySelector("#tablebody tr");
      const mulaiindex = (page - 1) * itemperpage;
      const akhirindex = mulaiindex + itemperpage;
  
      for (let i = 0; i < baris.length; i++) {
        if (i >= mulaiindex && i < akhirindex) {
          baris[i].style.display = "table-row";
        } else {
          baris[i].style.display = "none";
        }
      }
    }
    function updatePagination() {
      halamansaatini.textContent = `Halaman ${halamannow}`;
    }
  
    buttonsebelumnya.addEventListener("click", () => {
      if (halamannow > 1) {
        halamannow--;
        displayData(halamannow);
        updatePagination();
      }
    });
  
    buttonselanjutnya.addEventListener("click", () => {
      const totalPages = Math.ceil(
        tablebody.CihuyQuerySelector("#tablebody tr").length / itemperpage
      );
      if (halamannow < totalPages) {
        halamannow++;
        displayData(halamannow);
        updatePagination();
      }
    });
  
  });
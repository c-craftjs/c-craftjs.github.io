export function CihuyBarChart(data) {
    const ctx = document.getElementById("barChart").getContext("2d");
  
    const labels = data.map((item) => item.prodi);
    const datasets = [];
  
    // Ambil label dataset dari nama kolom di data
    const datasetLabels = Object.keys(data[0]).filter((key) => key !== "prodi");
  
    // Loop melalui datasetLabels dan buat dataset untuk setiap label
    datasetLabels.forEach((label) => {
      const datasetData = data.map((item) => parseInt(item[label]));
  
      datasets.push({
        label: label,
        data: datasetData,
        backgroundColor: CihuyRandomColor(), 
        borderColor: CihuyRandomColor(),
        borderWidth: 1,
      });
    });
  
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
            legend: {
              display: true,
              position: 'top',
            },
          },
          elements: {
            bar: {
              borderWidth: 1, // Lebar garis batang
              barPercentage: 0.05, // Mengatur lebar relatif batang (0.5 adalah setengah lebar default)
              categoryPercentage: 0.1, // Mengatur lebar relatif kategori (0.7 adalah 70% lebar default)
            },
          },
      },
    });
  }
  
  // Fungsi untuk mendapatkan warna acak
  function CihuyRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
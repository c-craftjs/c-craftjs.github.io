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
        backgroundColor: getRandomColor(), // Fungsi untuk mendapatkan warna acak
        borderColor: getRandomColor(), // Fungsi untuk mendapatkan warna acak
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
      },
    });
  }
  
  // Fungsi untuk mendapatkan warna acak
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
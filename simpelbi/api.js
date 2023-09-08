
export function CihuyDataAPI(apiUrl, token, callback) {
    // Membuat objek konfigurasi untuk permintaan fetch
    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // Menggunakan token untuk otorisasi
        'Content-Type': 'application/json',
      },
    };
  
    // Mengirim permintaan fetch ke URL API
    fetch(apiUrl, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Menguraikan respons JSON
      })
      .then(data => {
        // Memanggil callback dengan data yang diterima
        callback(null, data);
      })
      .catch(error => {
        // Memanggil callback dengan kesalahan yang terjadi
        callback(error, null);
      });
  }
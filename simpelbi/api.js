
export function CihuyDataAPI(apiUrl, token, callback) {
    // Membuat objek konfigurasi untuk permintaan fetch
    // const spinner = tableBody.querySelector(".spinner");
    // spinner.style.display = "block";
    const requestOptions = {
        method: 'GET',
        headers: new Headers({
          'Authorization': `Bearer ${token}`, // Menggunakan token untuk otorisasi
          'Content-Type': 'application/json',
          'LOGIN': token, // Menambahkan header "LOGIN" dengan token
        }),
      };
    

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
        // spinner.style.display = "none";

      })
      .catch(error => {
        // Memanggil callback dengan kesalahan yang terjadi
        callback(error, null);
        // spinner.style.display = "none";

      });
  }


  export function CihuyPostApi(url, token, data) {
    const myHeaders = new Headers();
    myHeaders.append("LOGIN", token);
    myHeaders.append("Content-Type", "application/json"); // Mengubah Content-Type menjadi JSON

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data), // Mengonversi objek JavaScript ke JSON
        redirect: 'follow'
    };

    return fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
}

export function CihuyUpdateAPI(apiUrl, token, data, callback) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("LOGIN", token);

  const requestOptions = {
    method: 'PUT', // Anda bisa mengganti metode menjadi 'PATCH' jika sesuai dengan API Anda
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: 'follow'
  };

  fetch(apiUrl, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      callback(null, data);
    })
    .catch(error => {
      callback(error, null);
    });
}



export function CihuyDeleteAPI(apiUrl, token, callback) {
  const requestOptions = {
      method: 'DELETE', // Menggunakan metode DELETE
      headers: new Headers({
        'Authorization': `Bearer ${token}`, // Menggunakan token untuk otorisasi
        'Content-Type': 'application/json',
        'LOGIN': token, // Menambahkan header "LOGIN" dengan token
      }),
  };

  fetch(apiUrl, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Menguraikan respons JSON
    })
    .then(data => {
      callback(null, data);    
    })
    .catch(error => {
      callback(error, null);
    });
}

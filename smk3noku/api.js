

export function CihuyGetAPI(apiUrl, token, callback) {

    const requestOptions = {
        method: 'GET',
        headers: new Headers({
          'Authorization': `Bearer ${token}`, // Menggunakan token untuk otorisasi
          'Content-Type': 'application/json',
          'access_token': token, // Menambahkan header "access_token" dengan token
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

  export function CihuyWithoutToken(apiUrl, callback) {
    // Membuat objek konfigurasi untuk permintaan fetch
    const requestOptions = {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
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
      })
      .catch(error => {
        // Memanggil callback dengan kesalahan yang terjadi
        callback(error, null);
      });
  }
  

  export function CihuyPostApi(url, token, data) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`); 


    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        
    };
    console.log('Sending request to:', url);
    console.log('Request body:', data);
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


export function CihuyUpdateApi(apiUrl, token, data, callback) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("access_token", token);

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
      // Mengembalikan respons sebagai teks
      return response.text();
    })
    .then(responseText => {
      try {
        const jsonData = JSON.parse(responseText);
        callback(null, jsonData);
      } catch (error) {
        // Tangani jika respons tidak dapat diuraikan sebagai JSON
        callback(error, null);
      }
    })
    .catch(error => {
      callback(error, null);
    });
}

//FUNGSI UPDATE DIBAWAH DENGAN MENGEMBALIKAN PROMISE YA
export function CihuyUpdateApi2(apiUrl, token, data) {
  return new Promise((resolve, reject) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("access_token", token);

    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: 'follow'
    };

    fetch(apiUrl, requestOptions)
      .then(response => {
        if (!response.ok) {
          reject(new Error(`HTTP error! Status: ${response.status}`));
        }
        return response.json();
      })
      .then(responseData => {
        resolve(responseData);
      })
      .catch(error => {
        reject(error);
      });
  });
}



export function CihuyDeleteAPI(apiUrl, token, callback) {
  const requestOptions = {
      method: 'DELETE', // Menggunakan metode DELETE
      headers: new Headers({
        'Authorization': `Bearer ${token}`, // Menggunakan token untuk otorisasi
        'Content-Type': 'application/json',
        'access_token': token, // Menambahkan header "access_token" dengan token
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

export function CihuyPostAPI2(apiUrl, token, data, callback) {


  const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json', 

          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
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
z
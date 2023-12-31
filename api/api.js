
// Fungsi untuk melakukan permintaan GET tanpa otentikasi
export async function CihuyGetOne(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

// Fungsi untuk melakukan permintaan POST tanpa otentikasi
export async function CihuyPost(url, body) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const data = await response.json();
  return data;
}


 // Fungsi untuk melakukan permintaan PUT (Update) tanpa otentikasi
export async function CihuyUpdate(url, body) {
  const response = await fetch(url, {
    method: 'PUT', // Menggunakan metode PUT untuk permintaan update
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const data = await response.json();
  return data;
}

// Fungsi untuk melakukan permintaan DELETE tanpa otentikasi
export async function CihuyDelete(url) {
  const response = await fetch(url, {
    method: 'DELETE', // Menggunakan metode DELETE untuk permintaan penghapusan
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
} 

//fungsi get withheader

export async function CihuyGetwithHeaders(url, headers = {}) {
    return fetch(url, { headers })
    .then(response => response.json());
  }
  
// Fungsi untuk melakukan permintaan GET dengan token otentikasi
export async function CihuyGetWithToken(url, token) {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.json();
    return data;
  }
  
// Fungsi untuk melakukan permintaan POST dengan token otentikasi
export async function CihuyPostWithToken(url, body, token) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    return data;
}

// Fungsi untuk melakukan permintaan GET dengan header "login" dari nilai cookie QrCode WhatsAuth
export async function CihuyGetWithCookieLogin(url, cookieName) {
    const cookies = document.cookie.split('; ');
    let cookieValue = null;
  
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === cookieName) {
        cookieValue = value;
        break;
      }
    }
  
    const response = await fetch(url, {
      headers: {
        login: cookieValue
      }
    });
  
    const data = await response.json();
    return data;
  }


// Fungsi Get Simpelbi
// export function CihuyGetSimpelbi(target_url, responseFunction,token) {
//   const myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.append("Authorization", `Bearer ${token}`);
//   let requestOptions = {
//     method: "GET",
//     redirect: "follow",
//     headers: myHeaders,
//   };

//   fetch(target_url, requestOptions)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.text();
//     })
//     .then((result) => responseFunction(JSON.parse(result)))
//     .catch((error) => console.error("Error:", error));
// }


// export function ResponseGet(responseData) {
//   console.log(responseData);
// }

export async function CihuyGet(url) {
  const response = await fetch(url);
  
  if (!response.ok) {
    // Handle non-OK responses here
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const contentType = response.headers.get("Content-Type");
  
  if (contentType && contentType.includes("application/json")) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Response is not in JSON format");
  }
}

export function CihuyGetHeaders(url, token) {
  const myHeaders = new Headers();
  myHeaders.append("LOGIN", token);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
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

//untuk post kesana
export function CihuyPostHeaders(url, token) {
  const myHeaders = new Headers();
  myHeaders.append("LOGIN", token);
  myHeaders.append("Content-Type", "application/json"); // Set content type for JSON data

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
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






  

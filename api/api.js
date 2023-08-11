
// Fungsi untuk melakukan permintaan GET tanpa otentikasi
export async function CihuyGet(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

//fungsi get withheader

export async function CihuyGetwithHeaders(url, headers = {}) {
    return fetch(url, { headers })
    .then(response => response.json());
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
    
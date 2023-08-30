

// 
export function CihuyTokRed(namacookie, redirectUrl) {
  const token = CihuyGetCookie(namacookie);

  if (!token) {
    window.location.assign(redirectUrl);
    return;
  } 
}

// Fungsi untuk mendapatkan token dari cookies
export function CihuyGetCookie(cookieName) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName + '=') === 0) {
      return true; 
    }
  }
  return false;
}

export function CihuyRole(userRole) {
  let dashboardUrl = '';

  if (userRole === 'admin') {
    dashboardUrl = 'dashboard.html';
  } else if (userRole === 'prodi') {
    dashboardUrl = 'dashboard-prodi.html';
  } else {
    // Tindakan jika rolenya tidak sesuai dengan yang diharapkan
  }

  if (dashboardUrl) {
    window.location.href = dashboardUrl;
  }
}





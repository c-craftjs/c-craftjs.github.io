// root.js

export function CihuyRootLink(href, text) {
    const rootLink = document.createElement('a');
    rootLink.href = href;
    rootLink.textContent = text;
    document.body.appendChild(rootLink);
  }


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
  for (const i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName + '=') === 0) {
      return true; 
    }
  }
  return false;
}





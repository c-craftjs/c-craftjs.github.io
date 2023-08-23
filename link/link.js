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
  } else {
    console.log("Token valid!");
  }
}

// Fungsi untuk mendapatkan token dari cookies
function CihuyGetCookie(name) {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieParts = decodedCookie.split(';');

  for (let i = 0; i < cookieParts.length; i++) {
    const cookie = cookieParts[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length);
    }
  }

  return null;
}




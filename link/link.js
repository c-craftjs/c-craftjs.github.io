// root.js

export function CihuyRootLink(href, text) {
    const rootLink = document.createElement('a');
    rootLink.href = href;
    rootLink.textContent = text;
    document.body.appendChild(rootLink);
  }


// 

function CihuyTokRed(redirectUrl) {
  const token = getTokenFromHeader();

  if (!token) {
    window.location.href = redirectUrl;
  } else {
    console.log("Token valid!");
  }
}

// Fungsi untuk mendapatkan token dari cookies
function getTokenFromCookies() {
  const cookies = parseCookies();
  return cookies.token || "";
}

// Fungsi untuk mengurai cookies
function parseCookies() {
  const cookiePairs = document.cookie.split("; ");
  const cookies = {};

  cookiePairs.forEach(pair => {
    const [key, value] = pair.split("=");
    cookies[key] = decodeURIComponent(value);
  });

  return cookies;
}

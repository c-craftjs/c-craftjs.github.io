// root.js

export function CihuyRootLink(href, text) {
    const rootLink = document.createElement('a');
    rootLink.href = href;
    rootLink.textContent = text;
    document.body.appendChild(rootLink);
  }


// 

function CihuyTokRed(redirectUrl) {
  const token = GetToken();

  if (!token) {
    window.location.href = redirectUrl;
  } else {
    console.log("Token valid!");
  }
}

// Fungsi untuk mendapatkan token dari cookies
function GetToken() {
  const cookies = cekcookie();
  return cookies.token || "";
}

// Fungsi untuk mengurai cookies
function cekcookie() {
  const cookiePairs = document.cookie.split("; ");
  const cookies = {};

  cookiePairs.forEach(pair => {
    const [key, value] = pair.split("=");
    cookies[key] = decodeURIComponent(value);
  });

  return cookies;
}

//

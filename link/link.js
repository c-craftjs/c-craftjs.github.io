// root.js

export function CihuyRootLink(href, text) {
    const rootLink = document.createElement('a');
    rootLink.href = href;
    rootLink.textContent = text;
    document.body.appendChild(rootLink);
  }


// 

export function CihuyTokRed(redirectUrl) {

  if (!token) {
    window.location.assign = redirectUrl;
  } else {
    console.log("Token valid!");
  }
  return;
}

// Fungsi untuk mendapatkan token dari cookies
export function CihuyGetCookie(name) {
  var cookieName = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieParts = decodedCookie.split(';');

  for (var i = 0; i < cookieParts.length; i++) {
      var cookie = cookieParts[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length);
      }
  }

  return null;
}





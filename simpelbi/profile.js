import { CihuyDataAPI } from "https://c-craftjs.github.io/simpelbi/api.js";
import { CihuyGetCookie } from "https://c-craftjs.github.io/cookies/cookies.js";

 const token = CihuyGetCookie("login");

  const UrlProfile = "https://simbe-dev.ulbi.ac.id/api/v1/profile/";

export function populateUserProfile() {
    CihuyDataAPI(UrlProfile, token, (error, response) => {
      if (error) {
        console.error("Terjadi kesalahan:", error);
      } else {
        const data = response.data;
  
        // Pastikan data ada dan sesuai dengan struktur yang diharapkan
        if (data) {
          const nama = data.nama_user;
          const level = data.nama_level;
          const email = data.email;
          const fotoUrl = `https://simbe-dev.ulbi.ac.id/static/pictures/${data.foto}`;
  
          // Isi elemen-elemen HTML dengan data profil
          const navItemTitle = document.querySelector(
            "#nav-author .nav-item__title"
          );
  
          const authorName = document.querySelector(".nav-item_nama");
          const authorLevel = document.querySelector(".nav-item_level");
          const authorEmail = document.querySelector(".nav_email");
          const authorImage = document.querySelector(".author-img img");
          const navItemPhoto = document.getElementById("navItemPhoto");
  
          navItemTitle.textContent = nama;
          navItemPhoto.src = fotoUrl;
  
          authorName.textContent = nama;
          authorLevel.textContent = level;
          authorEmail.textContent = email;
          authorImage.src = fotoUrl;
        } else {
          console.error("Data profil tidak sesuai.");
          console.log(data);
        }
      }
    });
  }
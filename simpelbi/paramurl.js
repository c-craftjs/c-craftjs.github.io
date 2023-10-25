export function getIdAmiFromURL() {
    // Mendapatkan URL saat ini
    const currentURL = window.location.href;
  
    // Menganalisis URL untuk mendapatkan parameter 'id_ami'
    const urlParams = new URLSearchParams(new URL(currentURL).search);
    const idAmi = urlParams.get("id_ami");
  
    return idAmi;
  }
  
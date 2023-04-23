function mostraTesto(stringa) {
    var x = document.getElementById(stringa);
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
    }

function darkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
  }
  
function loadDarkMode() {
    if (typeof(Storage) !== "undefined") {
      var isDarkMode = localStorage.getItem("dark-mode") === "true";
      if (isDarkMode) {
        document.body.classList.add("dark-mode");
      }
    } else {
      console.log("Sorry, your browser does not support web storage...");
    }
  }

  function copiaTesto() {
    var testo = document.getElementById("testoDaCopiare").innerText;
    navigator.clipboard.writeText(testo);
  }

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

  function submitNumber() {
    let inputString = document.getElementById("inputNumber").value;
    let decimalNumber = parseInt(inputString);
    if (decimalNumber >= 0) {
        let realBinary = decimalNumber.toString(2);
        realBinary = "0" + realBinary;
        document.getElementById("result").innerHTML = realBinary;
    } else {
        let absoluteDecimalNumber = Math.abs(decimalNumber);
        let realBinary = absoluteDecimalNumber.toString(2);
        let result = twoComplement(realBinary);
        document.getElementById("result").innerHTML = result;
    }
}


function twoComplement(binaryString) {
  let invertedString = "";
  for (let i = 0; i < binaryString.length; i++) {
      invertedString = invertedString + (binaryString[i] === "0" ? "1" : "0");
  }

  let carry = 1;
  let result = "";
  for (let i = binaryString.length - 1; i >= 0; i--) {
      let sum = carry + parseInt(invertedString[i]);
      result = (sum % 2) + result;
      carry = Math.floor(sum / 2);
  }

  result = "1" + result;
  return result;
}

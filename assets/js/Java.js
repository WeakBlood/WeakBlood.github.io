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
    if (isBinaryString(inputString)){
        let result = twoComplement(inputString);
        document.getElementById("result").innerHTML = result;
    }
    else{
        let decimalNumber = parseInt(inputString);
        if (decimalNumber >= 0) {
            let realBinary = decimalNumber.toString(2);
            document.getElementById("result").innerHTML = realBinary;
        } else {
            let realBinary = Math.abs(decimalNumber).toString(2);
            let result = twoComplement(realBinary);
            document.getElementById("result").innerHTML = result;
        }
    }
}


function twoComplement(binaryString) {
  let invertedString = "";
  for (let i = 0; i < binaryString.length; i++) {
      invertedString += binaryString[i] === "0" ? "1" : "0";
  }
  
  let carry = 1;
  let result = "";
  for (let i = binaryString.length - 1; i >= 0; i--) {
      let sum = carry + parseInt(invertedString[i]);
      result = (sum % 2) + result;
      carry = Math.floor(sum / 2);
  }

  return result;
}

function isBinaryString(string) {
  for (let i = 0; i < string.length; i++) {
      if (string[i] !== "0" && string[i] !== "1") {
          return false;
      }
  }
  return true;
}






const colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan'];

function generateArt() {
  const symbol = document.getElementById('symbol').value;
  const inputText = document.getElementById('inputText').value.toUpperCase();
  const output = document.getElementById('output');
  output.innerHTML = "";

  // Validate input symbol
  const allowed = /^[A-Za-z0-9~`@#$%!^&*()_\-+={}\[\]|\\':;"\/<>,.?]{1}$/;

  if (!allowed.test(symbol)) {
    alert("❌ Please enter exactly ONE valid character (A-Z, 0-9, or symbol like #, $, %, etc.)");
    return;
  }


  // Proceed only if symbol is valid
  const words = inputText.split(/\s+/);
  let finalOutput = "";

  for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
    const word = words[wordIndex];
    const n = word.length;
    const lettersPerLine = 10;
    const totalRows = Math.ceil(n / lettersPerLine);

    for (let row = 0; row < totalRows; row++) {
      for (let i = 1; i <= 5; i++) {
        let line = "";
        for (let l = row * lettersPerLine; l < Math.min(n, (row + 1) * lettersPerLine); l++) {
          const ch = word[l];
          const color = colors[l % colors.length];
          line += drawChar(ch, i, symbol, color) + "  ";
        }
        finalOutput += line + '\n';
      }
      finalOutput += '\n';
    }
  }

  output.innerHTML = finalOutput;
}

function drawChar(ch, i, symbol, color) {
  let line = "";

  switch (ch) {
    case 'A':
      for (let j = 1; j <= 9; j++) {
        if ((j > 5 && j - i === 4) || (i + j === 6 && j < 6) || (i === 3 && j > 2 && j < 8)) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;

    case 'B':
      for (let j = 1; j <= 4; j++) {
        if (j === 1 || (i === 1 && j < 4) || (i === 3 && j < 4) || (i === 5 && j < 4) || (j === 4 && (i === 2 || i === 4))) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;

    case 'C':
      for (let j = 1; j <= 4; j++) {
        if ((i === 1 || i === 5) && j > 1 || (j === 1 && i > 1 && i < 5)) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;
    case 'D':
      for (let j = 1; j <= 4; j++) {
        if ((i === 5 && j < 4) || (j === 4 && i > 1 && i < 5) || (i === 1 && j < 4) || j === 1) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;

            //E

    case 'E':
      for (let j = 1; j <= 4; j++) {
        if (i === 1 || i === 3 || i === 5 || j === 1) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;
            
    case 'F':
      for (let j = 1; j <= 4; j++) {
        if (i === 1 || i === 3 || j === 1) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;

    case 'G':
    case 'g':
      for (let j = 1; j <= 4; j++) {
        if ((i === 1 && j > 1) || (i === 5 && j > 1) || (j === 1 && i > 1 && i < 5) || (j === 4 && i !== 2) || (i === 3 && j > 2)) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;

    case 'H':
      for (let j = 1; j <= 4; j++) {
        if(i==3||j==1||j==4){
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;

    //G

    case 'I':
      for (let j = 1; j <= 5; j++) {
        if (i === 1 || i === 5 || j === 3) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;

    //j

    case 'J':
      for (let j = 1; j <= 5; j++) {
        if (i === 1 || j === 3 || (i === 5 && j > 1 && j < 4) || (j === 1 && i > 3)) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;


    //K
    case 'K':
      for (let j = 1; j <= 4; j++) {
        if (i + j === 5 || i - j === 1 || j === 1) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;

    //L
    case 'L':
      for (let j = 1; j <= 4; j++) {
        if (j === 1 || i === 5) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
    }
      break;

                    
            //M
    case 'M':
      for (let j = 1; j <= 5; j++) {
        if ((i === j && i < 4) || (i + j === 6 && i < 4) || j === 5 || j === 1) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
                  line += " ";
                }
              }
              break;

            //N

                 
    case 'N':
      for (let j = 1; j <= 5; j++) {
        if (j === 1 || j === 5 || j === i) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;

            //O
    case 'O':
      for (let j = 1; j <= 5; j++) {
        if ((i === 5 && j < 4 && j > 1) || (j === 4 && i > 1 && i < 5) || (i === 1 && j < 4 && j > 1) || (j === 1 && i > 1 && i < 5)) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;

    //P
    case 'P':

        for (let j = 1; j <= 4; j++) {
          if ((j === 1) || (i === 1 && j < 4) || (i === 3 && j < 4) || (j === 4 && i === 2)) {
            line += `<span style="color:${color}">${symbol}</span>`;
          } else {
            line += " ";
          }
        }
        break;
                                
                     
            //Q

    case 'Q':
      for (let j = 1; j <= 5; j++) {
        if ((i === 5 && j < 4 && j > 1) || (j === 4 && i > 1 && i < 5) || (i === 1 && j < 4 && j > 1) || (j === 1 && i > 1 && i < 5) || (i === j && i > 2)) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;

    //R
    case 'R':
      for (let j = 1; j <= 5; j++) {
          if ((i === 3 && j < 5) || (j === 5 && i === 2) || (i === j && i > 2) || j === 1 || (i === 1 && j < 5)) {
            line += `<span style="color:${color}">${symbol}</span>`;
          } else {
            line += " ";
          }
        }
      
      break;

    //S

    case 'S':
      for (let j = 1; j <= 5; j++) {
        if ((i === 1 && j > 1) || (i === 3 && j > 1 && j < 5) || (i === 5 && j < 5) || (j === 1 && i === 2) || (j === 5 && i === 4)) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;

                   
        
            //T
    case 'T':
      for (let j = 1; j <= 5; j++) {
        if (i === 1 || j === 3) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;

            

            //U

    case 'U':
      for (let j = 1; j <= 5; j++) {
        if ((i === 5 && j < 4 && j > 1) || (j === 4 && i < 5) || (j === 1 && i < 5)) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;

    //V

    case 'V':
  if (i > 5) break; // No need to draw anything beyond row 5
  for (let j = 1; j <= 9; j++) {
    if ((i === j && i < 5) || (i + j === 10 && i <= 5)) {
      line += `<span style="color:${color}">${symbol}</span>`;
    } else {
      line += " ";
    }
  }
  break;


                
            //W   

    case 'W':
      for (let j = 1; j <= 5; j++) {
        if ((i === j && i > 2) || (i + j === 6 && i > 2) || j === 5 || j === 1) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;
    //X
    case 'X':
      for (let j = 1; j <= 5; j++) {
        if (i === j || i + j === 6) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;

    //Y

   
    case 'Y':
      for (let j = 1; j <= 5; j++) {
        if ((i === j && i < 3) || (i + j === 6 && i < 3) || (j === 3 && i > 2)) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;

    //Z

    case 'Z':
      for (let j = 1; j <= 5; j++) {
        if (i + j === 6 || i === 1 || i === 5) {
          line += `<span style="color:${color}">${symbol}</span>`;
        } else {
          line += " ";
        }
      }
      break;

      default:
      line += "     ";
  }

  return line;
}



function downloadArt() {
  const output = document.getElementById('output').innerText;

  if (!output.trim()) {
    alert("❌ Nothing to download. Generate something first.");
    return;
  }

  const blob = new Blob([output], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = "ascii-art.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


function downloadImage() {
  const outputEl = document.getElementById('output');

  if (!outputEl.innerText.trim()) {
    alert("❌ Nothing to download. Generate something first.");
    return;
  }

  html2canvas(outputEl, {
    backgroundColor: '#111', // Set background for canvas
    scale: 2                // Higher scale = better quality
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'ascii-art.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}
function clearAll() {
  document.getElementById('symbol').value = "";
  document.getElementById('inputText').value = "";
  document.getElementById('output').innerHTML = "";
}


function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}


// Load saved theme on page load
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
};
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

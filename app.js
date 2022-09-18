let screen = document.getElementById("screen");

let dotFlag = 0;
let oprFlag = 0;

function numClick(num) {
   screen.value = screen.value + num;
}


function operator(opr) {
   if (oprFlag === 0) {
      screen.value = screen.value + opr;
      oprFlag = 1
   } else {
      screen.value = screen.value;
   }
}

function addDot() {
   if (dotFlag === 0) {
      screen.value = screen.value + ".";
      dotFlag = 1;
   } else {
      screen.value = screen.value;
   }
}


function clearDisplay() {
   screen.value = "";
   dotFlag = 0;
   oprFlag = 0;
}

function equalTo() {
   screen.value = eval(screen.value)
   dotFlag = 0;
   oprFlag = 0;
}
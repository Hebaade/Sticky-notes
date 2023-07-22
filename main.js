let conteiner2 = document.getElementById("container2");
let conteiner3 = document.getElementById("container3");
let closE = document.getElementById("close");
let check = document.getElementById("check");
let create = document.getElementById("create");
var i = 0;
closE.addEventListener("click", function () {
  TypeNote();
});
check.addEventListener("click", function () {
  createNote();
});
function TypeNote() {
  if (conteiner3.style.display == "none") {
    conteiner3.style.display = "block";
  } else {
    conteiner3.style.display = "none";
  }
}
function createNote() {
  var noteText = document.getElementById("note-text").value;
  var node0 = document.createElement("div");
  var node1 = document.createElement("h1");
  node1.innerHTML = noteText;
  node1.setAttribute(
    "style",
    "width:250px; height:250px;font-size:26px;padding:25px;overflow:hidden;margin-top:10px;box-shadow:0px 10px 24px 0 rgba(0,0,0,0.75)"
  );
  node0.appendChild(node1);
  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.backgroundColor = color();
  conteiner2.insertAdjacentElement("beforeend", node0);
  node0.addEventListener("mouseenter", function () {
    node0.style.transform = "scale(1.1)";
  });
  node0.addEventListener("mouseleave", function () {
    node0.style.transform = "scale(1)";
  });
  node0.addEventListener("dblclick", function () {
    node0.remove();
  });
  document.getElementById("note-text").value = "";
}

function margin() {
  var random_margin = ["-5px", "5px", "1px", "10px", "15px", "20px" ,"-1px","-2px", "3px"];
  return random_margin[Math.floor(Math.random() * random_margin.length)];
}
local()
function rotate() {
  var random_rotate = [
    "rotate(30deg)",
    "rotate(40deg)",
    "rotate(-3deg)",
    "rotate(-1deg)",
    "rotate(1deg)",
    "rotate(-5deg)",
    "rotate(10deg)",
    "rotate(2deg)",
    "rotate(-2deg)",
  ];
  return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}
window.localStorage.clear()
function color() {
  var random_color = [
    "red",
    "green",
    "blue",
    "brown",
    "yellow",
    "darkblue",
    "purple",
    'pink',
    "black",
    "lightgreen",
    "lime",
  ];
  if (i > random_color.length - 1) {
    i = 0;
  }
  return random_color[i++];
}

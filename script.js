let diff = 0;
const txt = ["Web Designer","freelancer", "Developer"];
const speed = 50;
let interv;

function typeWriter() {
  const dis = document.getElementById("oneName");
  if (diff < txt[0].length) {
    dis.innerHTML += txt[0].charAt(diff);
    diff++;
  } else if (dis.innerHTML.length > 0) {
    dis.innerHTML = dis.innerHTML.slice(0, -1);
  } else {
    clearInterval(interv);
    txt.push(txt.shift());
    diff = 0;
    setTimeout(startTyping, 1000);
  }
}

function startTyping() {
  interv = setInterval(typeWriter, 200);
}

startTyping();





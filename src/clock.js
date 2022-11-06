const now = document.querySelector(".now");
const clock = document.querySelector(".clock");

function clockFn(){
  const date = new Date();
  const year = String(date.getFullYear()).padStart(2, "0");
  const month = String(date.getMonth()+1).padStart(2, "0"); 
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour} : ${min} : ${sec}`;
  now.innerText = `${year}/${month}/${day}`;
}
clockFn();
setInterval(clockFn, 1000);
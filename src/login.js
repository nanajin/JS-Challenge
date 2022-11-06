const signUpForm = document.querySelector(".signUp");
const loginForm = document.querySelector(".login");
const isLogin = document.querySelector(".loginSuccess");
const loginUser = isLogin.querySelector(".todolist h1");
const noLogin = document.querySelector(".no-login");
const userInfo = localStorage.getItem("userInfo");
const logout = document.querySelector(".logout");

let login = false;
function handleLogOut(){
  localStorage.removeItem("userInfo");
  confirm("로그아웃 하시겠습니까?");
  window.location.reload();
}
logout.addEventListener("click", handleLogOut);

if(userInfo){
  login = true;
  const user = JSON.parse(userInfo);
  signUpForm.hidden = true;
  loginForm.hidden = true;
  isLogin.hidden = false;
  loginUser.innerText = `Welcome ${user[0].id}`;
  noLogin.hidden = true;
}
else{
loginForm.hidden = true;
isLogin.hidden = true;

function handleSignUp(event){
  event.preventDefault();
  
  const idInput = signUpForm.querySelector("#signUpId").value;
  const pwdInput = signUpForm.querySelector("#signUpPwd").value;
  const user = [{id: idInput, pwd: pwdInput}];
  localStorage.setItem("userInfo", JSON.stringify(user));
  signUpForm.hidden = true;
  loginForm.hidden = false;
}
function handleLogin(event){
  event.preventDefault();
  const idInput = loginForm.querySelector("#id").value;
  const pwdInput = loginForm.querySelector("#pwd").value;
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // let login = false;
  userInfo.forEach(user => {
    if(user.id === idInput){
      if(user.pwd === pwdInput){
        login = true;
      }
    }
  });
  if(login){
    loginForm.hidden = true;
    isLogin.hidden = false;
    loginUser.innerText = `Welcome ${idInput}`;
    noLogin.hidden = true;
  }
  else{
    alert("없는 회원입니다");
  }
}
}
signUpForm.addEventListener("submit", handleSignUp);
loginForm.addEventListener("submit", handleLogin);

//로그아웃, 사람마다 로그인 다르게, 투두리스트 저장 가능하게
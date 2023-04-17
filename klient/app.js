async function login() {
  const formLogin = document.getElementById("login").value;
  const formPass = document.getElementById("pass").value;

  const data = await fetch(
    `http://localhost:3001/login/${formLogin}/${formPass}`
  );
  const json = await data.json();

  console.log(json);

  localStorage.setItem("Login", JSON.stringify(json));
}

function adminpage() {
  const Login = localStorage.getItem("Login");

  if (login.status == false) {
    window.location.href = "Login.html";
  }
}

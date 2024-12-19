const defaultUser = {
    username: "La Juanda",
    password: "221011400956"
  };
  if (!localStorage.getItem("user")) {
    localStorage.setItem("user", JSON.stringify(defaultUser));
  }
  
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");
  
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (usernameInput === storedUser.username && passwordInput === storedUser.password) {
      alert("Login successful!");
      errorMessage.textContent = "";
  
    } else {
      errorMessage.textContent = "Username or password is incorrect.";
    }
  });
  
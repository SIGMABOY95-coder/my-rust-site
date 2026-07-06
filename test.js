function checkPassword() {
  const input = document.getElementById("password-input").value;
  const lockscreen = document.getElementById("lockscreen");
  const errorMessage = document.getElementById("error-message");

  const secretCode = "sigmaboy2026";

  if (input === secretCode) {
    lockscreen.classList.add("lockscreen--hidden");
  } else {
    errorMessage.textContent = "НЕВЕРНЫЙ КОД! ДОСТУП ЗАПРЕЩЕН.";
    document.getElementById("password-input").value = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const chatIcon = document.querySelector(".chat-icon");
  const chatWindow = document.querySelector(".chat-window");
  const chatClose = document.querySelector(".chat-close");

  chatIcon.addEventListener("click", function () {
    chatWindow.style.display = "flex";
  });

  chatClose.addEventListener("click", function () {
    chatWindow.style.display = "none";
  });
});

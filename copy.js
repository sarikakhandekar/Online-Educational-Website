function myFunction() {
  let menu = document.querySelector(".nav-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
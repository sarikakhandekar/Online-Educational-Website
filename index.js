function myFunction() {
  let menu = document.querySelector(".nav-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

let currentIndex = 0;

function scrollCards(direction) {
  const container = document.getElementById("cards");
  const cards = container.querySelectorAll(".card");
  const visibleCards = 2;
  const totalCards = cards.length;

  const maxIndex = totalCards - visibleCards;

  currentIndex += direction;

  // Looping logic
  if (currentIndex > maxIndex) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = maxIndex;
  }
  
  const card = cards[0];
  const cardStyle = getComputedStyle(card);
  const cardWidth = card.offsetWidth;
  const gap = parseInt(getComputedStyle(container).gap || "20");
  
  const offset = -(currentIndex * (cardWidth + gap));

  container.style.transform = `translateX(${offset}px)`;
}

let journeyMode = false;

function toggleJourney() {
  journeyMode = !journeyMode;

  document.body.style.background = journeyMode ? "#111" : "#0a0a0a";

  alert(journeyMode 
    ? "Journey Mode ON: You are seeing our evolution." 
    : "Journey Mode OFF");
}

function toggleCard(card) {
  let text = card.querySelector(".hidden");

  text.style.display = text.style.display === "block" ? "none" : "block";
}

function contact() {
  window.location.href = "mailto:safarstudio@gmail.com";
}
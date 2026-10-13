function openCard() {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("birthday").style.display = "block";

}

const birthdayMessages = [
  "Zaslužuješ sve najlepše na ovom svetu! 💗",
  "Hvala ti za sve naše uspomene i gluposti. 😂",
  "Želim ti godinu punu putovanja i avantura! ✈️",
  "Nikada nemoj da prestaneš da budeš tako posebna. 🎀",
  "Još mnogo naših girls' date večeri! 🥂",
  "Nadam se da će ti se ostvariti sve što želiš. ✨",
  "Volim te najviše i srećan ti rođendan! 💕"
];

function showMessage(index) {
  document.getElementById("messageText").textContent =
    birthdayMessages[index];

  document.getElementById("messageBox").style.display = "block";
  document.querySelector("h2").style.display ="none";

 document.querySelectorAll(".candle").forEach((candle,i) => {
    candle.style.display = i === index ? "block" : "none";
 });
 document.querySelector(".birthday h2").style.display = "none";
document.querySelector(".cake").style.display = "none";
document.getElementById("messageBox").style.display = "block";

}

function closeMessage() {
  document.getElementById("messageBox").style.display = "none";
  document.querySelector("h2").style.display = "block";
  
 document.querySelectorAll(".candle").forEach((candle,i) => {
    candle.style.display =  "";
 });
document.querySelector(".birthday h2").style.display = "block";
document.querySelector(".cake").style.display = "block";
document.getElementById("messageBox").style.display = "none";
}

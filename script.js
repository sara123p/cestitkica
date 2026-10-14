function openCard() {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("birthday").style.display = "block";

}

const birthdayMessages = [
  "Želim ti da ostaneš puna pozitivne energije i da nastaviš da inspirišeš ljude da daju sve od sebe za stvari koje žele💗",
  " Želim ti da ti se sva ljubav, pažnja i posvećenost koju pružaš drugima uvek vraćaju, jer ih samo takve i zaslužuješ💕",
  "Želim ti da naše spontane bleje, gledanje serija i ogovaranje nikad ne prestanu i da ostaneš takva kakva jesi✨",
  "Želim ti još puno vlogova sa putovanja i dobrih izlazaka za koje uvek imaš još bolje outfite jer si naravno najjača riba u gradu💗",
  "Želim ti da ti ormar uvek bude pun dobrih outfita i galerija puna lepih slika🎀",
  "Želim ti da obiđeš ceo svet(doslovno svaku zemlju na svetu), da odeš na koncert Taylor Swift i da zauvek ostaneš sjajan prijatelj✈️",
  "Želim ti da u životu uspešno radiš sve što te ispunjava i da uvek budeš najbolja u tome🥂"
];

function showMessage(index) {
    
document.querySelector(".extra-button").style.display = "none";

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
    
document.querySelector(".extra-button").style.display = "block";

  document.getElementById("messageBox").style.display = "none";
  document.querySelector("h2").style.display = "block";
  
 document.querySelectorAll(".candle").forEach((candle,i) => {
    candle.style.display =  "";
 });
document.querySelector(".birthday h2").style.display = "block";
document.querySelector(".cake").style.display = "block";
document.getElementById("messageBox").style.display = "none";
}


function showFinalPage() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("birthday").style.display = "none";
    document.getElementById("finalPage").style.display = "flex";
}
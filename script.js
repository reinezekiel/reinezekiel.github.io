const message = `Happy 2nd Monthsary baby! ginawa ko tong letter na to para mabasa mo pa din kahit malayo ka. Today is our very special day and it’s hard to believe that it has been 2 months since we officially became a couple.\n\nEvery moment with you feels like magic. Every day spent with you is a blessing, and i am grateful for each and every moment we share.\n\nKahit anong mangyari, you will always have a special place in my heart. You will always be my love, my baby, my peace, my home and my happiness.\n\nWords can never justify my love and adoration for you. I Love You So Much!!!';
const music = document.getElementById('bg-music');

function showLetter() {
  // Play music on user interaction (button click)
  music.play().catch((err) => {
    console.warn("Music couldn't autoplay:", err);
  });

  // Hide intro text and button
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  // Show letter and start typing effect after a short delay
  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    
    let i = 0;
    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }
    typeWriter();
  }, 600);
}


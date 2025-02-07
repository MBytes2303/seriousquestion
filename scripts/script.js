let noClickCount = 0;

document.getElementById("yesBtn").addEventListener("click", function () {
  window.location.href = "pages/thankyou!.html"; // Change this to your destination page
});

document.getElementById("noBtn").addEventListener("click", function () {
  let yesBtn = document.getElementById("yesBtn");

  // Increase the Yes button size
  let currentScale =
    parseFloat(yesBtn.style.transform.replace("scale(", "").replace(")", "")) ||
    1;
  let newScale = currentScale + 0.2;
  yesBtn.style.transform = `scale(${newScale})`;
  yesBtn.style.transition = "transform 0.3s ease-in-out";

  // Increase No button click count
  noClickCount++;

  // After three clicks, redirect to a different page
  if (noClickCount >= 5) {
    window.location.href = "pages/ohokay.html"; // Change this to your actual destination page
  }
});

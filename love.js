document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("love-song");
  const playBtn = document.getElementById("play-btn");
  const pauseBtn = document.getElementById("pause-btn");
  const stopBtn = document.getElementById("stop-btn");

  if (audio && playBtn && pauseBtn && stopBtn) {
    // Play the song
    playBtn.addEventListener("click", () => {
      audio.play().catch((error) => {
        console.log("Autoplay blocked:", error);
        alert(
          "Autoplay is blocked. Please interact with the page to allow it."
        );
      });
    });

    // Pause the song
    pauseBtn.addEventListener("click", () => {
      audio.pause();
    });

    // Stop the song (Pause + Reset time)
    stopBtn.addEventListener("click", () => {
      audio.pause();
      audio.currentTime = 0; // Reset to the beginning
    });

    // Optional: Auto-restart when song ends
    audio.addEventListener("ended", () => {
      audio.currentTime = 0;
    });
  } else {
    console.error("One or more elements are missing.");
  }
});

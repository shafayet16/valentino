const audio = document.getElementById("love-song");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");

playBtn.addEventListener("click", () => {
  audio.play();
});
pauseBtn.addEventListener("click", () => {
  audio.pause();
});
stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
});

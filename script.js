function showMessage() {
  const msg = document.getElementById("msg");
msg.innerHTML = `
  <p>जब भी लगी दुनिया की ठोकर, भाई ने संभाल लिया,
खुश रहूं मैं हर पल — बस यही उसने हर बार दुआ में मांग लिया।,
 ❤️</p>
`;
  msg.classList.remove("hidden");
}
const videos = [
      "videos.mp4",
      "video2.mp4",
      "video3.mp4"
    ];

    let current = 0;
    const videoPlayer = document.getElementById("videoPlayer");

    // Set the first video
    videoPlayer.src = videos[current];

    // Play next video when current ends
    videoPlayer.addEventListener("ended", () => {
      current++;
      if (current < videos.length) {
        videoPlayer.src = videos[current];
        videoPlayer.play();
      }
    });

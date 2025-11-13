const soundBtn = document.getElementById("soundBtn");
const sound = document.getElementById("sound");

soundBtn.addEventListener("click", () => {
    // Prevent multiple clicks
    if (soundBtn.classList.contains("disabled")) return;

    // Visually invert & disable
    soundBtn.classList.add("playing", "disabled");

    // Restart and play audio
    sound.currentTime = 0;
    sound.play();

    // When finished, revert styles
    sound.onended = () => {
        soundBtn.classList.remove("playing", "disabled");
    };
});

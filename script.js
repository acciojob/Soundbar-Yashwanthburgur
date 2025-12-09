const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
let currentAudio = null;

// Add click listeners to all .btn buttons
document.querySelectorAll("#buttons .btn").forEach(btn => {
    
    btn.addEventListener("click", () => {
        const sound = btn.textContent.trim();

        // STOP BUTTON
        if (btn.classList.contains("stop")) {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            return;
        }

        // PLAY SOUND BUTTON
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = new Audio(`./sounds/${sound}.mp3`);
        currentAudio.play();
    });
});

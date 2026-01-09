let currentAudio = null;  // ← UNCOMMENT THIS

document.querySelectorAll("#buttons .btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
        const soundName = btn.textContent.trim();

        if (btn.classList.contains("stop")) {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            return;
        }

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = new Audio("./sounds/" + soundName + ".mp3");
        currentAudio.play();
    });
});


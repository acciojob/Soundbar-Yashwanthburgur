let currentAudio = null;

document.querySelectorAll("#buttons .btn").forEach(btn => {
    btn.addEventListener("click", function() {
        const soundName = btn.textContent.trim();
        
        // Stop button logic
        if (btn.classList.contains("stop")) {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentAudio = null;
            }
            return;
        }
        
        // Stop previous sound
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        
        // Play new sound
        currentAudio = new Audio("./sounds/" + soundName + ".mp3");
        currentAudio.play();
    });
});

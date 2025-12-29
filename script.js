let currentAudio = null;  // ← YOU COMMENTED THIS OUT!

document.querySelectorAll("#buttons .btn").forEach(btn => {
    btn.addEventListener("click", function() {
        const soundName = btn.textContent.trim();
        
        if (btn.classList.contains("stop")) {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentAudio = null;
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

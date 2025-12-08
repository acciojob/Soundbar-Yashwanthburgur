// script.js - Try this first
document.addEventListener('DOMContentLoaded', function() {
    let currentAudio = null;
    
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.onclick = function() {
            const soundName = this.textContent.trim();
            
            // Stop button
            if (this.classList.contains('stop')) {
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                }
                return;
            }
            
            // Sound button
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            
            // Just use sound name without folder path
            currentAudio = new Audio(soundName + '.mp3');
            currentAudio.play();
        };
    });
});
}
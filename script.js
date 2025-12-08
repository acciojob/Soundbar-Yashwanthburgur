// script.js - Simple version
document.addEventListener('DOMContentLoaded', function() {
    let currentAudio = null;
    
    // Add click event to buttons container
    document.getElementById('buttons').addEventListener('click', function(event) {
        if (event.target.classList.contains('btn')) {
            const soundName = event.target.textContent.trim();
            
            // Handle stop button
            if (event.target.classList.contains('stop')) {
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                }
                return;
            }
            
            // Handle sound buttons
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            
            // Try with just the sound name (some platforms pre-load the files)
            currentAudio = new Audio(`${soundName}.mp3`);
            
            // Add error handling
            currentAudio.addEventListener('error', function() {
                // Try alternative path
                currentAudio.src = `./sounds/${soundName}.mp3`;
                currentAudio.play().catch(() => {
                    console.error('Could not play audio:', soundName);
                });
            });
            
            currentAudio.play().catch(error => {
                console.error('Play failed:', error);
            });
        }
    });
});
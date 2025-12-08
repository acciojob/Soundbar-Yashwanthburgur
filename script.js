// Try different extensions if MP3 doesn't work
function playSound(soundName) {
    const extensions = ['.mp3', '.wav', '.ogg'];
    let audioFound = false;
    
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    // Try different file extensions
    for (let ext of extensions) {
        const audio = new Audio(`./sounds/${soundName}${ext}`);
        audio.onerror = function() {
            // Try next extension
        };
        audio.oncanplaythrough = function() {
            if (!audioFound) {
                audioFound = true;
                currentAudio = audio;
                currentAudio.play();
            }
        };
        audio.load();
    }
}
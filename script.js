const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

let currentAudio = null;

document.querySelectorAll("#buttons .btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const sound = btn.textContent.trim();

        if (sound === "stop") {
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

        currentAudio = new Audio(`./sounds/${sound}.mp3`);
        currentAudio.play();
    });
});


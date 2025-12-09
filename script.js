document.addEventListener("DOMContentLoaded", () => {

    const soundNames = [
        "applause",
        "boo",
        "gasp",
        "tada",
        "victory",
        "wrong"
    ];

    const buttonsDiv = document.getElementById("buttons");

    const sounds = {};

    // Create buttons + audio elements dynamically
    soundNames.forEach(name => {
        const btn = document.createElement("button");
        btn.className = "btn";  
        btn.innerText = name;

        const audio = document.createElement("audio");
        audio.src = `./sounds/${name}.mp3`;

        sounds[name] = audio;

        // play sound
        btn.addEventListener("click", () => {
            stopAll();
            audio.currentTime = 0;
            audio.play();
        });

        buttonsDiv.appendChild(btn);
    });

    // STOP button – must have class EXACTLY "stop"
    const stopBtn = document.createElement("button");
    stopBtn.className = "stop";
    stopBtn.innerText = "stop";

    stopBtn.addEventListener("click", stopAll);
    buttonsDiv.appendChild(stopBtn);

    // Pause all sounds
    function stopAll() {
        Object.values(sounds).forEach(a => {
            a.pause();
            a.currentTime = 0;
        });
    }
});

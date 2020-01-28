window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // If there's no audio, stop the function from running all together
    audio.currentTime = 0; // Rewind audio to the start
    audio.play();
    console.log(key);
});
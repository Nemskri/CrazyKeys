function removeTransition(e) {
    if (e.propertyName != 'transform') return; // To skip if not transformned

    this.classList.remove('playing');

};

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', (e) => {

    // Selecting both audio and key-inpuyt element //
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    //

    if (!audio) return; //Function ends
    audio.currentTime = 0; // Rewinds the audio to support realtime audio output
    audio.play();
    key.classList.add('playing');
});
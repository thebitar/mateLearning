function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // stop the function from running all together
    if(!audio) return;
    // Rewind to the start
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
    
function removeTransition(e){
    // skip it if it's not a transform
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Event listening to the index window
window.addEventListener('keydown', playSound);
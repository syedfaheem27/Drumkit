window.addEventListener('keydown',(e) => {
    const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!key) return;
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.play();
    audio.currentTime=0;
    key.classList.add('playing');
    this.addEventListener('transitionend',() => {
        key.classList.remove('playing');
    })

})

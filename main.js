// get all keys
const keys = document.querySelectorAll(".key");

// play notes
let playNote= (event)=>{

    let audioKeyCode= getKeyCode(event)
    
    const key= document.querySelector(`.key[data-key= "${audioKeyCode}"]`)

    const cantFoundAnyKey= !key;
    

    if (cantFoundAnyKey) {
        return;
    } else{
       addPlayingClass(key)
        playAudio(audioKeyCode);
    }
}

let addPlayingClass= (key) =>{
    key.classList.add('playing')
}

let getKeyCode= (event)=>{
    let keyCode;

    const isKeyboard= event.type === "keydown";

    if (isKeyboard) {
        keyCode= event.keyCode;
    } else {
        keyCode= event.target.dataset.key;
    }

    return keyCode;
}

let playAudio= (audioKeyCode)=>{
    const audio= document.querySelector(`audio[data-key= "${audioKeyCode}"]`)
    audio.currentTime= 0;
    audio.play();
}

let removePlayingClass= (event)=>{
    event.target.classList.remove("playing");
}

let registerEvents= ()=>{

    keys.forEach(function(key){
        key.addEventListener("click", playNote);
        key.addEventListener("transitionend", removePlayingClass);
    })
    
    // keyboard type
    window.addEventListener("keydown", playNote);

}

window.addEventListener('load', registerEvents);

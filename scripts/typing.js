const typedTextSpan = document.querySelector(".iam");
const cursorSpan = document.querySelector(".cursor");

const textArray = shuffleArray(["Python", "Game", "Software", "Web", "GD Scirpt", "Lua", "Godot"]);
const typingDelay = 100;
const erasingDelay = 100;
let textArrayIndex = 0;
let charIndex = 0;

function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
        // Pick a remaining element
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        // Swap it with the current element.
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
}

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, Math.floor(Math.random() * 51) + 75);
    }
    else {
        cursorSpan.classList.remove("typing");
        typedTextSpan.classList.add("typed");
        setTimeout(erase, Math.floor(Math.random() * 501) + 2000); // Before deleting next word
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, Math.floor(Math.random() * 51) + 75); // Before deleting next character
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, Math.floor(Math.random() * 301) + 900); // Before  tpying next word
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, 1000);
});
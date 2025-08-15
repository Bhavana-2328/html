// Extra JS effect: Adding random bubbles
setInterval(() => {
    const bubble = document.createElement("span");
    bubble.className = "dynamic-bubble";
    const size = Math.random() * 15 + 5 + "px";
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * window.innerWidth + "px";
    bubble.style.position = "absolute";
    bubble.style.bottom = "-20px";
    bubble.style.borderRadius = "50%";
    bubble.style.background = "rgba(255,255,255,0.5)";
    bubble.style.animation = "bubble 5s linear forwards";
    document.querySelector(".ocean").appendChild(bubble);

    // Remove after animation
    setTimeout(() => {
        bubble.remove();
    }, 5000);
}, 500);

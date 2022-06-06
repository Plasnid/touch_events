const topHalf = document.getElementById("top-half");
console.log(topHalf);

topHalf.addEventListener("touchstart", e=>{
    e.preventDefault();
    console.log("Touches", e.touches.length)
    console.log("Targets", e.targetTouches.length)
    console.log("Changed", e.changedTouches.length)

})

//! touch events include touchstart, touchend, touchmove
document.addEventListener("touchstart", e =>{
    [...e.changedTouches].forEach(touch =>{
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.style.top = `${touch.pageY}px`
        dot.style.left = `${touch.pageX}px`
        dot.id = touch.identifier
        document.body.append(dot)
    })
    console.log("Start");
    console.log(e);
})
document.addEventListener("touchmove", e =>{
    console.log("Move");
    [...e.changedTouches].forEach(touch =>{
        const dot = document.getElementById(touch.identifier);
        dot.style.top = `${touch.pageY}px`
        dot.style.left = `${touch.pageX}px`

    })
})
document.addEventListener("touchend", e =>{
    console.log("End");
    [...e.changedTouches].forEach(touch =>{
        const dot = document.getElementById(touch.identifier);
        dot.remove();

    })
})

//! chrome://inspect/#devices
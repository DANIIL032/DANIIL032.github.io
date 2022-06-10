import {add_track} from "./track.js"
let count_seconds = 0
let is_timer_enabled = false

setInterval (function(){
    if (is_timer_enabled){
        count_seconds += 1
        console.log(count_seconds)
        show_time(count_seconds)
    } 
}, 1000)

let play = document.querySelector(".Play")
let img = play.querySelector("img")
let flag_1 = document.querySelector(".Lap")

function click_play() {
    console.log(img.src)
    if (img.src.endsWith("play-button-arrowhead.png")) {
        img.src = "./Picutres/pause.png"
        is_timer_enabled = true
    }
    else {
        img.src = "./Picutres/play-button-arrowhead.png"
        is_timer_enabled = false
    }
}
play.addEventListener("click", click_play)

let buttons = document.querySelectorAll("button")
console.log(buttons)
for (let h = 0; h < buttons.length; h += 1) {
    console.log(buttons[h])
}
function show_time(time){
    let hours = Number.parseInt(time/3600)
    time -= hours * 3600
    let minutes = Number.parseInt(time/60)
    time -= minutes * 60
    let seconds = time
    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    let zero = document.querySelector(".Zero")
    zero.textContent = hours + ":" + minutes + ":" + seconds
}

let repeat = document.querySelector(".Repeat")

repeat.addEventListener("click", function(){
    count_seconds = 0
    is_timer_enabled = false
    img.src = "./Picutres/play-button-arrowhead.png"
    show_time(count_seconds)
    let flag = document.querySelector(".Flag")
    flag.style.visibility = 'hidden'
})

flag_1.addEventListener('click', function(){
    if (is_timer_enabled){
        add_track(count_seconds)
    }
})
let track_count = 0
let track_start = 0
let track_end = 0
 
let track_time  = `
<div class="Time"> 
<h1>0</h1>
<h1 class="Track-time">00:00:00</h1>
<h1 class="Total-time">00:00:00</h1>
</div>
`
function add_track(time){
    let flag = document.querySelector(".Flag")
    flag.style.visibility = 'visible'
    let track_lap = document.createElement("div")
    track_lap.innerHTML = track_time
    track_count += 1
}
export{add_track}
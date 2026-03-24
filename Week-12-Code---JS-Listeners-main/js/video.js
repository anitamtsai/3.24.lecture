var video = document.querySelector("#player1");
var volume_display = document.querySelector("volume");

window.addEventListener("load", function() {
    console.log("Hi")
})

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume_display.innerHTML = video.volume *100 + "%"
})

document.querySelector("#pause").addEventListener("click", function() {
    console.log("pause video");
    video.pause();
}
)


function skip() {
	console.log("In Skip");
	console.log("Duration: " + video.duration + " seconds");
	console.log("current location is " + video.currentTime)
	newTime = video.currentTime + 20
	if (newTime > video.duration){
		console.log("Exceeded length")
		newTime = 0
		video.pause()
	}
	video.currentTime = newTime
	console.log("current location is " + video.currentTime)
}

document.querySelector("#skip").addEventListener("click", skip)

/*if you have the function written, you put it into the document.etc as skip but if not, use it as general function with code under */

function setStyle(){
    console.log("In setStyle")
	video.classList.toggle('oldSchool')
}
document.querySelector("#vintage").addEventListener("click", setStyle)

// document.querySelector("#vintage").addEventListener("click", function(){
//     console.log("In setStyle") 
//     video.classList.add('oldSchool')
// }
// )



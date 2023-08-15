var mode = document.getElementById("mode-toggle")
var albumimg = document.getElementById("album-image")
var songname = document.getElementById("song-name")
var artistname = document.getElementById("album-artist-name")
var progressbar = document.getElementById("progressbar")
var song = document.getElementById("song")
var prev = document.getElementById("prev")
var playpause = document.getElementById("play-pause")
var next = document.getElementById("next")
var totalminute = document.getElementById("total-minut")
var totalsecond = document.getElementById("total-second")
var currentminute = document.getElementById("current-minut")
var currentsecond = document.getElementById("current-second")
var mode = document.getElementById("mode-toggle")
var modebtn= document.getElementById("toggle-button")
var modering = document.getElementById("toggle-button-ring")
var division = document.querySelectorAll("div")
var roundbtn = document.getElementsByClassName("round-button")
var modestatus= document.getElementById("mode-status")


let allmusic = [
    {
        name: "Hosanna",
        artist: "Vinnaithandi Varuvaya , A.R.Rahman",
        img: "Album image/Vinnathaandi-Varuvaayaa-Tamil-2010-20190731134123-500x500.jpg",
        src: "music/Hosanna.mp3"
    },

    {
        name: "Hasili Fisiliye",
        artist: "Aadhavan  , Harris Jayaraj, Karthik ",
        img: "Album image/crop_480x480_58006.jpg",
        src: "music/Hasili-Fisiliye-MassTamilan.mp3"
    }
]

song.src = allmusic[0].src
albumimg.src = allmusic[0].img
songname.innerHTML = allmusic[0].name
artistname.innerHTML = allmusic[0].artist

function prog() {
    progressbar.max = song.duration
    progressbar.value = song.currentTime

    if (song.ended) {
        nextt()
    }

    tm = Math.floor(song.duration / 60)
    ts = Math.floor(song.duration % 60)
    cm = Math.floor(song.currentTime / 60)
    cs = Math.floor(song.currentTime % 60)

    if (tm < 10) {
        tmm = "0" + tm
    }
    else {
        tmm = tm
    }
    if (ts < 10) {
        tsse = "0" + ts
    }
    else {
        tsse = ts
    }
    if (cm < 10) {
        cmm = "0" + cm
    }
    else {
        cmm = cm
    }
    if (cs < 10) {
        css = "0" + cs
    }
    else {
        css = cs
    }


    totalminute.innerHTML = tmm
    totalsecond.innerHTML = tsse

    currentminute.innerHTML = cmm
    currentsecond.innerHTML = css
}


setInterval(prog, 500)

function progcng() {
    song.currentTime = progressbar.value
    song.play()
    playpause.classList.remove("fa-play")
    playpause.classList.add("fa-pause")
}

function playpausefun() {
    if (playpause.classList.contains("fa-play")) {
        song.play()
        playpause.classList.remove("fa-play")
        playpause.classList.add("fa-pause")

    }
    else {
        song.pause()
        playpause.classList.remove("fa-pause")
        playpause.classList.add("fa-play")
    }
}

songnumber = 0



function nextt() {

    songnumber++
    if (songnumber > allmusic.length - 1) {
        songnumber = 0
    }
    song.src = allmusic[songnumber].src
    albumimg.src = allmusic[songnumber].img
    songname.innerHTML = allmusic[songnumber].name
    artistname.innerHTML = allmusic[songnumber].artist
    song.play()
    playpause.classList.remove("fa-play")
    playpause.classList.add("fa-pause")

}

function pree() {
    songnumber--
    if (songnumber < 0) {
        songnumber = allmusic.length - 1
    }
    song.src = allmusic[songnumber].src
    albumimg.src = allmusic[songnumber].img
    songname.innerHTML = allmusic[songnumber].name
    artistname.innerHTML = allmusic[songnumber].artist
    song.play()
    playpause.classList.remove("fa-play")
    playpause.classList.add("fa-pause")
}

function imgrotate() {
    if (playpause.classList.contains("fa-pause")) {
        albumimg.style.animation = "rotate 5s infinite linear"
    }
    else {
        albumimg.style.animation = "none"
    }
}

setInterval(imgrotate, 500)



function mtoo() {
    if (mode.checked == true) {
        modering.style.left = "55%"
        modering.style.out
        division[0].classList.add("text-bg-dark")
        division[6].classList.add("text-bg-dark")
        division[6].classList.remove("bg-primary")
        division[6].style.boxShadow="0px 0px 5px white "
        division[6].style.border="1px solid white"
        roundbtn[0].classList.add("bg-dark")
        roundbtn[1].classList.add("bg-dark")
        roundbtn[2].classList.add("bg-dark")
        roundbtn[0].style.color="white"
        roundbtn[1].style.color="white"
        roundbtn[2].style.color="white"
        modebtn.style.backgroundColor="white"
        modestatus.innerHTML="Dark Mode"
        

    }
    else {
        modering.style.left = "5%"
        division[0].classList.remove("text-bg-dark")
        division[6].classList.remove("text-bg-dark")
        division[6].classList.add("bg-primary")
        division[6].style.boxShadow="0px 0px 10px blue"
        division[6].style.border="1px solid blue"
        roundbtn[0].classList.remove("bg-dark")
        roundbtn[1].classList.remove("bg-dark")
        roundbtn[2].classList.remove("bg-dark")
        roundbtn[0].style.color="blue"
        roundbtn[1].style.color="blue"
        roundbtn[2].style.color="blue"
        modestatus.innerHTML="Light Mode"






    }
}

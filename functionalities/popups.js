const section1 = document.querySelector(".section1");
const overlay = document.querySelector(".overlay");

const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");
const section5 = document.querySelector(".section5");
const section6 = document.querySelector(".section6");
const section7 = document.querySelector(".section7");
const section8 = document.querySelector(".section8");
const section9 = document.querySelector(".section9");
const section10 = document.querySelector(".section10");
const section11 = document.querySelector(".section11");

//The Lessons Array
let lessons = [
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
  section9,
  section10,
  section11,
];

// Load the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("#ytplayer", {
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
//Section Click functionality
const section = document.querySelectorAll("#section");
const expandMore = document.querySelectorAll(".material-icons.expand_more");

for (let i = 0; i < section.length; i++) {
  section[i].addEventListener("click", () => {
    lessons[i].classList.remove("hide");
    

    section[i].style.height = "0vh";
    for (let i = 0; i < expandMore.length; i++) {
      expandMore[i].classList.add("hide");
    }
  });
}

//Feedback functionality
const thumbsUp = document.querySelectorAll(".thumb_up");
const increment = document.querySelectorAll(".upcount");
const subject = document.querySelectorAll("#subject");
for (let i = 0; i < thumbsUp.length; i++) {
  thumbsUp[i].addEventListener("click", (e) => {
    thumbsUp[i].style.color = "green";
    console.log(e.target);
  });
}
const thumbsDown = document.querySelectorAll(".thumb_down");
const decrement = document.querySelectorAll(".downcount");
const feedback = document.querySelectorAll(".feedback");
let body = subject;

for (let i = 0; i < thumbsDown.length; i++) {
  thumbsDown[i].addEventListener("click", (e) => {
    thumbsDown[i].style.color = "orangered";
    feedback.forEach(function (feed) {
      feed.classList.remove("hide");
    });
    for (i = 0; i < subject.length; i++) {
      subject[i].value = e.target.id;
    }

    overlay.classList.remove("hide");
  });
}

const escapeFeedBack = document.querySelectorAll(".escapefeedback");

for (let i = 0; i < escapeFeedBack.length; i++) {
  escapeFeedBack[i].addEventListener("click", () => {
    feedback.forEach(function (feed) {
      feed.classList.add("hide");
    });

    overlay.classList.add("hide");
  });
}

//Notes functionality

const notes = document.querySelectorAll(".hidden");

const notesBtn = document.querySelectorAll(".notes-btn");

const notesEscape = document.querySelectorAll(".notesescape");

for (let i = 0; i < notesBtn.length; i++) {
  notesBtn[i].addEventListener("click", function () {
    notes.forEach(function (note) {
      note.classList.remove("hidden");
    });

    overlay.classList.remove("hide");
  });
}
for (let i = 0; i < notesEscape.length; i++) {
  notesEscape[i].addEventListener("click", function () {
    notes.forEach(function (note) {
      note.classList.add("hidden");
    });
    overlay.classList.add("hide");
  });
}

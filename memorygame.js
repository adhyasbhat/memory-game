let prevId = "";
let currentId = "";
let points = 0;
let moves = 0
let counter = 0
function start(){
  timer = 0
  moves = 0
  $("#start").css("display","none")
  $("#cards").css("display","grid")
  myVar  = setInterval(myTimer, 1000);
  document.getElementById("movee").innerHTML = moves
  document.getElementById("points").innerHTML = points
}
function myTimer() {
  tym = timer++
  document.getElementById("time").innerHTML = tym;
}
function end(){
  $("#cards").css("display","none")
  $("#result").css("display","grid")
  clearInterval(myVar)
  document.getElementById("timetaken").innerHTML = tym;
  document.getElementById("move").innerHTML = moves
  document.getElementById("point").innerHTML = points 
  
}
function restart(){
  $("#result").css("display","none")
  $("#start").css("display","grid")
  location.reload();
}
const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    moves++
    document.getElementById("movee").innerHTML = moves
    card.classList.add("clicked");

    if (counter === 0) {
      firstSelection = card.getAttribute("animal");
      counter++;
    } else {
      secondSelection = card.getAttribute("animal");
      counter = 0;

      if (firstSelection === secondSelection) {
        points++
        document.getElementById("points").innerHTML = points
        const correctCards = document.querySelectorAll(
          ".card[animal='" + firstSelection + "']"
        );

        correctCards[0].classList.add("checked");
        correctCards[0].classList.remove("clicked");
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked");
        console.log(correctCards)
        if(points==8){
            end()
        }
      } else {
        const incorrectCards = document.querySelectorAll(".card.clicked");

        setTimeout(() => {

          incorrectCards[0].classList.remove("clicked");
          incorrectCards[1].classList.remove("clicked");
        }, 700);
      }
    }
  });
});
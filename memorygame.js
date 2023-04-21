let timer = 0;
let myVar;
let tym;
let moves = 0;
// $(".pics").css("display","none")
prev = null
present = null

function flipImage(num){
    moves++   
    current =  $("#flip"+num).children().eq(0).toggleClass("displaynone");
    
     b = $("#flip"+num).children()[0].src;
     console.log(b)
     
}

function myTimer() {
  tym = timer++
  console.log(timer)
  document.getElementById("time").innerHTML = tym;
}
function start(){
    timer = 0
    moves = 0
    $("#start").css("display","none")
    $("#game").css("display","grid")
    myVar  = setInterval(myTimer, 1000);
    document.getElementById("movee").innerHTML = moves
}
function end(){
    $("#game").css("display","none")
    $("#result").css("display","grid")
    clearInterval(myVar)
    document.getElementById("timetaken").innerHTML = tym;
    
    
}
function restart(){
    $("#result").css("display","none")
    $("#start").css("display","grid")
    
}
// $(document).ready(function(){
//     var clickedimg1 = null
//     var clickedimg2 = null


// $(".flipcard").click(function(){
    
//     var clickedImg =$(this).find(".pics")

//     if(clickedimg1 && clickedimg2){
//         clickedimg1.removeClass("displaynone")
//         clickedimg2.removeClass("displaynone")
//         clickedDiv1 = null;
//         clickedDiv2 = null;
//     }
//     else if(!clickedimg1)
//     {
//         clickedimg1 = clickedImg
//         clickedimg1.addClass("displaynone")
//     }
//     else if(!clickedimg2){
//         clickedimg2 = clickedImg
//         clickedimg2.addClass("displaynone")
//     }
// });

// })
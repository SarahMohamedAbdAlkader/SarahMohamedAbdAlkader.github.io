$(".startbtn").click(function() {
  window.location.href = "Html/characters.html";
});
$("body").after(
  '<div id="myModal" class="modal"><!-- Modal content --><div class="modal-content"><span class="close">&times;</span><p id="helpinsurtuction">Here is Your Instructions to become a WINNER:</br></p><p id="helpinsurtuction2">Choose Your HERO..</br></br>Use Your Keyboard Arrows To Move Your Character.. </br></br>WATCH OUT And Try Reaching The Other Side.</br></br>EveryTime You Reach Safely You Score And Can Move To The Next Level.</p></div></div>'
);
$("body").after(
  '<div id="myModal2" class="modal"><!-- Modal content --><div class="modal-content2"><span class="close" id="us">&times;</span><p id="aboutus">Hello There </br></p><p id="helpinsurtuction2">-You Can Consider This game as a "Beta Version" for a future feature-Rich Minion Game</br></br>-We Hope That this version will make you waiting for the full game </br></br>-ITIians >>Intake 40 >>Track IOT>>In January 2020</br></br>--Heba Ibrahem    --Isaac Wahba   --Nesreen Khaled  --Sarah Mohamed</p></div></div>'
);
var span = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var modal2 =document.getElementById("myModal2");

modal.style.display = "none";
modal2.style.display = "none";

$(".helpbtn").on({
  click: function() {
    modal.style.display = "block";
  }
});

$(".setbtn").on({
  click: function() {
    modal2.style.display = "block";
  }
});

span.onclick = function() {
  modal.style.display = "none";
};

span2.onclick = function() {
  modal2.style.display = "none";
};
$(".nextbtn2").click(function() {
  window.location.href = "Html/chooseLevel.html";
});


$(".backbtn").click(function() {
  window.location.href = "Html/characters.html";
});

$(".backbtn2").click(function() {
  window.location.href = "../index.html";
});

$(".level1btn").click(function() {
  window.location.href = "../Html/game.html";
  localStorage.setItem("level", "1");
});
$(".level2btn").click(function() {
  window.location.href = "../Html/game.html";
  localStorage.setItem("level", "2");
});
$(".level3btn").click(function() {
  window.location.href = "../Html/game.html";
  localStorage.setItem("level", "3");
});

$("#hero1").click(function() {
  //Boy Minion
  localStorage.setItem("Heroboy", 1);
  localStorage.setItem("BoyImg", "../Images/hero1.png");
  localStorage.setItem("click", 1);
  window.location.href = "../Html/chooseLevel.html";
});

$("#hero2").click(function() {
  //Girl Minion
  localStorage.setItem("Heroboy", 0);
  localStorage.setItem("click", 1);
  localStorage.setItem("GirlImg", "../Images/miniongirl.png");
  window.location.href = "../Html/chooseLevel.html";
});

setInterval(function() {
  $("header")
    .fadeOut("slow")
    .fadeIn("slow");
}, 2000);

setInterval(function() {
  $("head")
    .fadeOut("slow")
    .fadeIn("slow");
}, 2000);

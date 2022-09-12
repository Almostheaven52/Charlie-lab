$(document).ready(function () {
  $("#dogeOne").click(function () {
    $("#outputDiv").hide();

    console.log("user clicked dogeOne 2");
    $("#outputMsg").text("You Lose, nerd");
    $("#outputDiv").toggle();
  });

  $("#dogeTwo").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked dogeTwo 2");
    $("#outputMsg").text("you has big WOW");
    $("#outputDiv").toggle();
  });
});

$("button").click(function () {
  console.log("Clicked thee button");
  alert("how could you x.x")
});
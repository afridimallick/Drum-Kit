var numberOfbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfbuttons; i++) {
  document.querySelectorAll("button")[i].addEventListener("touchstart", function() {
    this.style.border = "10px solid black";
    this.style.color = "black";
  });
  /*  👇👇👇 Below Query is to change 'border and text' color of button when mousedown()*/
  document.querySelectorAll("button")[i].addEventListener("mousedown", function() {
    this.style.border = "10px solid black";
    this.style.color = "black";
  });
  /* 👇👇👇 Below Query is to change 'border and text' color of button to default when mousedown()*/
  document.querySelectorAll("button")[i].addEventListener("mouseup", function() {
    this.style.border = "10px solid #404B69";
    this.style.color = "#DA0463";
    /* 👇👇👇 Below code is to play corresponding sound*/
    var innerButtonHTML = this.innerHTML;
    makeSound(innerButtonHTML);
  });
}
function makeSound(key) {
  switch (key) {
    case "w":
      var tom_1 = new Audio("sounds/tom-1.mp3");
      tom_1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var tom_1 = new Audio("sounds/snare.mp3");
      tom_1.play();
      break;
    default:
      console.log(innerButtonHTML);
  }
};
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  changeButtonColorOnPress(event.key);
});
document.addEventListener("keyup", function(event) {
  changeButtonColorOnRelease(event.key);
});
function changeButtonColorOnPress(drumKey) {
  document.getElementById(drumKey).style.border = "10px solid black";
  document.getElementById(drumKey).style.color = "black";
}
function changeButtonColorOnRelease(drumKey) {
  document.getElementById(drumKey).style.border = "10px solid #404B69";
  document.getElementById(drumKey).style.color = "#DA0463";
}

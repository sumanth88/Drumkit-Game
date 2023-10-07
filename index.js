//this is a javascript code for drumkit
var numOfDrums = document.querySelectorAll(".drum").length; //it select all the elements having drum class
for (var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
//make sound clicking on button
function handleClick() {
  var audio = new Audio("sounds/tom-4.mp3");
  audio.play();
  var key = this.innerHTML;//it will returns the HTML content (inner HTML) of an element.
  //It creates a new Audio object with the tom-4.mp3 file, plays the audio file, and stores the innerHTML of the clicked element in the key variable.
  makeSound(key);//makesound of key no return type for this function only playing sound
  buttonAnimation(key);
  //alert on keyword press
  document.addEventListener("keydown", function(event) {
    // alert("KEY WAS PRESSED");
    makeSound(event.key);
    buttonAnimation(event.key);
  });
  // WE NEED TO HANDLE KEYBOARD CLICK ALSO SO GOING WITH THIS ONE Additionally, it adds an event listener to the whole document for a keydown event. When the key is pressed, it calls the makeSound and buttonAnimation functions with the event.key as the argument.
  function makeSound(key) {
    switch (key) {
      case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      default:
        console.log(buttonInnerHtml)//IF KEY DOESNT MATCHES THEN LOGS THE BUTTON INNERHTML TO THE CONSOLE
        //this.style.color="white";//this is an identity it will select current query
    }
    console.log(event);
  }

  function buttonAnimation(currentkey) {
    var activebutton = document.querySelector("." + currentkey);//The argument passed to querySelector is a CSS selector string that concatenates a period (.) with the value of currentkey
    activebutton.classList.add("pressed");//This line adds the pressed class to the activebutton element's classList. The classList property is an array-like object that contains all the classes applied to an HTML element. In this case, the pressed class will be added to the activebutton element's class list.
    setTimeout(function() {
      activebutton.classList.remove("pressed");
    }, 100);//This line creates a new setTimeout function that takes two arguments: a function to execute and a time delay in milliseconds. The function passed to setTimeout removes the pressed class from the activebutton element's classList after a 100ms delay. The purpose of this delay is to create an animation effect where the button appears to be pressed down for a short period before returning to its normal state.
  }
}

// Detecting button press

var numberOfButtons = document.querySelectorAll(".bday").length;


for (var i = 0; i<numberOfButtons; i ++) {
    document.querySelectorAll("button")[i].addEventListener("click" , function() {
       var buttonInner = this.innerHTML;
       
       makeSound(buttonInner);

       buttonAnimation(buttonInner);
    });
        
} 

// Detecting keyboard press ||||||
///                         \/\/\/


document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});
function makeSound(key) {
  switch (key) {
    case "h":
      var tom1 = new Audio('sounds/newyork nagaram.mp3') 
      tom1.play(); 
      break;
    case "o":
        var tom2 = new Audio('sounds/tom-2.mp3')
         tom2.play();
         break;
    case "n":
      var tom3 = new Audio('sounds/tom-3.mp3') 
      tom3.play(); 
      break;
    case "e":
        var tom4 = new Audio('sounds/tom-4.mp3')
          tom4.play();
          break; 
      case "y":
        var crash = new Audio('sounds/guitar.mp3')
          crash.play();
           break;  
      case "b":
          var kickBass = new Audio('sounds/tom-2.mp3')    
          kickBass.play();
          break;
      case "i":
           var snare = new Audio('sounds/snare.mp3')    
          snare.play();
          break;
      case "r":
           var snare = new Audio('sounds/crash.mp3')    
           snare.play();
           break;
      case "d":
          var snare = new Audio('sounds/yaar intha.mp3')    
          snare.play();
           break;                        
      

 
  default:console.log(buttonInner)
      break;
 }
}
function buttonAnimation(currentKey) {
 var activeButton = document.querySelector("." + currentKey);
    
 activeButton.classList.add("pressed")
 setTimeout(function(){
  activeButton.classList.remove("pressed")
},100);

}
// 
//

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i< numberOfDrumButtons; i++) {

    // mouseclick drum sound

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    handleDrum(this.innerHTML);
    btnAnimation(this.innerHTML);
   
    });
   }

   // keypressing drum sound

   document.addEventListener("keydown", function(event){
    handleDrum(event.key);
    btnAnimation(event.key);
   });


    // 1st method for sound of click and keywordds


function handleDrum(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
            
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case "k":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

    default: console.log(this.innerHTML);
    break;

    }
  
  }

  function btnAnimation(currentkey) {

    document.querySelector("." + currentkey).classList.add("pressed");
    
    setTimeout(function(){
        document.querySelector("." + currentkey).classList.remove("pressed");
    }, 100)
  
  }




        //  2st method for unique soudn for click 
        // if(this.innerHTML==="w"){
        //     var audio = new Audio('sounds/tom-1.mp3');
        //     audio.play();
        // }
        // else if( this.innerHTML==="a"){
        //     var audio = new Audio('sounds/tom-2.mp3');
        //     audio.play();
        // }
        // else if(this.innerHTML==="s"){
        //     var audio = new Audio('sounds/tom-3.mp3');
        //     audio.play();
        // }
        // else if(this.innerHTML==="d"){
        //     var audio = new Audio('sounds/tom-4.mp3');
        //     audio.play();
        // }
        // else if(this.innerHTML==="j"){
        //     var audio = new Audio('sounds/crash.mp3');
        //     audio.play();
        // }
        // else if(this.innerHTML==="k"){
        //     var audio = new Audio('sounds/snare.mp3');
        //     audio.play();
        // }
        // else if(this.innerHTML==="l"){
        //     var audio = new Audio('sounds/kick-bass.mp3');
        //     audio.play();
        // }
        //  2nd method

 




 

// Button press
var buttons = document.querySelectorAll("button");
for(var i=0;i<7;i++){
    buttons[i].addEventListener("click",function(){
        var buttonHTML = this.innerHTML;
        if(buttonHTML == "w"){
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        }else if(buttonHTML == "a"){
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();

        }else if(buttonHTML == "s"){
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();

        }else if(buttonHTML == "d"){
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();

        }else if(buttonHTML == "j"){
            var audio = new Audio("sounds/snare.mp3");
            audio.play();

        }else if(buttonHTML == "k"){
            var audio = new Audio("sounds/crash.mp3");
            audio.play();

        }else if(buttonHTML == "l"){
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        }else{
            console.log(buttonHTML);
        }
        buttonAnimation(buttonHTML);
    })
}


// Keypress

document.addEventListener("keydown", function(event){
    if(event.key == "w"){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }else if(event.key == "a"){
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();

    }else if(event.key == "s"){
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();

    }else if(event.key == "d"){
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();

    }else if(event.key == "j"){
        var audio = new Audio("sounds/snare.mp3");
        audio.play();

    }else if(event.key == "k"){
        var audio = new Audio("sounds/crash.mp3");
        audio.play();

    }else if(event.key == "l"){
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }else{
        console.log(event.key);
    }
    buttonAnimation(event.key);
})


function buttonAnimation(currentKey){
    var active = document.querySelector("." + currentKey);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },100);
}
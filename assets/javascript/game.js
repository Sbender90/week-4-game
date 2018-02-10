(function(){

    var arrayofImages = [
        "<img src='.assets/images/1.png' 'class='img-fluid'/>",
        "<img src='.assets/images/2.png' 'class='img-fluid'/>",
        "<img src='.assets/images/3.png' 'class='img-fluid'/>",
        "<img src='.assets/images/4.png' 'class='img-fluid'/>"
 ]

    
    var crystalBtn = $('<button>');
    var numberOptions = [10, 5, 3, 7];
    var counter = 0;
    var randomNumber = Math.floor(Math.random() * (89 - 4)) + 5;
    console.log(randomNumber);


    // crystalBtn.attr('data-img', [i]);

    function initilizeCrystals(){
        
        $("#randomNumber").text(liveNumber);
        for (var i = 0; i < numberOptions.length; i++) {
            // $('.crystals').append(i);
            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystal-image");
            imageCrystal.attr("src", "../week-4-game/assets/images/1.png");
            imageCrystal.attr("data-crystalvalue", numberOptions[i]);
            $("#crystals").append(imageCrystal);
        };  
    };

 


    $(".crystal-image").on("click", function() {

       
        
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
       
        counter += crystalValue;
        
        if (counter === randomNumber) {
          alert("You win!");
        }
    
        else if (counter >= randomNumber) {
          alert("You lose!!");
        }
    
      });
    //assign crystals a value
        //make crystal images buttons

    //make math functions to allow clicked numbers to be added
    //to try and match the random number
    
    //set win/loss condition

    //reset game
})();

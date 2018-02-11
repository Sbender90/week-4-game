(function(){

    var numberOptions = [10, 5, 1, 7];
    var counter = 0;
    var randomNumber = Math.floor(Math.random() * (89 - 4)) + 5;
    console.log(randomNumber);
    var wins = 0;
    var losses = 0;
    var winValue = 1;
    var lossValue = 1;
    var randomNumber = Math.floor(Math.random() * (89 - 4)) + 5;


    function initializeGems() {
        wins = wins;
        losses = losses;
        
    };

    for (var i = 0; i < numberOptions.length; i++) {
            $("#randomNumber").text(randomNumber);
            
            // $('.crystals').append(i);
            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystal-image");

            
            imageCrystal.attr("src", "assets/images/1.png");

            imageCrystal.attr("data-crystalvalue", numberOptions[i]);
            $("#crystals").append(imageCrystal);
        };  
        
        $(".crystal-image").on("click", function() {

       
        
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        
        console.log(crystalValue);
        counter += crystalValue;
            
        console.log("--------------");
        console.log(counter);
        $("#playerScore").html(counter);
        if (counter === randomNumber) {
            wins += winValue;
            $("#wins").html(wins);
            initializeGems();
           
            
        }
    
        else if (counter >= randomNumber) {
            losses += lossValue;
            $("#losses").html(losses);
            initializeGems();
            
            
        }
        
      });
    //assign crystals a value
        //make crystal images buttons

    //make math functions to allow clicked numbers to be added
    //to try and match the random number
    
    //set win/loss condition

    //reset game
})();

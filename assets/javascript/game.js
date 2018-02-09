(function(){

    var ArrayofImages = [
        "<img src='.assets/images/1.png' 'class='img-fluid'/>",
        "<img src='.assets/images/2.png' 'class='img-fluid'/>",
        "<img src='.assets/images/3.png' 'class='img-fluid'/>",
        "<img src='.assets/images/4.png' 'class='img-fluid'/>"
 ]


    var crystalBtn = $('<button>');
    var targetNumber = [];
    var numberOptions = [10, 5, 3, 7];

    var randomNumber = Math.floor(Math.random() * (89 - 4)) + 5;
    console.log(randomNumber);


    crystalBtn.attr('data-img', [i]);

    function initilizeCrystals(){
        $("#numberGenerated").push(randomNumber);
    };

    for (var i = 0; i < ArrayofImages.length; i++) {
        $('.crystals').append(i);
    };  
    //assign crystals a value
        //make crystal images buttons

    //make math functions to allow clicked numbers to be added
    //to try and match the random number
    
    //set win/loss condition

    //reset game

        
   
    
    
   

})();
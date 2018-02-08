$(document).ready(function(){

    var targetNumber = [];
    var numberOptions = [10, 5, 3, 7];

    for (var i = 0; i < numberOptions.length; i++) {
        var imageCrystal = $('<img>');
        imageCrystal.addClass('crystal-images');
        imageCrystal.attr('src' , "assets/images/crystalFolder") ; 
        imageCrystal.attr('data-crystalvalue', numberOptions[i]);
        $('div').each( function(i) {

        // this is not working properly not loading even placeholder images
        // look at the syntax errors on this page also
        
            $(this).append("<img src='assets/images" +(++i)+".png' width='79'' height='79' />");
        
    }
    
    
    });
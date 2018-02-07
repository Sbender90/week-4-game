$(document).ready(function(){

    var targetNumber = [];
    var numberOptions = [10, 5, 3, 7];

    for (var i = 0; i < numberOptions.length; i++) {
        var imageCrystal = $('<img>');
        imageCrystal.addClass('crystal-images');
        imageCrystal.attr('src' , "assets/images/crystalFolder") ; 
        imageCrystal.attr('data-crystalvalue', numberOptions[i]);
        $("#crystals").append(imageCrystal);
    }
    
    
    });
$(document).ready(function(){
    //copy system
    function copyToClipboard(text) {
        var copy = document.createElement("textarea");
        document.body.appendChild(copy);
        copy.value = text;
        copy.select();
        document.execCommand("copy");
        document.body.removeChild(copy);
    }

    var genHexCode;

    $('#boxOne').click(function(){
        genHexCode = "#" + Math.random().toString(16).slice(2, 8);

        $('#boxOne').css('background-color', genHexCode);

        $('#boxOneCode').show().text(genHexCode).hide(1500);
        $('#boxOne h2').show().text("Copied!").hide(700);

        copyToClipboard(genHexCode);
    });

    $('#boxTwo').click(function(){
        genHexCode = "#" + Math.random().toString(16).slice(2, 8);
        
        $('#boxTwo').css('background-color', genHexCode);

        $('#boxTwoCode').show().text(genHexCode).hide(1500);
        $('#boxTwo h2').show().text("Copied!").hide(700);

        copyToClipboard(genHexCode);
    });

    $('#boxThree').click(function(){
        genHexCode = "#" + Math.random().toString(16).slice(2, 8);
        
        $('#boxThree').css('background-color', genHexCode);

        $('#boxThreeCode').show().text(genHexCode).hide(1500);
        $('#boxThree h2').show().text("Copied!").hide(700);

        copyToClipboard(genHexCode);
    });

    $('#boxFour').click(function(){
        genHexCode = "#" + Math.random().toString(16).slice(2, 8);
        
        $('#boxFour').css('background-color', genHexCode);

        $('#boxFourCode').show().text(genHexCode).hide(1500);
        $('#boxFour h2').show().text("Copied!").hide(700);

        copyToClipboard(genHexCode);
    });

    $('#boxFive').click(function(){
        genHexCode = "#" + Math.random().toString(16).slice(2, 8);
        
        $('#boxFive').css('background-color', genHexCode);

        $('#boxFiveCode').show().text(genHexCode).hide(1500);
        $('#boxFive h2').show().text("Copied!").hide(700);

        copyToClipboard(genHexCode);
    });
});
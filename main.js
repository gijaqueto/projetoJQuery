$(document).ready(function(){
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('sumbit', function (e) {
        console.log("submit");
        e.preventDefault();
    })
})
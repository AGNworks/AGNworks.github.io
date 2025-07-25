$( document ).ready(function() {
        // Navigation between sections
    $('.nav-btn').click(function() {
        const target = $(this).data('target');
        $('.section').removeClass('active');
        $(`#${target}`).addClass('active');
    });

    // Back to home buttons
    $('.back-home').click(function() {
        $('.section').removeClass('active');
        $('#index').addClass('active');
    });

    $("#about_scroll").fadeOut();
    $("#work_scroll").fadeOut();
    $("#contact_scroll").fadeOut();

    $("#about").click(function(){
        $("#index").fadeOut();
        $("#about_scroll").fadeIn();
        $('#about_left').addClass('animated slideInLeft');
        $('#about_right').addClass('animated slideInRight');
        });
    $("#work").click(function(){
        $("#index").fadeOut();
        $("#work_scroll").fadeIn();
        $('#work_left').addClass('animated slideInLeft');
        $('#work_right').addClass('animated slideInRight');
        });
    $("#contact").click(function(){
        $("#index").fadeOut();
        $("#contact_scroll").fadeIn();
        $('#contact_left').addClass('animated slideInLeft');
        $('#contact_right').addClass('animated slideInRight');
        });

    $(".back").click(function(){
        $(".pages").fadeOut();
        $("#index").fadeIn();
        $('#index_left').addClass('animated slideInLeft');
        $('#index_right').addClass('animated slideInRight');
        });

});

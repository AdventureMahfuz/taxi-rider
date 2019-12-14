(function($) {
$(document).ready(function(){
    //sticky menu when scroll
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $("header.header-section").addClass("fixed-top");
        } else {
            $("header.header-section").removeClass("fixed-top");
        }
    });

    //smooth scrolling
    $(".main-navigation ul li a").click(function (e) {
        e.preventDefault();
        var hash = this.hash;
        var position = $(hash).offset().top;
        $("html").animate({
            scrollTop: position - 100
        }, 800);
    });
});
})( jQuery );

/* Open the mns */
function openNav() {
    document.getElementById("mobile-navigation").style.width = "100%";
}
/* Close/hide the mns */
function closeNav() {
    document.getElementById("mobile-navigation").style.width = "0";
}
$('.mns a').click(function () {
    document.getElementById("mobile-navigation").style.width = "0";
});
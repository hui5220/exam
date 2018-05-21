var tag = false,
    ox = 0,
    left = 0,
    bgleft = 0;
$(".radius").on("mousedown", function(e) {
    ox = e.pageX - left;
    tag = true;
});
$(document).on("mouseup", function() {
    tag = false;
});
$(".auto").on("mousemove", function(e) {
    if (tag) {
        left = e.pageX - ox;
        if (left <= 0) {
            left = 0;
        } else if (left > 200) {
            left = 200;
        }
        $(".radius").css("left", left + "px");
        $(".bottom").width(left + "px");
    }
});

$('.play').click(function(e) { //鼠标点击
    if (!tag) {
        bgleft = $('.play').offset().left;
        left = e.pageX - bgleft;
        if (left <= 0) {
            left = 0;
        } else if (left > 300) {
            left = 300;
        }
        $('.radius').css('left', left);
        $('.bottom').animate({ width: left }, 300);
    }
});
$(function() {
    var flag = true;
    var index = 0

    function changeImg() {
        $(".tempWrap li").eq(index).stop().fadeIn(600, function() {
            flag = true
        }).siblings("li").fadeOut(200)
        $(".hd li").eq(index).stop().addClass("on").siblings("li").removeClass("on")
    }
    $(".hd li").click(function() {
        index = $(this).index()
        changeImg()
    })

    var timer = setInterval(function() {

    }, 3000)

    $(".banner").mouseenter(function() {
        clearInterval(timer)
    })
    $(".banner").mouseleave(function() {
        timer = setInterval(function() {

        }, 3000)
    })

})
$(function() {
    $("#aurd").click(function() {
        $("#mask").css("display", "block")
    })
})
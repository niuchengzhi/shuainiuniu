$(function() {
    var flag = 1
    $(".item").click(function() {
        if (flag == 1) {
            $(".item1").addClass('active')
            $('.ui-label').css('color', 'red')
            flag = 2;
        } else if (flag == 2) {
            $(".item1").removeClass('active')
            $('.ui-label').css('color', '#8c8c8c')
            flag = 1
        }

    })
    $(".item").hover(function() {
        $(".item").css({
            'color': 'red',
        })
        $(".item1").css({
            'borderColor': 'red',
        })
    }, function() {
        $(".item").css({
            'color': '#8c8c8c',
        })
        $(".item1").css({
            'borderColor': '#8c8c8c',
        })
    })
    $(".head img").click(function() {
        $("#mask").css("display", "none")
    })
})
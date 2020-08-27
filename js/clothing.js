$(function() {
    // 搜索框自动清除,each遍历文本框
    $(".sf").each(function() {
        //保存当前文本框的值
        var vdefault = this.value;
        //获得焦点时，如果值为默认值，则设置为空
        $(this).focus(function() {
                if (this.value == vdefault) {
                    this.value = "";
                }
            })
            //失去焦点时，如果值为空，则设置为默认值
        $(this).blur(function() {
            if (this.value == "") {
                this.value = vdefault;
            }
        })
    })

    //购物车
    $('.head-cart').hover(function() {
        $(this).css('border-bottom', '2px solid #fff')
        $('.nogoods').css('display', 'block')
    }, function() {
        $(this).css('border-bottom', '1px solid #ccc')
        $('.nogoods').css('display', 'none')
    })
    $('.nogoods').hover(function() {
        $('.head-cart').css('border-bottom', '2px solid #fff')
        $('.nogoods').css('display', 'block')
    }, function() {
        $('.head-cart').css('border-bottom', '1px solid #ccc')
        $('.nogoods').css('display', 'none')
    })
})
$(function() {
    $("#aurd").click(function() {
        $("#mask").css("display", "block")
    })
})
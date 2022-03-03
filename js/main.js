//手機瀏覽列表
$(".menu_icon").click(function() {
    if (!$(".menu").is(":hidden")) {
        $(".menu").slideUp();
    } else {
        $(".menu").slideDown();
    }
});

// 選項欄位樣式
$(".sub_nav ul li").click(function() {
    $(".sub_nav ul li").removeClass("on");
    $(this).addClass("on");
});

$(".sel1").click(function() {
    if ($(".sel1 ul").hasClass("hide")) {
        $(".sel1 ul").removeClass("hide");
        $(".sel1 ul").addClass("show");
    } else {
        $(".sel1 ul").removeClass("show");
        $(".sel1 ul").addClass("hide");
    }
})

/*獎記錄頁面 下拉*/
$(".p_t0").click(function() {
    if ($(".p_ul0").hasClass("hide")) {
        $(".p_ul0").removeClass("hide");
        $(".p_ul0").addClass("show");
    } else {
        $(".p_ul0").removeClass("show");
        $(".p_ul0").addClass("hide");
    }
})

$(".p_t1").click(function() {
    if ($(".p_ul1").hasClass("hide")) {
        $(".p_ul1").removeClass("hide");
        $(".p_ul1").addClass("show");
    } else {
        $(".p_ul1").removeClass("show");
        $(".p_ul1").addClass("hide");
    }
})

$(".p_t2").click(function() {
    if ($(".p_ul2").hasClass("hide")) {
        $(".p_ul2").removeClass("hide");
        $(".p_ul2").addClass("show");
    } else {
        $(".p_ul2").removeClass("show");
        $(".p_ul2").addClass("hide");
    }
})

$(".p_t3").click(function() {
    if ($(".p_ul3").hasClass("hide")) {
        $(".p_ul3").removeClass("hide");
        $(".p_ul3").addClass("show");
    } else {
        $(".p_ul3").removeClass("show");
        $(".p_ul3").addClass("hide");
    }
})

$(".p_t4").click(function() {
    if ($(".p_ul4").hasClass("hide")) {
        $(".p_ul4").removeClass("hide");
        $(".p_ul4").addClass("show");
    } else {
        $(".p_ul4").removeClass("show");
        $(".p_ul4").addClass("hide");
    }
})

$(".p_t5").click(function() {
    if ($(".p_ul5").hasClass("hide")) {
        $(".p_ul5").removeClass("hide");
        $(".p_ul5").addClass("show");
    } else {
        $(".p_ul5").removeClass("show");
        $(".p_ul5").addClass("hide");
    }
})

$(".p_t6").click(function() {
    if ($(".p_ul6").hasClass("hide")) {
        $(".p_ul6").removeClass("hide");
        $(".p_ul6").addClass("show");
    } else {
        $(".p_ul6").removeClass("show");
        $(".p_ul6").addClass("hide");
    }
})

$(".p_t7").click(function() {
    if ($(".p_ul7").hasClass("hide")) {
        $(".p_ul7").removeClass("hide");
        $(".p_ul7").addClass("show");
    } else {
        $(".p_ul7").removeClass("show");
        $(".p_ul7").addClass("hide");
    }
})

$(".p_t8").click(function() {
    if ($(".p_ul8").hasClass("hide")) {
        $(".p_ul8").removeClass("hide");
        $(".p_ul8").addClass("show");
    } else {
        $(".p_ul8").removeClass("show");
        $(".p_ul8").addClass("hide");
    }
})


// 返回頂部
$(".gotop").click(function() {
    jQuery("html,body").animate({
        scrollTop: 0
    }, 1000);
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('.gotop').css('display');
        $('.gotop').fadeIn("fast");
    } else {
        $('.gotop').fadeOut("fast");
        $('.gotop').css('hidden');
    }
});

// 檢測螢幕尺寸隱藏返回頂部
function reWindow(wdth) {
    if (wdth < 767) {
        $("#gotop").hide();
    } else {
        $("#gotop").show();
    }
}

reWindow($(window).width());
$(window).resize(function() {
    wdth = $(window).width();
    reWindow(wdth)
});

// 頁面加載
$(function() {
    jQuery(window).load(function() {
        jQuery("#loading").hide();
    });
});

// bar-top浮動固定
/*$(function(){
	let headerBarTop = $("#navbarTop").offset().top;
	let mobileheaderBarTop = $("#mobileNavbarTop").offset().top
	$(window).scroll(function(){
		let that = $(this);
		let thatTop = that.scrollTop();

		//當高度大於100時，浮動固定
		if (thatTop > headerBarTop) {
			$("#navbarTop").addClass("headerfixed");
		}else{
			$("#navbarTop").removeClass("headerfixed");
		}

		if(thatTop > mobileheaderBarTop){
			$("#mobileNavbarTop").addClass("mobile_headerfixed");
		}else{
			$("#mobileNavbarTop").removeClass("mobile_headerfixed");
		}
	});

});*/
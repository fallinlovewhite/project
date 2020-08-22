define(["jquery","jquery-cookie"],function($){
    function into(){
        $("#header1 #first").on("mouseenter",function(){
            $("#header1 #virtual").css("display","block");
            $("#header1 #virtual1").css("display","none");
        })
        $("#header1").on("mouseleave",function(){
            $("#header1 #virtual").css("display","none");
        })
    }
    function into1(){
        $("#header1 #two").on("mouseenter",function(){
            $("#header1 #virtual1").css("display","block");
            $("#header1 #virtual").css("display","none");
        })
        $("#header1").on("mouseleave",function(){
            $("#header1 #virtual1").css("display","none");
            
        })
    }

    function banner(){
        var oBtn = $(".banner").find("ol li");
        var oul = $(".banner").find("ul");
        var num = 0;
        var timer = null;

        $("#banner").mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function(){
            timer = setInterval(function(){
                num++;
                tab();
            },2000);
        })



        timer = setInterval(function(){
            num++;
            tab();
        },2000);

        oBtn.click(function(){
            num = $(this).index();
            tab();
        })
        function tab(){

            oBtn.removeClass("active").eq(num).addClass("active");
            if(num == oBtn.size()){
                oBtn.eq(0).addClass("active");
            }

            oul.animate({top:-476 * num},1000,function(){
                if(num == oBtn.size()){
                    num = 0;
                    oul.css("top",0);
                }
            })
        }
    }

    function Tab_Control(){
        var oBtn = $(".list_big_box .listbox").find("li");
        var oDiv = $(".midbody").find("section");
        var oBtn1 = $(".midbody").find("section");


        oBtn.mouseenter(function(){
            $(this).css("background","#f3f3f3");
            oDiv.css("display","none").eq($(this).index()).css("display","block");
        }).mouseleave(function(){
            $(this).css("background","white")
            oDiv.css("display","none").eq($(this).index()).css("display","none");
        })

        oBtn1.mouseenter(function(){
            $(this).css("display","block");
        }).mouseleave(function(){
            $(this).css("display","none");
        })
    }

    function mokuai(){
        var oBtn = $(".vice_monitor #love").find("p");
        var oDiv = $(".vice_monitor").find("section");

        oBtn.mouseenter(function(){
            oBtn.attr("class","");
            $(this).attr("class","active");
            oDiv.css("display","none").eq($(this).index()).css("display","block");
        })
    }




    return{
        into:into,
        into1:into1,
        banner:banner,
        Tab_Control:Tab_Control,
        mokuai:mokuai,
    }
})
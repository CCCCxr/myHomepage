/**
 * Created by Administrator on 2017/9/10.
 */
$(function(){
    $(".main").fullpage({
        verticalCentered:false,
        resize:true,
        anchors:["page1","page2","page3","page4","page5","page6"],
        scrollingSpeed:400,
        css3:true,
        navigation:true,
        afterRender:function(){
            $("#home").addClass("home_box");
            $("header").before("<div class='header'></div>");
            $(".header").css({"opacity":"0.3"});
            $(".home_head").css({"margin-top":"70px"});
            $("header").animate({opacity:1},1000,function(){
                $("#home_infoTitle").fadeIn(700,function(){
                    $(".info_box").animate({width:"800px"},500,function(){
                        $(".info_box p:nth-child(1)").fadeIn(400,function(){
                            $(this).next().fadeIn(400,function(){
                                $(this).next().fadeIn(400,function(){
                                    $(this).next().fadeIn(400)
                                })
                            })
                        })
                    })
                })
            })
        },
        afterLoad:function(anchorLink,index){
            if(index==2){
                $(".about_content h1").after("<div class='title_end'> <h2>· About me ·</h2> </div>");
                $(".title_end").animate({width:"150px"},800,function(){
                    $(".title_end h2").slideDown(500)
                });

                $(".about_info").animate({width:"800px",marginTop:"0",marginBottom:"0"},700,"easeOutElastic",function(){
                    $(".about_info p").eq(0).slideDown(750,function(){
                        $(".about_info p").eq(1).slideDown(750,function(){
                            $(".about_info p").eq(2).slideDown(750,function(){
                                $(".about_info p").eq(3).slideDown(750)
                            })
                        })
                    })
                })
            }
            if(index==3){
                $(".skill_content h1").after("<div class='title_end'> <h2>· Skill ·</h2> </div>");
                $(".title_end").animate({width:"150px"},800,function(){
                    $(".title_end h2").slideDown(500)
                });
                $(".skill_list_content").addClass("skill_scale")
            }
            if(index==4){
                $(".experience_content h1").after("<div class='title_end'> <h2>· EXPERIENCE ·</h2> </div>");
                $(".title_end").animate({width:"150px"},800,function(){
                    $(".title_end h2").slideDown(500)
                });
                $(".experience_info").fadeIn(500,function(){
                    $(".exp_list_content").fadeIn(500,function(){
                        $(".exp_time_line").fadeIn(500)
                    });
                })
            }
            if(index==5){
                $(".demo_content h1").after("<div class='title_end'> <h2>· DEMO ·</h2> </div>");
                $(".title_end").animate({width:"150px"},800,function(){
                    $(".title_end h2").slideDown(500)
                });
                $(".demo_box li").eq(0).animate({marginTop:"20px",opacity:1},500,function(){
                    $(".demo_box li").eq(1).animate({marginTop:"20px",opacity:1},500,function(){
                        $(".demo_box li").eq(2).animate({marginTop:"20px",opacity:1},500,function(){
                            $(".demo_box li").eq(3).animate({marginTop:"20px",opacity:1},500)
                        })
                    })
                })
            }
            if(index==6){
                $(".contact_content h1").after("<div class='title_end'> <h2>· CONTACT ME ·</h2> </div>");
                $(".title_end").animate({width:"150px"},800,function(){
                    $(".title_end h2").slideDown(500)
                });
                $(".head1").animate({marginTop:"0",opacity:1},800)
            }
        },
        onLeave:function(index , nextIndex, direction){
            if(index==2||index==3||index==4||index==5||index==6){
                $(".title_end").remove();
            }
        }
    });
});
$(function(){
     $(".qq").hover(function(){
         $(".qq_ewm").fadeIn(500);
     },function(){
         $(".qq_ewm").fadeOut(500);
     });
    $(".wx").hover(function(){
        $(".wx_ewm").fadeIn(500);
    },function(){
        $(".wx_ewm").fadeOut(500);
    });
});
$(function(){
    $("#flag_right img").click(function(){
        $(".exp_list").stop(true,false);
        $(".exp_list").animate({right:900},1000,"easeInOutCubic");
    });
    $("#flag_left img").click(function(){
        $(".exp_list").stop(true,false);
        $(".exp_list").animate({right:0},1000,"easeInOutCubic");
    });
});
$(".skill_list_icon").click(function(){
   $(".skill_int").each(function(){
       if($(this).is(":visible")){
           $(this).slideUp(200);
           $(this).prev().removeClass("skill_flag_rotate");
       }
   });
   if($(this).siblings(".skill_int").is(":hidden")){
       $(this).siblings(".skill_int").slideDown(400);
       $(this).siblings(".skill_flag").addClass("skill_flag_rotate");
   } else {
       $(this).siblings(".skill_int").slideUp(200);
       $(this).siblings(".skill_flag").removeClass("skill_flag_rotate");
   }
});


$(function () {
    $('#wrap').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#1889C5','#4F94CD','#ED6461'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        navigation: true,
        menu: '#menu',
        verticalCentered:false,
        scrollingSpeed: 500,
        afterLoad:function (anchorLink,index) {
            if(index==2){
                 var i=0;
                     function mnDemo() {
                         $('.page_again:eq(' + i + ')').animate({
                             position: 'abslute',
                             top: '50%',
                             left: '50%',
                             'margin-top': '-60px',
                             'margin-left': '-100px',
                         }, 2000);
                         i++;
                         if(i<9) {
                             setTimeout(mnDemo, 800);
                         };
                         if(i==9){
                             $('.dance_1').css('animation-play-state','running')
                         }
                     }
                     mnDemo();
            };
            if(index==3){
                    $('.github').delay(400).stop(true).animate({left: '340px', top: '140px'}, 1500);
                    $('.blog').delay(400).stop(true).animate({right: '340px', top: '140px'}, 1500);
                    $('.myMessage ul').delay(400).stop(true).animate({left: '220px', top: '20px'}, 1500);
                    $('.move-text').delay(400).stop(true).animate({left:'700px',top:'-230px'},1500);
            };
            if(index==4){
                // $('.section4 ul li:eq(0)').css({'transition':'width 3s','width':'650px'});
                // $('.section4 ul li:eq(1)').css({'transition':'width 3s','width':'480px'});
                // $('.section4 ul li:eq(2)').css({'transition':'width 3s','width':'600px'});
                // $('.section4 ul li:eq(3)').css({'transition':'width 3s','width':'500px'});
                // $('.section4 ul li:eq(4)').css({'transition':'width 3s','width':'400px'});
                // $('.project').stop(true).animate({top:'40px',left:'940px'},2000,function () {
                //     $('.project p').slideDown('slow');
                // });
                // $('.tab').fadeIn(3000);
            }
            if(index==5){
                $('footer p:eq(0)').fadeIn(800);
                $('footer p:eq(1)').fadeIn(1600);
                $('footer p:eq(2)').fadeIn(2000);
            }
        },//page2 page3
        onLeave:function (index,direction) {
            if(index==3){
                $('.github').delay(400).animate({left:'0px',top:'0px'},1000);
                $('.blog').delay(400).animate({right:'0px',top:'0px'},1000);
                $('.myMessage ul').delay(400).animate({left:'0px',top:'0px'},1000);
                $('.move-text').delay(400).animate({left:'0px',top:'0px'},1000);
            };
            if(index==4){
                // $('.section4 ul li:eq(0)').css({'transition':'width 1s','width':'0px'});
                // $('.section4 ul li:eq(1)').css({'transition':'width 1s','width':'0px'});
                // $('.section4 ul li:eq(2)').css({'transition':'width 1s','width':'0px'});
                // $('.section4 ul li:eq(3)').css({'transition':'width 1s','width':'0px'});
                // $('.section4 ul li:eq(4)').css({'transition':'width 1s','width':'0px'});
                // $('.project').animate({top:'300px',left:'10px'},1500);
                // $('.project p').css({"display":"none"});
                // $('.tab').fadeOut('fast');
            };
            if(index==5){
                $('footer p').fadeOut('fast');
            }
        },
    });
    //自动输入文本
    var $form = $('<form id="create_form"></form>');
    var $text = $('<textarea cols="60" rows="5" id="text" style="border-radius:10px; margin-top:200px;background:#218868; opacity:0.7; color:white; cursor: default; font-family: Arial; font-size: 18px;padding:5px;"></textarea>');
    var str = "  Say hello,everything will be ok.a year ago,I was a doctor.but that's not what I want to live.Study by myself ,I enjoy the thrill of knocking code.No,it is so beautiful.Write the code, change the world.";

    function create() {
        $('#hell').after($form);
        $('#create_form').append($text);//创建 添加节点
        $('#create_form').css({'display': 'none'}).slideDown(1000);
    };
    var i = 0;
    function subDemo() {
        var tt = str.substring(0, i);//文本节点输入
        i++;
        $('#text').val(tt + '|');
        setTimeout(subDemo, 100);
    }
    function printer() {
        setTimeout(create, 1800);//定时器
        setTimeout(subDemo, 3000);
    }
    printer();
//page2
    $('.page_again_1').bind('mouseover',function (event) {//绑定事件
        $(this).parent().css('animation-play-state','paused');
        event.stopPropagation();
    });
    $('.page_again_1').bind('mouseout',function (event) {
        $(this).parent().css('animation-play-state','running');
        event.stopPropagation();
    });
//page4
    var x=10;
    var y=20;
    $('.skill ul li')
        .mouseover(function (e) {
            myTitle = this.title;
            this.title = '';
            var tooltip = "<div class='tooltip'>" + myTitle + "</div>"
            $('.section4').append(tooltip);
            $('.tooltip').css({
                'left': (e.pageX + x) + 'px',
                'top': (e.pageY + y) + 'px',
            })
        })
        .mouseout(function () {
            $('.tooltip').remove();
           this.title=myTitle;
        })
        .mousemove(function (e) {
                $('.tooltip').css({
                    'left': (e.pageX + x) + 'px',
                    'top': (e.pageY + y) + 'px'
                });
        })
//tab
    $('.tab_menu li').click(function () {
        $(this).addClass("selected")
            .siblings().removeClass("selected");
       var index=$(this).index();
        $('div.tab_box>div').eq(index).show()
            .siblings().hide();

    })
})




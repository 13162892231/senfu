
var optionContent = null;
$.ajax({
    url: "/PageHandler/GetCurriculumList.ashx",
    type: "get",

    success: function (data) {
        if (data == null) {
            return false;
        }
        else {
            var obj = JSON.parse(data);
            for (var i = 0; i < obj.length; i++) {
                optionContent = "<option value='" + obj[i].Value + "'>" + obj[i].Text + "</option>"
                $("#class").append(optionContent);
            }
        }
    }
});



$.ajax({
    url: "/PageHandler/GetCampusList.ashx",
    type: "get",
   
    success: function (data) {
        if (data == null) {
            return false;
        }
        else {
            var obj = JSON.parse(data);
            for (var i = 0; i < obj.length; i++) {
                optionContent = "<option value='" + obj[i].Value + "'>" + obj[i].Text + "</option>"
                $("#school").append(optionContent);
            }
        }
    }
});
$.ajax({
    url: "/PageHandler/GetSourceList.ashx",
    type: "get",

    success: function (data) {
        if (data == null) {
            return false;
        } else {
            var obj = JSON.parse(data);
            for (var i = 0; i < obj.length; i++) {
                optionContent = "<option value='" + obj[i].Value + "'>" + obj[i].Text + "</option>"
                $("#laiyuan").append(optionContent);
            }
        }
    }
});


$('#dowebok').fullpage({
    slidesColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
    css3: true,
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
    menu: '#menu',
    afterRender: function () {
        $(".a_fire").addClass("a_fire_move");
        $(".a_people").addClass("a_people_move");
        $(".a_word").addClass("a_word_move");
        $(".a_btu").addClass("a_btu_move");
        $(".vidiofang_two").addClass("vidiofang_twomove");
        $(".vidiofang").fadeIn();
    },
    afterLoad: function (anchorLink, index) {
        clearClass();
        switch (index) {
            case 1:
                $(".a_fire").addClass("a_fire_move");
                $(".a_people").addClass("a_people_move");
                $(".a_word").addClass("a_word_move");
                $(".a_btu").addClass("a_btu_move");
                break;
            case 2:
                $(".btu_a_1").addClass("btu_a_1_move");
                $(".btu_a_2").addClass("btu_a_2_move");
                $(".btu_a_3").addClass("btu_a_3_move");
                $(".btu_a_4").addClass("btu_a_4_move");
                $(".btu_a_5").addClass("btu_a_5_move");
                $(".btu_a_6").addClass("btu_a_6_move");
                $(".btu_a_7").addClass("btu_a_7_move");
                $(".btu_a_8").addClass("btu_a_8_move");
                break;
            case 3:
                $(".C_round").addClass("C_round_move");
                $(".C_word_1").addClass("C_word_1_move");
                $(".C_word_2").addClass("C_word_2_move");
                $(".C_word_3").addClass("C_word_3_move");
                $(".C_word_4").addClass("C_word_4_move");
                $(".C_word").addClass("C_word_move");
                break;
            case 4:
                $(".d_word").addClass("dnap").addClass("bounceInLeft").addClass("animated");
                $(".d_table").addClass("dnap").addClass("bounceInRight").addClass("animated");
                break;
            case 5:
                $(".e_word").addClass("dnap").addClass("bounceInLeft").addClass("animated");
                $(".Myvideo1").addClass("dnap").addClass("rotateIn").addClass("animated");
                $(".Myvideo2").addClass("dnap").addClass("rotateIn").addClass("animated");
                $(".Myvideo3").addClass("dnap").addClass("rotateIn").addClass("animated");
                $(".e_btu").addClass("dnap").addClass("bounceInRight").addClass("animated");
                break;
            case 6:
                $(".f_word").addClass("dnap").addClass("flip").addClass("animated");
                $(".f_btu").addClass("dnap").addClass("bounceInUp").addClass("animated");
                $(".Myfrom").addClass("dnap").addClass("bounceInLeft").addClass("animated");

                break;

        }

    },
    onLeave: function (index, direction) {
        clearClass();
        switch (index) {
            case 1:
                

                $(".a_fire").addClass("dnap").addClass("bounceOutLeft").addClass("animated");
                $(".a_people").addClass("dnap").addClass("bounceOutLeft").addClass("animated");
                $(".a_word").addClass("dnap").addClass("bounceOutRight").addClass("animated");
                $(".a_btu").addClass("dnap").addClass("bounceOutRight").addClass("animated");
                break;
            case 2:
                $(".btu_a_1").addClass("dnap").addClass("bounceOutLeft").addClass("animated");
                $(".btu_a_2").addClass("dnap").addClass("bounceOutLeft").addClass("animated");
                $(".btu_a_3").addClass("dnap").addClass("bounceOutRight").addClass("animated");
                $(".btu_a_4").addClass("dnap").addClass("bounceOutRight").addClass("animated");
                $(".btu_a_5").addClass("dnap").addClass("bounceOutLeft").addClass("animated");
                $(".btu_a_6").addClass("dnap").addClass("bounceOutLeft").addClass("animated");
                $(".btu_a_7").addClass("dnap").addClass("bounceOutRight").addClass("animated");
                $(".btu_a_8").addClass("dnap").addClass("bounceOutRight").addClass("animated");
                break;
            case 3:
                $(".C_round").addClass("dnap").addClass("bounceOutLeft").addClass("animated");
                $(".C_word_1").addClass("dnap").addClass("bounceOutLeft").addClass("animated");
                $(".C_word_2").addClass("dnap").addClass("bounceOutRight").addClass("animated");
                $(".C_word_3").addClass("dnap").addClass("bounceOutRight").addClass("animated");
                $(".C_word_4").addClass("dnap").addClass("bounceOutRight").addClass("animated");
                $(".C_word").addClass("dnap").addClass("bounceOutLeft").addClass("animated");
                break;
            case 4:
                $(".d_word").addClass("dnap").addClass("bounceOutLeft").addClass("animated");
                $(".d_table").addClass("dnap").addClass("bounceOutRight").addClass("animated");
                break;
            case 5:
                $(".youku1").fadeOut();
                $(".youku2").fadeOut();
                $(".youku3").fadeOut();
                $(".e_word").addClass("dnap").addClass("bounceOutLeft").addClass("animated");
                $(".Myvideo1").addClass("dnap").addClass("rotateOut").addClass("animated");
                $(".Myvideo2").addClass("dnap").addClass("rotateOut").addClass("animated");
                $(".Myvideo3").addClass("dnap").addClass("rotateOut").addClass("animated");
                $(".e_btu").addClass("dnap").addClass("bounceOutLeft").addClass("animated");
                break;
            case 6:
                $(".f_word").addClass("dnap").addClass("bounceOutLeft").addClass("animated");
                $(".f_btu").addClass("dnap").addClass("bounceOutDown").addClass("animated");
                $(".Myfrom").addClass("dnap").addClass("bounceOutRight").addClass("animated");
                break;

        }
    },
   
});


function clearClass() {

    $(".a_fire").removeClass("a_fire_move");
    $(".a_people").removeClass("a_people_move");
    $(".a_word").removeClass("a_word_move");
    $(".a_btu").removeClass("a_btu_move");


    $(".a_fire").removeClass("dnap").removeClass("bounceOutLeft").removeClass("animated");
    $(".a_people").removeClass("dnap").removeClass("bounceOutLeft").removeClass("animated");
    $(".a_word").removeClass("dnap").removeClass("bounceOutRight").removeClass("animated");
    $(".a_btu").removeClass("dnap").removeClass("bounceOutRight").removeClass("animated");


    $(".btu_a_1").removeClass("btu_a_1_move");
    $(".btu_a_2").removeClass("btu_a_2_move");
    $(".btu_a_3").removeClass("btu_a_3_move");
    $(".btu_a_4").removeClass("btu_a_4_move");
    $(".btu_a_5").removeClass("btu_a_5_move");
    $(".btu_a_6").removeClass("btu_a_6_move");
    $(".btu_a_7").removeClass("btu_a_7_move");
    $(".btu_a_8").removeClass("btu_a_8_move");


    $(".btu_a_1").removeClass("dnap").removeClass("bounceOutLeft").removeClass("animated");
    $(".btu_a_2").removeClass("dnap").removeClass("bounceOutLeft").removeClass("animated");
    $(".btu_a_3").removeClass("dnap").removeClass("bounceOutRight").removeClass("animated");
    $(".btu_a_4").removeClass("dnap").removeClass("bounceOutRight").removeClass("animated");
    $(".btu_a_5").removeClass("dnap").removeClass("bounceOutLeft").removeClass("animated");
    $(".btu_a_6").removeClass("dnap").removeClass("bounceOutLeft").removeClass("animated");
    $(".btu_a_7").removeClass("dnap").removeClass("bounceOutRight").removeClass("animated");
    $(".btu_a_8").removeClass("dnap").removeClass("bounceOutRight").removeClass("animated");



    $(".C_round").removeClass("C_round_move");
    $(".C_word_1").removeClass("C_word_1_move");
    $(".C_word_2").removeClass("C_word_2_move");
    $(".C_word_3").removeClass("C_word_3_move");
    $(".C_word_4").removeClass("C_word_4_move");
    $(".C_word").removeClass("C_word_move");


    $(".C_round").removeClass("dnap").removeClass("bounceOutLeft").removeClass("animated");
    $(".C_word_1").removeClass("dnap").removeClass("bounceOutLeft").removeClass("animated");
    $(".C_word_2").removeClass("dnap").removeClass("bounceOutRight").removeClass("animated");
    $(".C_word_3").removeClass("dnap").removeClass("bounceOutRight").removeClass("animated");
    $(".C_word_4").removeClass("dnap").removeClass("bounceOutRight").removeClass("animated");
    $(".C_word").removeClass("dnap").removeClass("bounceOutLeft").removeClass("animated");


    $(".d_word").removeClass("dnap").removeClass("bounceInLeft").removeClass("animated");
    $(".d_table").removeClass("dnap").removeClass("bounceInRight").removeClass("animated");

    $(".d_word").removeClass("dnap").removeClass("bounceOutLeft").removeClass("animated");
    $(".d_table").removeClass("dnap").removeClass("bounceOutRight").removeClass("animated");



    $(".e_word").removeClass("dnap").removeClass("bounceInLeft").removeClass("animated");
    $(".Myvideo").removeClass("Myvideo_move")
    $(".e_btu").removeClass("dnap").removeClass("bounceInRight").removeClass("animated");

    $(".e_word").removeClass("dnap").removeClass("bounceOutLeft").removeClass("animated");
    $(".Myvideo").removeClass("dnap").removeClass("bounceOutRight").removeClass("animated");
    $(".e_btu").removeClass("dnap").removeClass("bounceOutLeft").removeClass("animated");



    $(".f_word").removeClass("dnap").removeClass("flip").removeClass("animated");
    $(".f_btu").removeClass("dnap").removeClass("bounceInUp").removeClass("animated");
    $(".Myfrom").removeClass("dnap").removeClass("bounceInLeft").removeClass("animated");


    $(".f_word").removeClass("dnap").removeClass("bounceOutLeft").removeClass("animated");
    $(".f_btu").removeClass("dnap").removeClass("bounceOutDown").removeClass("animated");
    $(".Myfrom").removeClass("dnap").removeClass("bounceOutRight").removeClass("animated");

    $(".Myvideo1").removeClass("dnap").removeClass("rotateIn").removeClass("animated");
    $(".Myvideo2").removeClass("dnap").removeClass("rotateIn").removeClass("animated");
    $(".Myvideo3").removeClass("dnap").removeClass("rotateIn").removeClass("animated");
  
    $(".Myvideo1").removeClass("dnap").removeClass("rotateOut").removeClass("animated");
    $(".Myvideo2").removeClass("dnap").removeClass("rotateOut").removeClass("animated");
    $(".Myvideo3").removeClass("dnap").removeClass("rotateOut").removeClass("animated");





}



$("#baoming").click(function () {
    var childname = $("#childname").val();
    var Phone = $("#Phone").val();
    var yearValue = $("#year").val();
    var classValue = $("#class").val();
    var schoolValue = $("#school").val();
    var laiyuanValue = $("#laiyuan").val();
    if (childname == "" || Phone == "" || yearValue == 0 || classValue == 0 || schoolValue == 0 || laiyuanValue == 0) {
        alert("请填写完整的信息！！")
    }
    else {
        var myreg = /^(((1[3-8][0-9]{1})|159|153)+\d{8})$/;

        if (!myreg.test(Phone)) {
            alert("请输入有效的电话号码！");
        }
        else {
            $.ajax({
                url: "/PageHandler/AddApply.ashx?name=" + childname + "&age=" + yearValue + "&curriculum=" + classValue + "&campus=" + schoolValue + "&phone=" + Phone + "&source=" + laiyuanValue,
                type: "get",
                success: function (data) {
                    if (data == null) {
                        return false;
                    }
                    else {
                        var obj = JSON.parse(data);
                        if (obj.result == true) {
                            alert("提交成功！！！！");
                            $("#childname").val("");
                            $("#Phone").val("");
                            $("#year  option[value='0'] ").attr("selected", true);
                            $("#class  option[value='0'] ").attr("selected", true);
                            $("#school  option[value='0'] ").attr("selected", true);
                            $("#laiyuan  option[value='0'] ").attr("selected", true);
                           
                        } else {
                            alert(obj.strMessage);
                        }
                    }
                }
            });
        }
    }

    
   
});
$(".you_one").click(function () {
    $(this).parent().fadeOut();
});
$("#mask_one").click(function () {
    $(".youku1").fadeIn();
});
$("#mask_two").click(function () {
    $(".youku2").fadeIn();
});
$("#mask_three").click(function () {
    $(".youku3").fadeIn();
});


//$(".a_fire").addClass("a_fire_move");
//$(".a_people").addClass("a_people_move");
//$(".a_word").addClass("a_word_move");
//$(".a_btu").addClass("a_btu_move");


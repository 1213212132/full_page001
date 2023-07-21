$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })



    $(".main_content").fullpage({
        navigation: true,//네비게이션 유무
        navigationPosition: "right",//네비게이션 위치
        sectionsColor: ["#fff", "#4bbfc3", "#7baabe", "#666"],//각 섹션 배경색, 배열의 형식
        navigationTooltips: ["MAIN", "NEWS", "3번", "4번"],//네비게이션 텍스트, 배열의 형식
        showActiveTooltip: true//네비게이션 선택 메뉴 활성화
    });



})



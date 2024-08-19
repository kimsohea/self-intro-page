

$(function(){
    console.log(`
==========================\n
   Cat Bless: No bugs! \n
           \n
*｡*.。* ∧,,,∧
  ヾ(⌒(_=◕ ω◕)_\n 
==========================\n
`);

    //로딩페이지
    let src = [`./img/loading01.png`,`./img/loading02.png`,`./img/loading03.png`,`./img/loading04.png`] ;
    loadingRepeatAndEnd(0,250,loadingUpAni,classUpFunc);
        //로딩문자
    loadingStrAni(`L O A D I N G . . .`,$(`.loadStr`));

    randomeCard();
    
    //카드 펼치기 순서대로
    setTimeout(function(){
        $(`.hand`).addClass(`handAni`);
        setTimeout(function(){
            $(`.cardAni>ul>li`).removeClass(`on`);
        },20);
    },3490);
    //setTimeout(function(){
    //    
    //},3510);
    cardAni(5700,8);
    cardAni(5800,7);
    cardAni(5900,6);
    cardAni(6000,5);
    cardAni(6100,4);
    cardAni(6200,3);
    cardAni(6300,2);
    cardAni(6400,1);
    cardRotate(8500);
    setTimeout(function(){
        $(`.programUtil`).addClass(`on`);
        setTimeout(function(){
            $(`.programPer`).addClass(`on`);
            percentageFunc(95, `.illuUtilPer`);
            percentageFunc(85, `.jquerUtilPer`);
            percentageFunc(95, `.cssUtilPer`);
            percentageFunc(95, `.photoUtilPer`);
            percentageFunc(80, `.javaUtilPer`);
            percentageFunc(95, `.htmlUtilPer`);

            utilCardHoverFunc(`.cardAni>ul>li`,`.programPer>li`,`.utilPara`)
        },500);
    },8700);
    
    //이력서 단락 마스코트 애니메이션
    attrAni($(`.mascot>figure>.catbody`),500);
    closeEye($(`.openEyes`),$(`.eyeClose`));
    eyeAni($(`.resumeBlock`),$(`.moveEye`));
    toolTipTyping(`안녕하세요! \n 능력있는 웹 퍼블리셔를 꿈꾸는 \n 김소혜입니다!`,$(`.masTooltipPara`));

    //사이트 슬라이드 bx슬라이더
    $(`.siteSlider`).bxSlider({
        mode:`fade`,
        infiniteLoop: true,
        auto:true,
        stopAutoOnClick:false,
        autoHover: true,
        pause:2000
    });

    attrAni($(`.masCatAnnoun>.catHead`),250);

    // 오퍼시티가 랜덤하게 변하는 light
	setInterval(randomeLight,400);

    //팝업카드 슬라이드
    let cardTimer = setInterval(cardSlideAni,2000);

    //팝업카드 마우스 올리면 멈추게
    popUpMouseStop(cardTimer,cardSlideAni);

    //팝업목업 슬라이드
    popUpSlide();
    //배너목업 슬라이드
    bannerSlide();
    //인스타 슬라이드
    instaSlide();

    //인스타 디자인들 bx슬라이더
    let bx1 = $(`.everSlider`).bxSlider({
        slideWidth: 355,
        pager: false,
        controls: false,
        auto: true,
        pause: 2000,
        stopAutoOnClick:false,
        autoHover:false,
        adaptiveHeight: true
    });
    
    let bx2 = $(`.casaSlider`).bxSlider({
        slideWidth: 355,
        pager: false,
        controls: false,
        auto: true,
        pause: 2000,
        stopAutoOnClick:false,
        autoHover:false,
        adaptiveHeight: true
    });
    
    let bx3 = $(`.nelliSlider`).bxSlider({
        slideWidth: 355,
        pager: false,
        controls: false,
        auto: true,
        pause: 2000,
        stopAutoOnClick:false,
        autoHover:false,
        adaptiveHeight: true
    });
    // reloadSlider
    setTimeout(function(){
        bx1.reloadSlider();
        bx2.reloadSlider();
        bx3.reloadSlider();
    },500)
    
    contactFunc();
    contactMasAni($(`.contact>figure>img`),contactMasArray);
    
    
    //마지막 인사
    toolTipTyping(`끝까지 봐주셔서 감사합니다!`,$(`.endingTooltip>p`));

    // paticleAni(1,2,3);
    paticleAni(1,2,3);
    randomTranslate(1);
    randomTranslate(2);
    randomTranslate(3);
});
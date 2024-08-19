//로딩페이지 이미지
let src = [`./img/loading01.png`,`./img/loading02.png`,`./img/loading03.png`,`./img/loading04.png`];
let count = 0;
function loadingRepeatAndEnd(count,timer,callback01,callback02){
    let catLoadingAni = setInterval(function(){
        count++
        $(`.catLoading>img`).attr(`src`,src[count%2]);
        if(count>8){
            $(`.catLoading>img`).attr(`src`,src[2]);
            clearInterval(catLoadingAni);
            callback01((timer*count/3)-200,callback02)
        }
    },timer);
}
function loadingUpAni(timer,callback01){
    setTimeout(function(){
        $(`.catLoading>img`).attr(`src`,src[3]);
        setTimeout(function(){
            callback01();
        },50);
    },timer);
}
function classUpFunc(){
    $(`.catLoading>img.cat`).addClass(`up`);
    setTimeout(function(){
        $(`.loadingPage`).addClass(`up`);
        $(`.wrap`).removeClass(`loading`);
    },300);
}

//로딩문자 애니메이션
function loadingStrAni(loadingStr,loadTxt){
    let loading = loadingStr.split(` `);
    let loadingCount = 0;
    let roop = 0;
    let text = ``;
    let loadTimer = setInterval(function(){
        text += loading[loadingCount];
        loadTxt.text(text);
        loadingCount++;
        if(loadingCount == loading.length){
            text = ``
            loadTxt.text(``);
            loadingCount = 0;
            roop++
        }
        if(roop == 2){
            clearInterval(loadTimer);
        }
    },120);
}

//랜덤카드 
let cardArray = [`./img/trumpIcon_02.png`,`./img/trumpIcon_03.png`,`./img/trumpIcon_04.png`,`./img/trumpIcon_05.png`,`./img/trumpIcon_06.png`,`./img/trumpIcon_07.png`,`./img/trumpIcon_08.png`,`./img/trumpIcon_09.png`,`./img/trumpIcon_10.png`]
let randomeCardNum01 = Math.ceil(Math.random()*100)%cardArray.length;
let randomeCardNum02 = Math.ceil(Math.random()*100)%cardArray.length;
function randomeCard(){
    $(`.randomeCard01>figure>img`).attr(`src`,cardArray[randomeCardNum01]);
    $(`.randomeCard02>figure>img`).attr(`src`,cardArray[randomeCardNum02]);
    if(randomeCardNum01 === randomeCardNum02){
        $(`.randomeCard01>figure>img`).attr(`src`,cardArray[randomeCardNum01]);
        $(`.randomeCard02>figure>img`).attr(`src`,cardArray[randomeCardNum02+1]);
    }
}

//카드 도입부 애니메이션
function cardAni(time,order){
    setTimeout(function(){
        $(`.cardAni>ul>li:nth-of-type(`+order+`)`).addClass(`rotateOn`);
    },time);
    setTimeout(function(){
        $(`.cardAni>ul>li:nth-of-type(`+order+`) figure`).addClass(`cardBack`);
        $(`.cardAni>ul>li`).css(`transform-origin`,`center`);
    },time+700)
}

//카드 돌리기 애니메이션
function cardRotate(time){
    setTimeout(function(){
        $(`.cardAni>ul>li`).addClass(`rotateAndScale`);
        $(`.cardAni>ul>li`).css(`transition`,`all .5s ease-in-out`)
},time)
    setTimeout(function(){
        $(`.cardAni>ul>li`).addClass(`rotateAfter`);
    },time+1000);
}

//프로그램 수치 함수
function percentageFunc(percent,spanClass){
    let per = 0;
    let timer = setInterval(function(){
        if(per<percent){
            per++;
            $(spanClass).text(per+`%`);
        } else {
            clearInterval(timer);
        }
    },20);
    
}
//카드마우스 오버 및 리브
let timer;
function utilCardHoverFunc(hoverTrigger,perClass,paraClass){
    $(hoverTrigger).mouseenter(function(){
        let idx = $(this).index();
        let hoverSrc = $(this).find(`img`).attr(`hoverSrc`);
        if(idx == 0){
            return false
        }
        if(idx == 4){
            $(`.programUtil`).addClass(`hover`);
        }
        $(perClass).eq(idx-1).addClass(`hover`);
        $(paraClass).eq(idx-1).addClass(`hover`);
        let _this = this;
        
        timer = setTimeout(function(){
            $(_this).find(`img`).attr('src',hoverSrc);
        },500)
    }).mouseleave(function(){
        let defaultSrc = $(this).find(`img`).attr(`defaultSrc`);
        $(`.programUtil`).removeClass(`hover`);
        $(perClass).removeClass(`hover`);
        $(paraClass).removeClass(`hover`);
        $(this).find(`img`).attr('src',defaultSrc);
        clearTimeout(timer);
    });    
}

//눈깜빡임
function closeEye(openEye,closeEye){
    let eyeClose = true;
    setInterval(function(){
        openEye.addClass(`close`);
        closeEye.removeClass(`close`);
        eyeClose = false;
        if(eyeClose != true){
            setTimeout(function(){
                openEye.removeClass(`close`);
                closeEye.addClass(`close`);
                eyeClose = true;
            },100);
        }
    },3000);
}

//마스코트 입/눈 attr깜박임 애니메이션
function attrAni(catbody,timer){
    let mouseClose = true;
    let open = catbody.attr(`openImg`);
    let close = catbody.attr(`closeImg`);
    setInterval(function(){
        catbody.attr(`src`,close);
        mouseClose = false;
        if(mouseClose != true){
            setTimeout(function(){
                catbody.attr(`src`,open);
                mouseClose = true;
            },timer);
        }
    },1000);
}

//이력 마스코트 눈 움직이는 애니메이션 
function eyeAni(resumeBlock,moveEyeObj){
    resumeBlock.mousemove(function(e){
        let moveX = e.clientX;
        let moveY = e.pageY;
        let moveEye = {
            eyeX: moveEyeObj.offset().left - moveX,
            eyeY: moveEyeObj.offset().top - moveY 
        }
        let eyeOffset = {
            x: moveEye.eyeX/100,
            y: moveEye.eyeY/50
        };
        if(Math.abs(eyeOffset.x)>14){
            eyeOffset.x = 6;
        }
        if(Math.abs(eyeOffset.y)>10){
            eyeOffset.y = 0;
        }
        moveEyeObj.css(`transform`,`translate(`+(-50-eyeOffset.x)+`%,`+(-50-eyeOffset.y)+`%)`)
    });
}

//이력 마스코트 말풍선 내용 타이핑
function toolTipTyping(textcontent,introTxt){
    let introInnerTxt = ``;
    let i = 0;
    let toolTimer = setInterval(function(){
        let txt = textcontent[i++];
        introInnerTxt += txt === "\n" ? "<br/>": txt;
        introTxt.html(introInnerTxt);
        if (i >= textcontent.length) {
            introInnerTxt = ``;
            i = 0;
        }
    },200);
}

//빔프로젝터 빛 깜박임
function randomeLight(){
    let randomeNum = (Math.ceil(Math.random()*10)*0.1)+0.3;
    let randomHue = Math.ceil(Math.random()*100)/2;
    $(`.light`).css(`filter`,`hue-rotate(`+randomHue+`deg)`)
    $(`.light`).css(`opacity`,randomeNum);
}

//팝업 카드 슬라이드
let cards = [
    "./img/popupCard_01.png",
    "./img/popupCard_02.png",
    "./img/popupCard_03.png",
    "./img/popupCard_04.png",
    "./img/popupCard_05.png",
    "./img/popupCard_06.png",
    "./img/popupCard_07.png",
    "./img/popupCard_08.png",
    "./img/popupCard_09.png",
] 
let cardsIdx = 9;
function cardSlideAni(){
    cardsIdx--;
    if(cardsIdx == 0) {
        cardsIdx = 9;
    }
    $(`.popupCards>ul>li`).css(`transition`,`all .5s ease-in-out`);
    $(".popupCards>ul>li").each(function(i){
        $(this).removeClass();
        $(this).addClass("card"+(((i+cardsIdx)%9)+1));
    });
    $(`.popupCards>ul>li.card9`).css(`transition`,`none`);
    setTimeout(function(){
        $(".popupCards>ul>li.card5").addClass("back");
    },250);
}

//마우스 오버시 슬라이드 멈춤
function popUpMouseStop(cardTimer,cardSlideAni){
    $(`.popupCards>ul>li`).mouseenter(function(){
        $(this).addClass(`hover`)
        clearInterval(cardTimer);
    }).mouseleave(function(){
        $(this).removeClass(`hover`);
        cardTimer = setInterval(cardSlideAni,2000);
    });
}

//팝업슬라이드
function popUpSlide(){
    //팝업 슬라이드
    let popupIdx = 0;
    $(`.popupCards>ul>li`).click(function(){
        if($(this).hasClass(`card5`)){
            popupIdx = $(this).index();
            if(popupIdx >= 1 || popupIdx <= 7 ){
                $(`.popupPrevBtn`).css(`color`,`#fcca00`);
                $(`.popupNextBtn`).css(`color`,`#fcca00`);
            }
            $(`.popupMockup`).addClass(`active`);
            $(`.popupMockup>ul`).css(`transform`,`translateX(-`+popupIdx*(100/9)+`%)`);
            setTimeout(function(){
                $(`.popupMockup`).addClass(`innerActive`);
                $(`.popupBtnList`).addClass(`active`);
            },1500);
        }
    });

    //팝업목업 슬라이드
    $(`.popupNextBtn`).click(function(){
        popupIdx++;
        if(popupIdx >= 8){
            popupIdx = 8;
            $(this).css(`color`,`#b7b7b7`); 
        }
        if(popupIdx >= 1){
            $(`.popupPrevBtn`).css(`color`,`#fcca00`);
        }
        $(`.popupMockup>ul`).css(`transform`,`translateX(-`+popupIdx*(100/9)+`%)`);
    });
    $(`.popupPrevBtn`).click(function(){
        popupIdx--;
        if(popupIdx <= 0){
            popupIdx = 0;
            $(this).css(`color`,`#b7b7b7`);
        }
        if(popupIdx <= 7 ){
            $(`.popupNextBtn`).css(`color`,`#fcca00`);
        }
        $(`.popupMockup>ul`).css(`transform`,`translateX(-`+popupIdx*(100/9)+`%)`);
    });

    //팝업목업 클로즈 버튼
    $(`.popupClose`).click(function(){
        $(`.popupMockup`).removeClass(`innerActive`);
        $(`.popupBtnList`).removeClass(`active`);
        setTimeout(function(){ $(`.popupMockup`).removeClass(`active`);},500);
    });
}

function bannerSlide(){
    let bannerIdx = 0;
    $(`.bannerCardList>li`).mouseenter(function(){
        $(this).addClass(`hover`);
    }).mouseleave(function(){
        $(this).removeClass(`hover`);
    }).click(function(){
        bannerIdx = $(this).index();
        $(`.bannerMockupBtn`).addClass(`active`);
        $(`.bannerMockupSlide>ul`).addClass(`active`);
        
        $(`.bannerMockupSlide>ul>li`).removeClass('active');
        $(`.bannerMockupSlide>ul>li`).eq(bannerIdx).addClass('active');

        $(`.bannerCardAni`).addClass(`active`);
        $(`.bannerMockupSlide`).addClass(`active`);
        setTimeout(function(){
            $(`.bannerCardAni`).removeClass(`active`);
        },3001);
    });

    //배너목업 슬라이드
    let timermoc;
    $(`.bannerClose`).click(function(){
        clearTimeout(timermoc);
        $(`.bannerMockupBtn`).removeClass(`active`);
        $(`.bannerMockupSlide>ul`).removeClass(`active`);
        setTimeout(function(){
            $(`.bannerMockupSlide`).addClass(`out`);
        },500);
        timermoc=setTimeout(function(){
            $(`.bannerMockupSlide`).removeClass(`out`);
            $(`.bannerMockupSlide`).removeClass(`active`);
        },1500);
    })
    //배너목업 슬라이드 버튼
    $(`.bannerNextBtn`).click(function(){
        bannerIdx++;
        if(bannerIdx > 7){
            bannerIdx = 0; 
        }
        $(`.bannerMockupSlide>ul>li`).removeClass('active');
        $(`.bannerMockupSlide>ul>li`).eq(bannerIdx).addClass('active');
    });
    $(`.bannerPrevBtn`).click(function(){
        bannerIdx--;
        if(bannerIdx < 0){
            bannerIdx = 7; 
        }
        $(`.bannerMockupSlide>ul>li`).removeClass('active');
        $(`.bannerMockupSlide>ul>li`).eq(bannerIdx).addClass('active');
    });
}
function instaSlide(){
    let instaIdx = 0;
    $(`.Thumb>ul>li`).click(function(){
        instaIdx = $(this).index();
        $(`.instaProfile>ul>li`).removeClass('active');
        $(`.instaSlide>div`).removeClass('active');
        $(`.instaProfile>ul>li`).eq(instaIdx).addClass('active');
        $(`.instaSlide>div`).eq(instaIdx).addClass('active');
    });
}

//파티클 효과
let particleArray = [
    [`./img/paticle01_01.png`,`./img/paticle01_02.png`,`./img/paticle01_03.png`,`./img/paticle01_04.png`],
    [`./img/paticle02_01.png`,`./img/paticle02_02.png`,`./img/paticle02_03.png`,`./img/paticle02_04.png`],
    [`./img/paticle03_01.png`,`./img/paticle03_02.png`,`./img/paticle03_03.png`,`./img/paticle03_04.png`]
]
let paticlenum = 0;
function paticleAni(num1,num2,num3){
    setInterval(function(){
		paticlenum++
		let oneToFour = paticlenum%particleArray[0].length;
		$(`.paticle>figure:nth-of-type(`+num1+`) img`).attr(`src`,particleArray[0][oneToFour]);
		$(`.paticle>figure:nth-of-type(`+num2+`) img`).attr(`src`,particleArray[1][oneToFour]);
		$(`.paticle>figure:nth-of-type(`+num3+`) img`).attr(`src`,particleArray[2][oneToFour]);
	},200);
}

function randomTranslate(num){
    setInterval(function(){
         let randomeX = Math.ceil(Math.random()*200);
         let randomeY = Math.ceil(Math.random()*200);
         $(`.paticle>figure:nth-of-type(`+num+`)`).css(`transform`,`translate( -`+randomeX+`%, -`+randomeY+`%`);
     },800);

}

//contact 마스코트 애니메이션
let contactMasArray = [`./img/contactMas01.png`,`./img/contactMas02.png`];
let contactnum = 0;
function contactMasAni(aniObj,array){
    setInterval(function(){
        contactnum++;
        let contactImg = contactnum%contactMasArray.length;
        aniObj.attr('src', array[contactImg]);
    },500);
}
//마우스 오버시 들어갈 동작
function contactFunc(){
    $(`.ending>.cat`).mouseenter(function(){
        $(this).addClass('active');
        $(`.endingTooltip`).addClass('active');
        $(`.contact`).addClass('active');
    });
    $(`.contact`).mouseleave(function(){
        $(this).removeClass('active');
        $(`.ending>.cat`).removeClass('active');
        $(`.endingTooltip`).removeClass('active');
    });
}


//mobile function

function mobileCardAni(num,timer){
    setTimeout(function(){
        $(`.cardAni>ul>li`).eq(num).removeClass(`on`);
    },timer);
    return timer+500;
}



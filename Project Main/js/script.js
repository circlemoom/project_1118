// 배너 컨텐츠 
document.addEventListener('scroll', function() {
    const contents1 = document.querySelectorAll('.banner_contents1 li');
    const contents2 = document.querySelectorAll('.banner_contents2 li');
    
    contents1.forEach((item) => {
        if (item.getBoundingClientRect().top < window.innerHeight - 50) {
            item.classList.add('visible');
        }
    });
    
    contents2.forEach((item) => {
        if (item.getBoundingClientRect().top < window.innerHeight - 50) {
            item.classList.add('visible');
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const backtopIcon = document.querySelector(".backtop");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0 // 섹션에 들어가자마자 트리거
    };

    function observerCallback(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 흰색으로 설정할 섹션
                if (["banner", "what_we_do", "footer_fst", "footer_snd"].includes(entry.target.id)) {
                    backtopIcon.style.filter = "brightness(1)"; // 흰색
                }
                // 검정색으로 설정할 섹션
                else if (["brand_vision", "our_business"].includes(entry.target.id)) {
                    backtopIcon.style.filter = "brightness(0)"; // 검정색
                }
            }
        });
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 각 섹션을 감시
    observer.observe(document.getElementById("banner"));
    observer.observe(document.getElementById("what_we_do"));
    observer.observe(document.getElementById("footer_fst"));
    observer.observe(document.getElementById("footer_snd"));
    observer.observe(document.getElementById("brand_vision"));
    observer.observe(document.getElementById("our_business"));
});





// 브랜드비전
$(document).ready(function () {
    // 초기 상태를 숨김으로 설정
    $('.vision, .k_vision, .e_vision').css('opacity', 0);

    $(window).on('scroll', function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();

        $('.vision').each(function () {
            var elemPos = $(this).offset().top;
            if (scrollPos + windowHeight > elemPos + 100) {
                $(this).animate({ opacity: 1 }, 1000); // 1초 동안 페이드 인
            }
        });

        $('.k_vision').each(function () {
            var elemPos = $(this).offset().top;
            if (scrollPos + windowHeight > elemPos + 100) {
                $(this).delay(200).animate({ opacity: 1 }, 1000); // 0.2초 지연 후 페이드 인
            }
        });

        $('.e_vision').each(function () {
            var elemPos = $(this).offset().top;
            if (scrollPos + windowHeight > elemPos + 100) {
                $(this).delay(400).animate({ opacity: 1 }, 1000); // 0.4초 지연 후 페이드 인
            }
        });
    });
});


// 왓위두
$(document).ready(function () {
    let lastScrollTop = 0; // 마지막 스크롤 위치를 저장할 변수

    $(window).on('scroll', function () {
        const currentScrollTop = $(this).scrollTop(); // 현재 스크롤 위치
        const isScrollingDown = currentScrollTop > lastScrollTop; // 스크롤 방향 확인

        // 스크롤이 내려갈 때
        if (isScrollingDown) {
            $('#what_we_do .what_we_do_center img').each(function (index) {
                if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
                    setTimeout(() => $(this).addClass('visible'), index * 250); // 지연 시간 증가
                }
            });
        }
        // 스크롤이 올라갈 때
        else {
            $('#what_we_do .what_we_do_center img').each(function (index) {
                if ($(this).offset().top > $(window).scrollTop() + $(window).height() - 200) {
                    setTimeout(() => $(this).removeClass('visible'), index * 200); // 지연 시간 증가
                }
            });
        }

        lastScrollTop = currentScrollTop; // 마지막 스크롤 위치 업데이트
    });
});



// 아워서비스
$(document).ready(function () {
    $('.img-wrap').hover(
        function () {
            $(this).find('.mainimg').css('opacity', '0');
            $(this).find('.hoverimg').css('opacity', '1');
        },
        function () {
            $(this).find('.mainimg').css('opacity', '1');
            $(this).find('.hoverimg').css('opacity', '0');
        }
    );
});







// footer icon

$(document).ready(function(){
    $(".footer_snd_center a").click(function(){
        $(this).find("img").animate({ 
            marginTop: "-10px" 
        }, 200).animate({ 
            marginTop: "0px" 
        }, 200);
    });
});

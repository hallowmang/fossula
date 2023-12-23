const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

/* 제이쿼리 */

$(function(){
  // 스크롤시 헤더 색상변경
  $(window).scroll(function() {
    // 현재 스크롤 위치 가져오기
    let scrollPosition = $(window).scrollTop();
    // 스크롤 임계값 설정 (색상 변경 지점)
    let scrollThreshold = 100; // 필요에 따라 이 값을 조정

    // 스크롤 위치가 임계값을 넘었는지 확인
    if (scrollPosition > scrollThreshold) {
      // `fill` 속성을 black으로 변경
      $("path").css("fill", "black");
      // `<a>` 태그의 `color` 속성을 black으로 변경
      $(".header a").css("color", "black");
    } else {
      // `fill` 속성을 다시 white로 변경
      $("path").css("fill", "white");
      // `<a>` 태그의 `color` 속성을 다시 white로 변경
      $(".header a").css("color", "white");
    }
  });

  $('.header .menu-dot').click(function(){
    $(this)
  })


  //푸터 패밀리사이트
  $('.family-site').click(function(){
    // .family-site 요소를 클릭할 때 .on 클래스를 토글
    $(this).toggleClass('on');
    let familySite = $('.family-site')
    // .family-site-menu를 선택하고 그 안의 요소에 접근
    let familyMenu = $('.family-site-menu');
    
    if (familySite.hasClass('on')) {
      // 만약 .family-site-menu가 .on 클래스를 가지고 있다면
      familyMenu.animate({
        opacity: 1
      }, 300); // 원하는 트랜지션 시간(ms)을 적용
    } else {
      // .family-site-menu가 .on 클래스를 가지고 있지 않다면
      familySite.removeClass('on');
      familyMenu.animate({
        opacity: 0
      }, 300); // 원하는 트랜지션 시간(ms)을 적용
    }
  })
})


/* GSAP */
gsap.registerPlugin(ScrollTrigger);

// 모든 .section-img-box img에 애니메이션 적용
/* .section-img-box img 클래스를 가진 모든 요소를 반복하고 각 요소에 대해 애니메이션을 설정. 
gsap.utils.toArray()를 사용하여 모든 요소를 가져옵니다. 이렇게 하면 모든 이미지에 애니메이션이 올바르게 적용 */

gsap.utils.toArray('.section-img-box img').forEach((img)=>{
  gsap.set(img,{
    scale:1.2,
    yPercent:-5,
  }),
  gsap.to(img,{
    scrollTrigger:{
      trigger:img.closest(".section-img-box"),
      start:"0% 100%",
      end:"100% 0%",
      // markers:true,
      scrub:true,
    },
    scale:1,
    yPercent:0,
  });
});

//모든 텍스트 애니메이션

gsap.utils.toArray('.section-inner').forEach(text=>{
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: text,
      start: "0 80%",
      end: "70% center",
      // markers: true,
      scrub: 1,
      // onEnter: () => { animate(text) }
    }
  });

  // 각 요소를 원하는 순서대로 나타나게 설정
  tl.fromTo(text.querySelector('.title'), { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration:0.5,  ease: "none" })
    .fromTo(text.querySelector('.subtitle'), { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration:0.5,  ease: "none" })
    .fromTo(text.querySelector('.description'), { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration:0.5,  ease: "none" })
    .fromTo(text.querySelector('.amount-price-group'), { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration:0.5,  ease: "none" });
});

// const animate = (text)=>{
//   gsap.fromTo(text, 
//       {autoAlpha:0, y:100},
//       {autoAlpha:1, y:0, duration:1.25, overwrite:"auto", ease:"expo"}
//     );
// }

/* --------------------- */

//브랜드 정보
gsap.utils.toArray('.sc-brand-info .info-box').forEach(box => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: box,
      start: "top 80%",
      end: "center 80%",
      // markers: true,
      scrub: 2, // 스크롤 속도에 따라 조절
      // onEnter: () => { animate(box) }
    }
  });

  tl.fromTo(box.querySelector('h3'), { autoAlpha: 0, y: 0 }, { autoAlpha: 1, y: 20, duration: 1.25, ease: "expo" })
    .fromTo(box.querySelector('p'), { autoAlpha: 0, y: 0 }, { autoAlpha: 1, y: 20, duration: 1.25, ease: "expo" });
});


//롤링 로고
// gsap.utils.toArray('.rollLogo-box').forEach(box => {
//   gsap.to(box, {
//     x: -1800, // 왼쪽으로 이동할 거리
//     scrollTrigger: {
//       trigger: box,
//       start: "top 90%", 
//       end: "bottom top", 
//       // markers: true, 
//       scrub: 1, // 스크롤에 따라 움직이도록 설정
//       ease: "Power2.easeInOut"
//     }
//   });
// });


gsap.to(".rollLogo-box", {
  xPercent:100,
  // x: -1800, // 왼쪽으로 이동할 거리
  scrollTrigger: {
    trigger: ".sc-rolling-logo",
    start: "top 90%", 
    end: "bottom top", 
    // markers: true, 
    scrub: 1, // 스크롤에 따라 움직이도록 설정
    ease: "Power2.easeInOut"
  }
});





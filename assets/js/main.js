// landing
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)



const introTl=gsap.timeline({
    onComplete:function(){
      $('.landing-wrap').remove();
      introTl2.play();
    }
  })
introTl
.to('.landing .landing-overlay',{ height:0,stagger:0.2,})  


introTl2 = gsap.from('#sc-main',{opacity:0,paused:true})


// 스크롤 이동
$('.scroll').click(function(event){
  console.log(".scroll");
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});




gsap.set('.nav',{autoAlpha:0})
gsap.set('.nav .btn-close',{scale:0,rotation:360})
menuTl=gsap.timeline({
  paused:true,
})
menuTl.to('.nav',{autoAlpha:1},'a')
menuTl.to('.nav .bg-overlay',{ height:'100%',stagger:0.2,},'a')  
menuTl.to('.nav .btn-close',{scale:1,rotation:0})
menuTl.to('.nav .nav-menu .menu-item a',{yPercent:-100,stagger:0.1,})


// gsap.to(',{opacity:0,paused:true})


$('.btn-menu').click(function(){
  menuTl.play();
})

$('.nav .btn-close').click(function(){
  menuTl.reverse();
})




// visual
gsap.set('#sc-visual .img-area>img',{scale:2, stagger:0.1})

descBg = gsap.timeline({
  scrollTrigger: {
    trigger: '#sc-visual',
    start: "0% 100%",
    end: "100% 0%",
    scrub:0,
  },
  
})
descBg.to('#sc-visual .img-area>img',{ scale:1.5 ,stagger:0.1},'a')

// about

$('[data-line]').each(function(){
  gsap.to($(this),{
    scrollTrigger: {
      trigger: $(this),
      start: "0% 50%",
      end: "100% 100%",
    },
    '--bar':'100%'
  })

})



//sc-info
gsap.set('#About .sc-info .txt',{ xPercent:50,stagger:0.1},)
worKmv = gsap.timeline({
  scrollTrigger: {
    trigger: '#About',
    start: "0% 50%",
    end: "100% end",
    scrub:1,
  },
})

worKmv.to('#About .sc-info .txt',{ xPercent:-30,stagger:0.1},)

// projects
// gsap.set('.sc-project .item-link img',{scale:.9, stagger:0.1})

descBg = gsap.timeline({
  scrollTrigger: {
    trigger: '#sc-project',
    start: "0% 0%",
    end: "100% 100%",
    scrub:1,
  },
  
})
descBg.to('#sc-project .item-link img',{ scale:1.2 ,stagger:0.1},'a')





$('#sc-project .item').mousemove(function(e){
  xVal = e.offsetX - window.innerWidth/2;
  yVal = e.offsetY - window.innerHeight/2;;


  gsap.to($(this).find('.icon'),{
    x:xVal/10,
    y:yVal/10
  })

})

hovMotion = gsap.timeline({
  paused:true,
})


hovMotion
.set('#sc-project .item .btn',{ scale:0,rotation:360})
.to('#sc-project .item .btn',{ scale:1,rotation:0 })

$('#sc-project .item').mouseover(function () {
    m1=setTimeout(() => {
      hovMotion.restart();
    }, 100);
})

$('#sc-project .item .btn').mouseout(function () {
  clearTimeout(m1)
})
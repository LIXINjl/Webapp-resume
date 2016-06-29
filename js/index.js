/**
 * Created by Shinelon on 2016/6/28.
 */


FastClick.attach(document.body);

~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 750 * 100 + "px";
}();

new Swiper(".swiper-container", {
    loop: true,
    direction: "vertical",
    onSlidePrevEnd: changeEnd,
    onSlideNextEnd: changeEnd
});

function changeEnd(swiper){
    var n=swiper.activeIndex,
        slideAry=swiper.slides;
        [].forEach.call(slideAry,function(slide,index){
        if(n===index){
            slide.id=(n==1||n==3)?"page1":"page2";
            return;
        }
            slide.id=null;
    })
}


/*var music=document.getElementById('music'),
    musicAudio=document.getElementById('musicAudio');
window.setTimeout(function(){
   musicAudio.play();
    musicAudio.addEventListener("canplay",function(){
        music.style.display="block";
        music.className="music move";
    },false);
},1000);
music.addEventListener("click",function(){
    if(musicAudio.paused){
        musicAudio.play();
        music.className="music move";
        return;
    }
    musicAudio.pause();
    music.className="music";
},false);*/








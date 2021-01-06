const tl=gsap.timeline({default:{ease:"power1.out"}});

tl.to(".text",{y:"0%",duration:1,stagger:0.3});
tl.to(".slider",{y:"-100%",duration:1.5,delay:3});
tl.to(".intro",{y:"-100%",duration:1},"-=1");
tl.fromTo("nav",{opacity:0},{opacity:1,duration:1.5});
tl.fromTo(".big-text",{opacity:0},{opacity:1,duration:1.5},"-=1");

const svg= document.querySelectorAll('#svg path');
for(let i=0;i<svg.length;i++){
    console.log(`letter ${i} is ${svg[i].getTotalLength()}`);
}
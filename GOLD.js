function codes() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smoothMobile: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
codes()





















var arr = [
  { img: "https://images.unsplash.com/photo-1633588567213-0fc89c4e4fb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60", name: "Rembrand" },
  { img: "https://images.unsplash.com/photo-1576504677598-49a46e4b7abb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=456&q=80", name: "RenMarden" },
  { img: "https://images.unsplash.com/photo-1623659953699-51d6ed16d8b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60", name: "Drige Gold" },
]
cultter = ""
arr.forEach(function (dets) {
  cultter += `<div id="part2-card1">
<div id="part2-photo"><img src="${dets.img}" alt=""></div>
    <h1>${dets.name}</h1>
</div>
`
})
document.querySelector("#part2-cards").innerHTML = cultter
var move = gsap.timeline();
move.from("#part1-nav-text p,#right-nav-box", {
  stagger: 0.2,
  opacity: 0,
  duration: 1,
  y: 50,
  ease: "export.easeInOut",
})
  .from("#part1-right img", {
    stagger: 0.2,
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "export.easeInOut",
  }, "-=1")

  .from("#part1-right h1,#part1-left h1", {
    stagger: 0.2,
    opacity: 0,
    x: "-150",
    duration: 1.5,
    ease: "export.easeInOut",
  }, "-=1")

gsap.from("#part2-photo img", {
  scrollTrigger: {
    trigger: "#part2-photo img",
    scroller: "#main",
    start: "top 90%",
    scrub: 5,
    end: "top 35%"
  },
  stagger: 2,
  opacity: 0,
  y: 200,
  duration: 2,
  ease: "export.easeInOut",
})
gsap.from("#part3-left img,#part3-text p", {
  scrollTrigger: {
    trigger: "#part3-left img",
    scroller: "#main",
    start: "top 20%",
    scrub: 5,
    end: "top 70%",
  },
  opacity: 0,
  x: -300,
  duration: 1,
  ease: "export.easeInOut",
})

gsap.from("#part3-text h2", {
  scrollTrigger: {
    trigger: "#part3-text h2",
    start: "top 90%",
    scroller: "#main",
    scrub: 5,
    end: "top 70%",
  },
  opacity: 0,
  x: 300,
  duration: 1,
  ease: "export.easeInOut",
})

let nav = document.querySelector("nav.navbar"),
  menu = document.querySelector(".navbar .navbar__container > ul");

document.addEventListener("scroll", (e) => {
  let PageScroll = document.scrollingElement.scrollTop,
    navPosition = nav.offsetTop;
  if (PageScroll > navPosition + 0.5) {
    nav.classList.add("nav--show")
  } else {
    nav.classList.remove("nav--show")
  }
});
if (document.body.classList.contains("landing-page")) {
  let navLink = document.querySelectorAll(".navbar .navbar__container>ul>li>a");
  for (let n = 0; n < navLink.length; n++) {
    navLink[n].addEventListener("click", function (e) {
      let target = "#" + navLink[n].getAttribute("href");
      e.preventDefault()
      window.scrollTo({
        top: document.querySelector(target).offsetTop - 70,
        behavior: "smooth"
      })
    });
  }
  let sections = document.querySelectorAll(".section-container")
  window.onscroll = () => {
    let scrollPosition = document.documentElement.scrollTop + 75 || document.body.scrollTop + 75;
    for (let s = 0; s < sections.length; s++) {
      if (sections[s] && sections[s].offsetTop <= scrollPosition) {
        let id = sections[s].getAttribute("id");
        document.querySelector(".active").classList.remove("active")
        document.querySelector("a[href*=" + id + "]").classList.add("active")
      }
    }
  }
}

if (document.body.classList.contains("landing-page")) {
  let menuBtn = document.querySelector(".phone-menu")
  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("navbar--show-phone")
    menu.classList.toggle("show-list")
  })
}

// down-arrow btn
let downArrow = document.querySelector(".arrow-down"),
  servicesSection = document.querySelector("#services");

if (document.body.classList.contains("landing-page")) {
  downArrow.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: servicesSection.offsetTop - 70,
      behavior: "smooth"
    })
  })
}

// project images show
let projectImage = document.querySelectorAll(".project-img"),
  projectImageLength = projectImage.length,
  layer = document.querySelector(".layer"),
  layerClose = document.querySelector(".layer .layer__container i"),
  layerImg = document.querySelector(".layer .layer__container img")

if (document.body.classList.contains("project")) {
  layerClose.addEventListener("click", () => {
    layer.classList.remove("layer--show")
  })

  for (let i = 0; i < projectImageLength; i++) {
    projectImage[i].addEventListener("click", () => {
      let imgSrc = projectImage[i].getAttribute("src");
      layerImg.setAttribute("src", imgSrc)
      layer.classList.add("layer--show")
    })

  }
}
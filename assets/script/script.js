
function createDiv(className) {
    var div = document.createElement("div")
    var classNames = className.split(" ")
    classNames.forEach((name) => div.classList.add(name))
    return div
  }
  

// menu
window.onload = function(){
            document.querySelector(".menu-opener").addEventListener("click", function(){
                if(document.querySelector("nav").style.display == 'flex') {
                    document.querySelector("nav").style.display = 'none';
                } else {
                    document.querySelector("nav").style.display = 'flex';
                }
            });
            
            // slides banner
            var sliderbanner = new KeenSlider("#slideprincipal")

            sliderbanner.track.details.slides.forEach((_e, idx) => {
                var dot = createDiv("pointer")
                if (idx === 0) {
                  dot.classList.add("active")
                }
                dot.addEventListener("click", (item) => {
                    sliderbanner.moveToIdx(idx)

                    document.querySelectorAll(".pointer").forEach((item) => {
                        item.classList.remove("active")
                    })
                    
                    item.target.classList.add("active")
                })
                // dots.appendChild(dot)
                document.querySelector("#sliderbanner .sliders-pointers").appendChild(dot)
              })

            //slides team
            const sliderteam = new KeenSlider("#slideteam" , {
                slides: {
                    perView: 1,
                    spacing: 30,
                },
                breakpoints: {
                    "(min-width: 768px)": {
                        slides: {
                            perView: 2,
                            spacing: 30,
                        },
                    },
                    "(min-width: 1200px)": {
                        slides: {
                            perView: 3,
                            spacing: 30,
                        },
                    },
                },
            })

            sliderteam.track.details.slides.forEach((_e, idx) => {
                var dot = createDiv("pointer")
                if (idx === 0) {
                  dot.classList.add("active")
                }
                dot.addEventListener("click", (item) => {
                    sliderteam.moveToIdx(idx)

                    document.querySelectorAll(".pointer").forEach((item) => {
                        item.classList.remove("active")
                    })
                    
                    item.target.classList.add("active")
                })
                // dots.appendChild(dot)
                document.querySelector("#sliderteam .sliders-pointers").appendChild(dot)
              })

              // slides clients
            var sliderclients = new KeenSlider("#slideclient")

            sliderclients.track.details.slides.forEach((_e, idx) => {
                var dot = createDiv("pointer")
                if (idx === 0) {
                  dot.classList.add("active")
                }
                dot.addEventListener("click", (item) => {
                    sliderclients.moveToIdx(idx)

                    document.querySelectorAll(".pointer").forEach((item) => {
                        item.classList.remove("active")
                    })
                    
                    item.target.classList.add("active")
                })
                // dots.appendChild(dot)
                document.querySelector("#sliderclients .sliders-pointers").appendChild(dot)
              })

                // slides premium

              var sliderpremium = new KeenSlider("#slidepremium")

            sliderpremium.track.details.slides.forEach((_e, idx) => {
                var dot = createDiv("pointer")
                if (idx === 0) {
                  dot.classList.add("active")
                }
                dot.addEventListener("click", (item) => {
                    sliderpremium.moveToIdx(idx)

                    document.querySelectorAll(".pointer").forEach((item) => {
                        item.classList.remove("active")
                    })
                    
                    item.target.classList.add("active")
                })
                // dots.appendChild(dot)
                document.querySelector("#sliderpremium .sliders-pointers").appendChild(dot)
              })
        };





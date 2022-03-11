window.onload = setTimeout(function () {

    var landingAnimText1 = anime.timeline({
            easing: 'easeInOutQuad',
            duration: 1000
        })
        .add({
            targets: '.anim-header-landing',
            opacity: 1,
            delay: anime.stagger(200)
        })

    var landingAnimText2 = anime.timeline({
            easing: 'easeInOutCubic',
            duration: 1000,
        })
        .add({
            targets: '.anim-header-landing',
            translateY: ['-100', 0],
            delay: anime.stagger(100)
        })

    var landingAnimText3 = anime.timeline({
            easing: 'easeInOutQuad',
            delay: 1100,
            duration: 1000
        })
        .add({
            targets: '.anim-body-landing',
            opacity: 1
        })

    var landingAnimText3 = anime.timeline({
            easing: 'easeInOutQuad',
            delay: 1100,
            duration: 1000
        })
        .add({
            targets: '.anim-body-landing',
            translateY: ['-20', 0]
        })

    var waypointSkills = new Waypoint({
        element: document.querySelector(".section-skills"),
        handler: function () {
            anime({
                targets: ".skills",
                opacity: 1,
                easing: 'easeInOutExpo',
                delay: anime.stagger(100)
            })
        },
        offset: 10
    })

    var waypointReflect = new Waypoint({
        element: document.querySelector(".section-reflect"),
        handler: function () {
            anime({
                targets: ".section-reflect-img",
                height: ['100%'],
                easing: 'easeInOutExpo',
                duration: 2500
            })
            var reflectAnimText1 = anime.timeline({
                    easing: 'easeInOutQuad',
                    delay: 2600
                })
                .add({
                    targets: ".section-reflect-body",
                    opacity: 1,
                    duration: 1000
                })
            var reflectAnimText2 = anime.timeline({
                    easing: 'easeInOutQuad',
                    delay: 2800
                })
                .add({
                    targets: ".section-reflect-sub",
                    opacity: 1,
                    duration: 1000
                })
        },
        offset: '50%'
    })

    var waypointMap = new Waypoint({
        element: document.querySelector(".section-map"),
        handler: function () {
            anime({
                targets: '.roadmap',
                opacity: 1,
                easing: "easeInOutQuad",
                delay: anime.stagger(300),
            });
        }
    })

}, 1000);

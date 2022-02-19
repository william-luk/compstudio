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
                targets: ".cell-skills",
                opacity: 1,
                easing: 'easeInOutExpo',
                delay: anime.stagger(100)
            })

            anime({
                targets: '.x-axis-title',
                opacity: 1,
                easing: 'easeInOutQuad',
                delay: 500
            })

            anime({
                targets: '.x-axis-title',
                bottom: '0px',
                easing: 'easeInOutQuad',
                delay: 1000,
                duration: 500
            })

            anime({
                targets: '.y-axis-title',
                opacity: 1,
                easing: 'easeInOutQuad',
                delay: 500
            })

            anime({
                targets: '.y-axis-title',
                right: 0,
                easing: 'easeInOutQuad',
                delay: 1000,
                duration: 500
            })
        },
        offset: 100
    })

    var waypointReflect = new Waypoint({
        element: document.querySelector(".section-reflect"),
        handler: function () {
            anime({
                targets: ".section-reflect-img",
                width: ['50%'],
                easing: 'easeInOutExpo',
                delay: 500
            })

            var reflectAnimText1 = anime.timeline({
                    easing: 'easeInOutQuad',
                    duration: 1000
                })
                .add({
                    targets: '.section-reflect-body',
                    opacity: 1,
                    delay: 1200
                })

            var reflectAnimText2 = anime.timeline({
                    easing: 'easeInOutQuad',
                    duration: 1000
                })
                .add({
                    targets: '.section-reflect-body',
                    top: '30%',
                    delay: 1200
                })
            var reflectAnimText3 = anime.timeline({
                    easing: 'easeInOutQuad',
                    duration: 1000
                })
                .add({
                    targets: '.section-reflect-sub',
                    opacity: 1,
                    delay: 1800
                })

            var reflectAnimText4 = anime.timeline({
                    easing: 'easeInOutQuad',
                    duration: 1000
                })
                .add({
                    targets: '.section-reflect-sub',
                    top: '40%',
                    delay: 1800
                })
        },
        offset: 100
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

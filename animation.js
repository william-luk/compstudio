var stepsTriggered = false;
var skillTriggered = false;


window.onload = setTimeout(function () {

    new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: false,
        recordHistory: false,
        lockAnchors: true,
        anchors: ['1', '2', '3', '4', '5', '6', '7'],

        afterLoad: function (origin, destination, direction) {
            var loadedSection = this;
            console.log(loadedSection);

            if (origin.anchor == '3' && direction == 'down') {
                //                alert('Section 3 loaded');
                if (!skillTriggered) {
                    anime({
                        targets: '.skills-letter',
                        easing: 'easeInOutExpo',
                        translateY: ['-100px', '0px'],
                        duration: 800,
                        delay: anime.stagger(100)
                    })

                    anime({
                        targets: '.skills-letter',
                        easing: 'easeInOutQuad',
                        opacity: 1,
                        duration: 800,
                        delay: anime.stagger(100)
                    })

                    var skillAnimImgs = anime.timeline({
                            easing: 'easeInOutCubic',
                            duration: 600,
                            delay: 800
                        })
                        .add({
                            targets: ".skills-breadth",
                            opacity: 1,
                        })
                        .add({
                            targets: '.skills-breadth1',
                            opacity: 1,
                            delay: anime.stagger(50)
                        })
                        .add({
                            targets: '.skills-depth',
                            opacity: 1
                        })
                        .add({
                            targets: '.skills-depth1',
                            opacity: 1,
                            delay: anime.stagger(50)
                        })
                        .add({
                            targets: '.skills-depth2',
                            opacity: 1,
                            delay: anime.stagger(50)
                        })
                        .add({
                            targets: '.skills-depth3',
                            opacity: 1,
                            delay: anime.stagger(50)
                        })
                        .add({
                            targets: '.skills-arrows',
                            opacity: 1
                        })

                    anime({
                        targets: '.anim-skills-sub',
                        easing: 'easeInOutQuad',
                        translateY: ['-100px', '0px'],
                        duration: 800,
                        delay: 4500
                    })

                    anime({
                        targets: '.anim-skills-sub',
                        easing: 'easeInOutQuad',
                        opacity: 1,
                        duration: 800,
                        delay: 4500
                    })
                }
                skillTriggered = true;

            }
            if (origin.anchor == '4' && direction == 'down') {
                anime({
                    targets: ".section-reflect-img",
                    height: ['50vh'],
                    easing: 'easeInOutQuad',
                    duration: 1500,
                    delay: 500
                })
                var reflectAnimText1 = anime.timeline({
                        easing: 'easeInOutQuad',
                        delay: 1500
                    })
                    .add({
                        targets: ".section-reflect-body",
                        opacity: 1,
                        duration: 500
                    })
                var reflectAnimText2 = anime.timeline({
                        easing: 'easeInOutQuad',
                        delay: 1000
                    })
                    .add({
                        targets: ".section-reflect-sub",
                        opacity: 1,
                        duration: 500
                    })
            }

            if (origin.anchor == '5' && direction == 'down') {
                if (!stepsTriggered) {
                    anime({
                        targets: '.roadmap',
                        opacity: 1,
                        easing: "easeOutExpo",
                        delay: anime.stagger(150),
                    });

                    anime({
                        targets: '.section-map-body',
                        easing: 'easeInOutQuad',
                        translateY: [100, 0],
                        duration: 800,
                        delay: 3000
                    })
                    anime({
                        targets: '.section-map-body',
                        easing: 'easeInOutQuad',
                        opacity: 1,
                        duration: 800,
                        delay: 3000
                    })
                }

                stepsTriggered = true;
            }
        }
    });
    anime({
        targets: '.section-landing-img',
        easing: 'easeInOutQuad',
        opacity: 1,
        duration: 1500
    })

    var landingAnimText1 = anime.timeline({
            easing: 'easeInOutQuad',
            duration: 1000,
            delay: 3000
        })
        .add({
            targets: '.anim-header-landing',
            opacity: 1,
            delay: anime.stagger(200)
        })

    var landingAnimText2 = anime.timeline({
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: 3000
    }).add({
        targets: '.anim-header-landing',
        translateY: ['-100', 0],
        delay: anime.stagger(100)
    })

    var landingAnimText3 = anime.timeline({
            easing: 'easeInOutQuad',
            delay: 1000,
            duration: 1000
        })
        .add({
            targets: '.anim-body-landing',
            opacity: 1
        })

    var landingAnimText3 = anime.timeline({
            easing: 'easeInOutQuad',
            delay: 1000,
            duration: 1000
        })
        .add({
            targets: '.anim-body-landing',
            translateY: ['-20', 0]
        })

}, 800);

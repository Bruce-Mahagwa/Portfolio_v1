// import gsap animation lib
import {gsap} from "gsap";

export function removeIntroTextContainer(intro_text_container) {
    // removes the first animation "Welcome to my Portfolio"
    gsap.to(intro_text_container, {
        delay: 3,
        duration: 1,
        opacity: 0,
        zIndex: -9999
        // lower the z-index so that we can click on the nav links
    })
}

export function remove_small_screen_nav(nav_left, nav_right, nav_small, nav_large) {
    // withdraws the small screen nav for both ul and brings about the large screen nav
    gsap.to(nav_left, {
        // delay: 2,
        duration: 1,
        paddingTop: "0.5em",
        // hides the small nav
        opacity: 0,
        display: "none",
        onStart: () => {
            gsap.to(nav_right, {
                duration: 1,
                paddingTop: "0.5em",
                // hides the small nav
                opacity: 0,
                display: "none",
                onStart: () => {
                    gsap.to(nav_small, {
                        display: "none",
                        onStart: () => {
                            gsap.to(nav_large, {
                                display: "flex",
                                opacity: 1,
                                duration: 0.5
                            })
                        }
                    })
                }
            })
        }
    })
}

export function enable_small_screen_nav(nav_left, nav_right, nav_small, nav_large) {
    gsap.to(nav_left, {
        duration: 1,
        paddingTop: "35%",
        opacity: 1,
        display: "flex",
        onStart: () => {
            gsap.to(nav_right, {
                duration: 1,
                paddingTop: "35%",
                opacity: 1,
                display: "flex",
                onStart: () => {
                    gsap.to(nav_small, {
                        display: "flex",
                        onStart: () => {
                            gsap.to(nav_large, {
                                opacity: 0,
                                display: "none"
                            })
                        }
                    })
                }
            })
        }
    })
}



"use client";
// import files e.g. css files
import classes from "./Landing.module.css"
// import custom functions and animation effects
import {removeIntroTextContainer, remove_small_screen_nav, enable_small_screen_nav } from "@/lib/gsap_landing";
// import next, react, and other library functions
import { useRef, useEffect, useState } from "react";
import { useGSAP } from '@gsap/react';
import { IconContext } from "react-icons";
// import components
import Link from "next/link";
// import fonts
import { IoHome } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { VscProject } from "react-icons/vsc";
import { MdMarkEmailRead } from "react-icons/md";

// main Header function that returns the content of the Header and Landing pages
function Landing() {
    // refs
    const intro_message_container_ref = useRef();
    const small_screen_nav_left = useRef();
    const small_screen_nav_right = useRef();
    const small_screen_nav = useRef();
    const large_screen_nav = useRef();
    const landing_page = useRef();
    const landing_page_content = useRef();

    // state
    // 1. Monitors window inner width.
    const [width, setWidth] = useState(0);
    const [isWidthGreaterThan400, setIsWithGreaterThan400] = useState(false);

    useEffect(() => {
        // monitors window inner width for styling purposes
        // setup a monitor for the window inner width
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        if (width > 400) {
            setIsWithGreaterThan400(true);
        }
        else {
            setIsWithGreaterThan400(false);
        }
        return () => window.removeEventListener("resize", handleResize);
    }, [width])

    useEffect(() => {
            const content = "Welcome to my portfolio. My name is Bruce Mahagwa and this is my work. Take your time and go through some of my projects. It will mean a lot. Thanks."
            let idx = 0;
            const paragraph_interval = setInterval(() => {
                let letter = content[idx];
                if (letter !== undefined) {
                    console.log("letter", idx, letter)
                    landing_page_content.current.textContent += letter;
                    idx += 1
                }
                if (idx > content.length - 1) {
                    clearInterval(paragraph_interval);
                }      
        }, 20)            
    }, [])

    useGSAP(() => {
        // step 1
        removeIntroTextContainer(intro_message_container_ref.current);        
        // step 2
        if (width > 400) {
            // bring about the large screen nav
            remove_small_screen_nav(small_screen_nav_left.current, small_screen_nav_right.current, small_screen_nav.current, large_screen_nav.current);
        }
        else {
            // bring about small screen nav
            enable_small_screen_nav(small_screen_nav_left.current, small_screen_nav_right.current, small_screen_nav.current, large_screen_nav.current);
        }
    }, [isWidthGreaterThan400])

    return (
        <div className = {classes.landing} id = "landing" ref = {landing_page}>
            {/* intro message container */}
            {/* <div ref = {intro_message_container_ref} className = {classes.intro_message_container}>
                <div className = {classes.intro_message}>
                    <h1>WELCOME&nbsp;&nbsp;</h1>
                    <h2>TO MY&nbsp;&nbsp;</h2>
                    <h1>PORTFOLIO</h1>
                </div>
            </div> */}
            {/* end of intro message container */}

            {/* navigation */}
            <nav className = {classes.main_navigation} ref={large_screen_nav}>
                <ul>
                    <li>
                        <Link href = "#landing" data-text = "Home_main">Home</Link>
                    </li>
                    <li>
                        <Link href= "#about" data-text = "About_main">About</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href = "#projects" data-text = "Projects_main">Projects</Link>
                    </li>
                    <li>
                        <Link href = "#contacts" data-text = "Contacts_main">Contacts</Link>
                    </li>
                </ul>
            </nav>

            <nav className = {classes.navigation_small} ref = {small_screen_nav}>
                <IconContext.Provider value = {{className: classes.react_icons}}>
                    <ul ref = {small_screen_nav_left}>
                        <li>
                            <Link href = "#landing" className = {classes.home_link} data-text = "Home"><IoHome /></Link>
                        </li>
                        <li>
                            <Link href= "#about" data-text = "About" className = {classes.about_link}><IoPersonSharp /></Link>
                        </li>
                    </ul>
                    <ul ref = {small_screen_nav_right}>
                        <li>
                            <Link href = "#projects" className = {classes.projects_link} data-text = "Projects"><VscProject /></Link>
                        </li>
                        <li>
                            <Link href = "#contacts" className = {classes.contacts_link} data-text = "Contacts"><MdMarkEmailRead /></Link>
                        </li>
                    </ul>
                </IconContext.Provider>
            </nav>
            {/* end of navigation */}

            {/* landing content */}
            <div className = {classes.landing_content}>
                <div className = {classes.landing_content_message}>
                    <p ref = {landing_page_content}>
                    </p>
                </div>
            </div>
            {/* end of landing content */}

        </div>
    )
}
export default Landing;
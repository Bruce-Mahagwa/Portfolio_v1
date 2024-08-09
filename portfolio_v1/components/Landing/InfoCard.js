"use client"
// files and functions
import classes from "./InfoCard.module.css"
import "./InfoCard.css"
import { scramble_text } from "@/lib/gsap_landing";
// components
import Image from "next/image";
// hooks
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";

const InfoCard = ({p, img}) => {
    const paragraph_ref = useRef();
    const reversed_intro = p.split("").reverse().join("");
    useGSAP(() => {
        scramble_text(paragraph_ref.current, p)
    }, [])
    
    return (
        <div className = {classes.info_card}>
            <p ref = {paragraph_ref}>
                {reversed_intro}
            </p>
            <div>
                <Image src = {img} 
                className = {classes.info_card_img} 
                alt = "picture of Bruce smiling" 
                />
            </div>
        </div>
    )
}
export default InfoCard;
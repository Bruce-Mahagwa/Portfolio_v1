"use client"
// files
import classes from "./InfoCard.module.css"
// components
import Image from "next/image";
 
const InfoCard = ({p, img}) => {
    return (
        <div className = {classes.info_card}>
            <p>{p}</p>
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
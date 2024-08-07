// files
import classes from "./SkillsCard.module.css";
import classes2 from "./InfoCard.module.css";
import { scramble_text, rotate_skill_container } from "@/lib/gsap_landing";
import "./InfoCard.css"
// components
import Image from "next/image";
// hooks
import {useRef, useEffect} from "react";
import { useGSAP } from "@gsap/react";

const SkillsCard = ({p, skills, labels}) => {
    const paragraph_ref = useRef();
    const icon_container_ref = useRef();

    const reversed_intro = p.split("").reverse().join("");
    const angle_increment = 360/skills.length;    

    useGSAP(() => {
        scramble_text(paragraph_ref.current, p)
        // rotate_skill_container(icon_container_ref.current)
    }, []) 
   
    return (
        <div className = {`${classes.skills_card} ${classes2.info_card}`}>
            <p ref = {paragraph_ref}>{reversed_intro}</p>
            <div className = {classes.icon_container} ref = {icon_container_ref}> 
                {skills.map((skill, index) => {
                    const angleRad = (index*angle_increment*Math.PI)/180;
                    const radius = "16vw";
                    const x = `calc(${radius} * ${Math.cos(angleRad)})`
                    const y = `calc(${radius} * ${Math.sin(angleRad)})`
                    return ( 
                        <>
                        <div style = {{
                            transform: `translate(${x}, ${y})`,
                        }} className = {classes.rotating_icon_container}
                        data-skill = {labels[index]}>
                            <Image src = {skill} alt = {skill} className = {classes.skills_icon} />                            
                        </div>                        
                        </>
                    )
                })}
                
                {/* <div className={classes.label}>
                    <h2>label</h2>
                </div> */}
            </div>
            <div className={classes.label}>
                    <h2>label</h2>
            </div>
        </div>
    )
}
export default SkillsCard
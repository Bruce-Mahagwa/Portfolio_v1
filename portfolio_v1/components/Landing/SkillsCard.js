// files and functions
import classes from "./SkillsCard.module.css";
import classes2 from "./InfoCard.module.css";
import { scramble_text} from "@/lib/gsap_landing";
import "./InfoCard.css"
import "./SkillsCard.css"
// components
import Image from "next/image";
// hooks
import {useRef, useState} from "react";
import { useGSAP } from "@gsap/react";
import useDeviceWidth from "@/lib/hooks/useDeviceWidth";

const SkillsCard = ({p, skills, labels}) => {
    const paragraph_ref = useRef();
    const icon_container_ref = useRef();
    const icon_ref = useRef();
    const width = useDeviceWidth()
    const [label, setLabel] = useState(null);

    const reversed_intro = p.split("").reverse().join("");
    const angle_increment = 360/skills.length;    


    useGSAP(() => {
        scramble_text(paragraph_ref.current, p)
    }, []) 

    function onMouseHover(e) {
        // adds a hover event to the skills icons
        if (e.currentTarget) {
            const element = e.currentTarget
            setLabel(e.currentTarget.getAttribute('data-skill'))
        }
        else {
            return;
        }
    }
    let radius = "30vw";
    if (width > 650) {
        radius = "22vw"
    }
    else if (width > 900) {
        radius = "16vw"
    }
    else if (width > 1024) {
        radius = "10vw"
    }
    else if (width > 1500) {
        radius = "3vw"
    }
    return (
        <div className = {`${classes.skills_card} ${classes2.info_card}`}>
            <div className = {`${classes.icon_container} ${classes.hide}`} ref = {icon_container_ref}> 
                {skills.map((skill, index) => {
                    const angleRad = (index*angle_increment*Math.PI)/180;
                    const x = `calc(${radius} * ${Math.cos(angleRad)})`
                    const y = `calc(${radius} * ${Math.sin(angleRad)})`
                    return ( 
                        <>
                        <div style = {{
                            transform: `translate(${x}, ${y})`,
                        }} className = {classes.rotating_icon_container}>
                            <Image src = {skill} alt = {skill} className = {`${classes.skills_icon} skills_icon_alternative`} data-skill = {labels[index]} 
                            onMouseOver={onMouseHover}/>                            
                        </div>                        
                        </>
                    )
                })}                
            </div>

            {/* small screens */}

                        {/* end of small screens */}
{/* 
            <div className={classes.label}>
                    <h2>{label}</h2>
            </div> */}
        </div>
    )
}
export default SkillsCard
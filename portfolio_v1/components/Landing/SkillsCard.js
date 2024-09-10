// files and functions
import classes from "./SkillsCard.module.css";
// components
import Image from "next/image";
// hooks
import {useRef} from "react";
import useDeviceWidth from "@/lib/hooks/useDeviceWidth";

const SkillsCard = ({skills, labels}) => {
    const icon_container_ref = useRef();
    const width = useDeviceWidth()
    const angle_increment = 360/skills.length;    

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
        <div className = {`${classes.skills_card}`}>
            <div className = {`${classes.icon_container}`} ref = {icon_container_ref}> 
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
                                />                            
                            </div>                        
                        </>
                    )
                })}                
            </div>
        </div>
    )
}
export default SkillsCard
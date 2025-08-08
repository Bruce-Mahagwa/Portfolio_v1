// files and functions
import classes from "./SkillsCard.module.css";
// components
import Image from "next/image";
// hooks
import useDeviceWidth from "@/lib/hooks/useDeviceWidth";
import { useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";

const SkillsCard = ({skills, labels}) => {
    const width = useDeviceWidth()
    const angle_increment = 360/skills.length;    
    const [scope, animate] = useAnimate();
    let radius = "30vw";
    
    if (width > 1500) {
        radius = "15vw"
    }
    else if (width > 900) {
        radius = "20vw"
    }
    else if (width > 650) {
        radius = "25vw"
    }
    useEffect(() => {
        (async () => {
            await animate(scope.current, {opacity: 1}, {duration: 0.3});
            await animate("div", {display: "block"}, {delay: stagger(0.5)});
        })()
    }, [])

    return (
        <div className = {`${classes.skills_card}`}>
            <div className = {`${classes.icon_container}`} ref = {scope}>             
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
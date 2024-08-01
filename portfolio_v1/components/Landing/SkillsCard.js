// files
import classes from "./SkillsCard.module.css";
import classes2 from "./InfoCard.module.css";
import { scramble_text, rotate_skill_icon } from "@/lib/gsap_landing";
import "./InfoCard.css"
// components
import Image from "next/image";
// hooks
import {useRef, useEffect} from "react";

const SkillsCard = ({p, skills}) => {
    const paragraph_ref = useRef();
    const icon_ref = useRef();

    const reversed_intro = p.split("").reverse().join("");

    useEffect(() => {
        scramble_text(paragraph_ref.current, p)
        rotate_skill_icon(icon_ref.current)
    }, [])
   
    return (
        <div className = {`${classes.skills_card} ${classes2.info_card}`}>
            <p ref = {paragraph_ref}>{reversed_intro}</p>
            <div>
                {skills.map((skill) => {
                    return (
                        <Image src = {skill} alt = {skill} className = {classes.skills_icon} ref = {icon_ref} />
                    )
                })}
            </div>
        </div>
    )
}
export default SkillsCard
// files
import classes from "./SkillsCard.module.css";
// components
import Image from "next/image";

const SkillsCard = ({p, skills}) => {
    return (
        <div className = {classes.skills_card}>
            <p>{p}</p>
            <div>
                {skills.map((skill) => {
                    return (
                        <Image src = {skill} alt = "Bruce's skill list" />
                    )
                })}
            </div>
        </div>
    )
}
export default SkillsCard
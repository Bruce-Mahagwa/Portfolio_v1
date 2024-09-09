
import classes from "./InfoCard.module.css"
import img from "../../assets/images/Pic-small_face-removebg-preview.png"
import Image from "next/image"
const InfoCard = () => {
    return (
        <section className={classes.info}>
            <div className={classes.wrap}>
                <span className={classes.left}>WEB DEV</span>
                <span className={classes.centre}>Bruce Mahagwa</span>
                <span className={classes.right}>DATA ANALYST&nbsp;</span>
            </div>
            <div className = {classes.skills}>
                <div className={classes.isolate}>
                    <div className={classes.noise}>HTML/CSS . JavaScript . Python . React . NextJS . NodeJS . MongoDB . SQL . Excel</div>
                    <div className={classes.overlay}></div>
                </div>
            </div>
        </section>
    )
}
export default InfoCard;
// files
import classes from "./InfoCard.module.css"

const InfoCard = () => {
    return (
        <section className={classes.info_card}>
            <div className={classes.wrap}> 
                <span className={classes.left}>WEB DEV</span>
                <span className={classes.centre}>Bruce Mahagwa</span>
                <span className={classes.right}>DATA ANALYST&nbsp;</span>
            </div>
            <div className = {classes.skills}>
                <div className={classes.isolate}>
                    <div className={classes.noise}>HTML/CSS . JavaScript . Python . React . NextJS . NodeJS . MongoDB . SQL . Excel . Statistics</div>
                    <div className={classes.overlay}></div>
                </div>
            </div>
        </section>
    )
}
export default InfoCard;
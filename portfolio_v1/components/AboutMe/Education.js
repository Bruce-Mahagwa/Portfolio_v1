// files
import classes from "./Education.module.css"

const Education = ({place, date, experience}) => {
    return (
        <div className={classes.education}>
            <div>
                <h2>{place}</h2>
                <p>{date.start}/{date.end}</p>
            </div>
            <div>
                <p>{experience}</p>
            </div>
        </div>
    )
}
export default Education


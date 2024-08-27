// files
import classes from "./WorkExperience.module.css";
const WorkExperience = ({place, date, location, tasks}) => {
    return (
        <div>
            <div>
                <h2>{place}, {location}</h2>
                <p>{date.start}/{date.end}</p>
            </div>
            <div>
                {Object.keys(tasks).map((key) => {
                    const task = tasks[key];
                    return (
                        <p key = {task}>
                            {task}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}
export default WorkExperience;
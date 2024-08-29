// files
import classes from "./Projects.module.css"
import img from "./images/main_bg1_reduced.jpg"
// dependencies
import { Card } from "flowbite-react";
import Image from "next/image";
const Projects = () => {
    return (
        <section className={classes.projects}>
            <h1>Projects</h1>
            <div className = {classes.projects_container}>
                {/* web dev */}
                <div className={classes.web_dev}>
                    <h2>Web Development</h2>
                    <Card className = {classes.card}
                        renderImage={() => <Image width={500} height={500} src={img} alt="image 1" className = {classes.portfolio_img}/>}
                        >
                        <h5> className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                            Noteworthy technology acquisitions 2021
                        </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                  </Card>
                  <Card className = {classes.card}
                        renderImage={() => <Image width={500} height={500} src={img} alt="image 1" className = {classes.portfolio_img}/>}
                        >
                        <h5> className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                            Noteworthy technology acquisitions 2021
                        </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                  </Card>
                  <Card className = {classes.card}
                        renderImage={() => <Image width={500} height={500} src={img} alt="image 1" className = {classes.portfolio_img}/>}
                        >
                        <h5> className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                            Noteworthy technology acquisitions 2021
                        </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                  </Card>
                  <Card className = {classes.card}
                        renderImage={() => <Image width={500} height={500} src={img} alt="image 1" className = {classes.portfolio_img}/>}
                        >
                        <h5> className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                            Noteworthy technology acquisitions 2021
                        </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                  </Card>
                </div>
                {/* data analysis */}
                <div className={classes.data_analytics}>
                    <h2>Data Analytics</h2>
                    <Card className = {classes.card}
                        renderImage={() => <Image width={500} height={500} src={img} alt="image 1" className = {classes.portfolio_img}/>}
                        >
                        <h5> className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                            Noteworthy technology acquisitions 2021
                        </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                  </Card>
                  <Card className = {classes.card}
                        renderImage={() => <Image width={500} height={500} src={img} alt="image 1" className = {classes.portfolio_img}/>}
                        >
                        <h5> className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                            Noteworthy technology acquisitions 2021
                        </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                  </Card>
                  <Card className = {classes.card}
                        renderImage={() => <Image width={500} height={500} src={img} alt="image 1" className = {classes.portfolio_img}/>}
                        >
                        <h5> className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                            Noteworthy technology acquisitions 2021
                        </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                  </Card>
                  <Card className = {classes.card}
                        renderImage={() => <Image width={500} height={500} src={img} alt="image 1" className = {classes.portfolio_img}/>}
                        >
                        <h5> className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                            Noteworthy technology acquisitions 2021
                        </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                  </Card>
                </div>
            </div>
        </section>
    )
}
export default Projects;
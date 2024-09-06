// dependencies
import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";
import Image from "next/image";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
// files
import classes from "./Projects.module.css"
const ProjectsCarousel = ({data}) => {
    return (
        <Carousel pauseOnHover slideInterval={5000} rightControl={<TfiArrowCircleRight size="40px" />} leftControl={<TfiArrowCircleLeft size="40px" />}>
            {data.map((project) => {
                const {name, img_project, description, github, live, extras} = project;
                return (
                    <Card className = {classes.card}
                                renderImage={() => <Image width={500} height={500} src={img_project} alt="image 1" className = {classes.portfolio_img}/>}
                                >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Noteworthy technology acquisitions 2021
                                </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                    </Card>
                )
            })}
        </Carousel>
    )
}
export default ProjectsCarousel;
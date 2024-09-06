// dependencies
import { Card } from "flowbite-react";
import Image from "next/image";
import Carousel from 'react-bootstrap/Carousel';
// files
import classes from "./Projects.module.css"
const ProjectsCarousel = ({data}) => {
    return (
        <Carousel data-bs-theme="dark" pause="hover">
            {data.map((project) => {
                const {name, img_project, description, github, live, extras} = project;                
                return (
                    <Carousel.Item>
                    <Card className = {classes.card}
                                renderImage={() => <Image width={500} height={500} src={img_project} alt="image 1" className = {classes.portfolio_img}/>}
                                key = {name}
                                >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Noteworthy technology acquisitions 2021
                                </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                    </Card>
                    </Carousel.Item>
                )
            })}
        </Carousel>

    )
}
export default ProjectsCarousel;
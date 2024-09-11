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
                    <Carousel.Item className = "pb-10">
                        <Card className = {classes.card}
                            renderImage={() => <Image width={500} height={500} src={img_project} alt="image 1" className = {classes.portfolio_img}/>}
                            key = {name}>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {name}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {description}
                            </p>
                            <div className = {`${classes.project_links} flex gap-0.2 justify-center`}>
                                <a href = {live} alt = "live version of project" target="_blank" className = {classes.project_link}>live</a>
                                <a href = {github} alt = "github code of project" target="_blank" className = {classes.project_link}>github</a>
                                {extras?.length > 0 && extras.map((link, index) => {
                                    return (
                                        <a href = {link} alt = "live version of project" target="_blank" className = {classes.project_link}>Test-data-{index + 1}</a>
                                    )
                                })}
                            </div>
                        </Card>
                    </Carousel.Item>
                )
            })}
        </Carousel>

    )
}
export default ProjectsCarousel;
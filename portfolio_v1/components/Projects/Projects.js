"use client"
// files
import classes from "./Projects.module.css"
import img_project from "./images/main_bg1_reduced.jpg"
import ProjectsCarousel from "./ProjectsCarousel";
import useDeviceWidth from "@/lib/hooks/useDeviceWidth";
// dependencies
import { Card } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";

const project_data_web = [
    {
        name: "React Visualization Library",
        img_project: img_project,
        description: "A data visualization interface made with React and D3js",
        github: "",
        live: "",
        extras: []
    },
    {
        name: "ThingsWeLike",
        img_project: img_project,
        description: "A social media site made with MERN stack and Redux Toolkit",
        github: "",
        live: ""
    }
]
const project_data_data_analysis = [
    {
        name: "An analysis on the Quality Scores of Wikimedia Articles",
        img_project: img_project,
        description: "An investigation into the quality scores and feature values of Wikimedia articles - Jupyter Notebook and Python",
        live: "https://public-paws.wmcloud.org/User:BruceMahagwa/Microtask.ipynb"
    },
    {
        name: "An exploration into Prosper Bank load data",
        img_project: img_project,
        description: "An investigation into loans provided by Prosper Bank - Jupyter Notebook",        
        live: ""
    },
    {
        name: "An exploration into twitter archive data",
        img_project: img_project,
        description: "An investigation into twitter archive data | Gathering and cleaning data - Jupyter Notebook",
        live: ""
    }
]
const Projects = () => {
    const width = useDeviceWidth();
    
    console.log(width)
    return (  
        <section className={classes.projects}>
            <h1>Projects</h1>
            <div className = {classes.projects_container}>
                {/* web dev */}
                <div className={classes.web_dev}>
                    <h2>Web Development</h2>
                        {width > 500 && <div className = {classes.flex_container}>
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
                    </div>}
                    {/* carousel for web dev projects */}
                    {width <= 500 && (
                        <ProjectsCarousel data = {project_data_web}/>
                    )}
                    {/* end of carouself for web dev projects */}
                </div>
                {/* data analysis */}
                <div className={classes.data_analytics}>
                    <h2>Data Analytics</h2>                    
                    {width > 500 && <div className = {classes.flex_container}>
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
                    </div>}
                    {/* carousel for data analystics projects */}
                    {width <= 500 && (
                        <ProjectsCarousel data = {project_data_data_analysis} />
                    )}
                    {/* end of carousel for data analytic projects */}
                </div>
            </div>
        </section>
    )
}
export default Projects;
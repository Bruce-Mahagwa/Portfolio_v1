// files
import classes from "./AboutMe.module.css"
import WorkExperience from "./WorkExperience";
import Education from "./Education";
// dependencies

// variables

const job_tasks = [
    {
        id: "Yashio",
        tasks: {
            1: "Developed the Work Business Structure document to outline the migration process from Astro js to Next Js",
            2: "Created the Component Specification document to guide the development of website components during the migration",
            3: "Led a team of developers in the migration of numerous pages and subpages to the new framework",
            4: "Spearheaded the design phase by utilizing extensive knowledge of Next Js to create efficient components",
            5: "Implemented styling for components using CSS to enhance aesthetic appeal and functionality",
            6: "Enhanced the website's search engine optimization (SEO) by leveraging Next Js's server-side rendering capabilities",
            7: "Integrated Contentful, a content management system, to separate content from code, facilitating easier updates, deletions, and additions of data",
            8: "Utilized Redux Toolkit for central state management, improving the website's data update and addition processes",
            9: "Optimized the website architecture, reducing the number of web pages and improving navigation efficiency"       
        }
    },
    {
        id: "Outreachy",
        tasks: {
            1: "Utilized Python and Jupyter Notebooks to analyze the relationship between quality scores and various feature values of Wikimedia articles",
            2: "Processed a dataset covering a two-decade span, including columns like quality_score, predicted_quality, importance_class, and more",
            3: "Explored correlations between specific quality scores (importance_class, quality_class, and pred_qual) and feature values (page_length, num_links, num_ref, num_categories, num_media, num_headings, and num_revisions)",
            4: "Created both static and interactive visualizations to clearly depict these relationships",
            5: "Fetched data on the number of page views for each article over a specified period to assess their impact on article quality scores",
            6: "Analyzed the effect of the number of revisions on the quality scores using statistical methods",
            7: "Employed technologies such as GitHub, Python, Jupyter Notebooks, Pandas, Matplotlib, NumPy, and Seaborn for data manipulation and visualization tasks",
            8: "Discovered key insights on how Wikimedia machine learning algorithms determine article quality, revealing that articles rich in wikilinks, pages, headings, references, and views tend to receive higher predicted quality scores and rank better in importance and quality classes",
            9: "Configured customizable visualizations to explore additional variables related to article quality",
            10: "Provided recommendations for further visualizations based on current research findings"
        }
    }
]

const education = [
    {
        id: "UON",
        experience: "Bachelor's in Economics"
    },
    {
        id: "Udacity",
        experience: "Data Analysis"
    },
    {
        id: "Holberton School",
        experience: "Software Engineering"
    }
]

const About = () => {
    return (
        <section className={classes.about}>
            {/* title */}
            <h1>Web Dev and Data Analyst</h1>
            <div className = {classes.about_container}>
                {/* work experience */}
                <div className = {classes.work_experience}>
                    <h2>Work Experience</h2>
                    <WorkExperience place = {"Yashio Kenya"} date = {{start: "4/2024", end: "6/2024"}} location={"Remote"}  tasks = {job_tasks[0].tasks}/>
                    <WorkExperience place = {"Outreachy"} date = {{start: "3/2024", end: "4/2024"}} location={"Remote"}  tasks = {job_tasks[1].tasks}/>
                </div>
                {/* education */}
                <div className = {classes.education}>
                    <h2>Education</h2>
                    <Education place = {"University of Nairobi"} date = {{start: "2/2018", end: "12/2022"}} experience = {education[0].experience} />
                    <Education place = {"Udacity"} date = {{start: "6/2022", end: "10/2022"}} experience = {education[1].experience} />
                    <Education place = {"Holberton School"} date = {{start: "7/2022", end: "11/2023"}} experience = {education[2].experience} />
                </div>
                {/* social links and stats */}
                <div className={classes.social_stats}>

                </div>
            </div>
        </section>
    )
}
export default About;
// import files
import Landing  from "@/components/Landing/Landing";
import About from "@/components/AboutMe/About";
import "./globals.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "@/components/Projects/Projects";
import Contacts from "@/components/ContactMe/contacts";
import { Analytics } from "@vercel/analytics/react"
export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Contacts />
      <Analytics />
    </>
  );
}

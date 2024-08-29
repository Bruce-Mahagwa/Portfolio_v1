// files
import classes from "./contacts.module.css"
// dependencies
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { CiMail } from "react-icons/ci";
import { FaMessage } from "react-icons/fa6";
const Contacts = () => {
    return (
        <form className = {classes.contacts}>
            {/* email */}
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                </div>
                    <TextInput id="email" type="email" placeholder="email" icon={CiMail}required />
            </div>
            {/* name */}
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name" value="Your name" />
                </div>
                <TextInput id="name" type="text" placeholder="Name" />
            </div>
            {/* message */}
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="message" value="Your message" />
                </div>
                <TextArea id="message" type="text" placeholder="Message"  icon = {FaMessage} required  rows = {6}/>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    )
}
export default Contacts;
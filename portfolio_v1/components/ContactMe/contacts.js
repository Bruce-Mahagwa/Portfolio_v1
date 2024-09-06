"use client"
// files
import classes from "./contacts.module.css"
// dependencies
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useRef } from "react";
import { CiMail } from "react-icons/ci";
import { FaMessage } from "react-icons/fa6";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";


const Contacts = () => {
    // email data
    const form = useRef();

    const sendMeAnEmail = (e) => {
        e.preventDefault();
        // email function that sends an email to me by site visitor
        const toastId = toast.loading("Sending your message, please wait...");
        emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            form.current,
            {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                limitRate: {
                    throttle: 5000
                },
            }
        )
        .then(
            () => {
            toast.success(
                "Thank you so much for your message. I have received it and will get back to you soon!",
                {
                    id: toastId,
                }
            );
            },
            (error) => {
            console.log("FAILED...", error.text);
            toast.error(
                "There was an error sending your message, please try again later!",
                {
                    id: toastId,
                }
            );
        }
        );
    }
    return (
        <>
            <h1>Contact Me</h1>
            <Toaster richColors={true} />
            <form className = {classes.contacts} onSubmit={sendMeAnEmail}>
                {/* email */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="from_email" value="Your email" />
                    </div>
                        <TextInput id="email" type="email" placeholder="email" icon={CiMail} name="from_email" required />
                </div>
                {/* name */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="from_name" value="Your name" />
                    </div>
                    <TextInput id="name" type="text" placeholder="Name" name = "from_name" />
                </div>
                {/* message */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="message" value="Your message" />
                    </div>
                    <Textarea id="message" type="text" placeholder="Message" name = "message" icon = {FaMessage} required  rows = {6}/>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </>
    )
}
export default Contacts;
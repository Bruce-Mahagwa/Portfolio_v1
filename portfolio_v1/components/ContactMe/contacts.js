"use client"
// files
import classes from "./contacts.module.css"
// dependencies
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useRef } from "react";
import { CiMail } from "react-icons/ci";
import { FaMessage } from "react-icons/fa6";
import { Toaster, toast } from "sonner";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";


const Contacts = () => {
    // email data
    const email_ref = useRef()
    const name_ref = useRef()
    const message_ref = useRef()

    const sendMeAnEmail = (e) => {
        e.preventDefault();
        // email function that sends an email to me by site visitor
        const toastId = toast.loading("Sending your message, please wait...");
        const params = {
            from_email: email_ref.current.value,
            from_name: name_ref.current.value,
            message: message_ref.current.value
        }
        emailjs.send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            params,
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
            toast.error(
                "There was an error sending your message. Please send me a direct enail to jacobbruce880@gmail.com!",
                {
                    id: toastId,
                }
            );
        }
        );
    }
    return (
        <section className = {classes.contacts_container} id = "contacts">
            <h1>Contact Me</h1>
            <Toaster richColors={true} />
            <motion.form className = {classes.contacts} onSubmit={sendMeAnEmail}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            
            >
                {/* email */}
                <div className="mb-3">
                    <div className="mb-2 block">
                        <Label htmlFor="from_email" value="Your email" />
                    </div>
                        <TextInput id="email" type="email" placeholder="email" icon={CiMail} name="from_email" ref = {email_ref} sizing = "md" required 
                        helperText={
                            <>
                              Rest assured that I will never share your personal details.                              
                            </>
                        }
                        />
                </div>
                {/* name */}
                <div className="mb-3">
                    <div className="mb-2 block">
                        <Label htmlFor="from_name" value="Your name" />
                    </div>
                    <TextInput id="name" type="text" placeholder="Name" name = "from_name" sizing = "md" ref = {name_ref}                     
                    helperText={
                        <>
                          Rest assured that I will never share your personal details.                              
                        </>
                    }
                    />
                </div>
                {/* message */}
                <div className="mb-3">
                    <div className="mb-2 block">
                        <Label htmlFor="message" value="Your message" />
                    </div>
                    <Textarea id="message" type="text" placeholder="Message" name = "message" icon = {FaMessage} ref = {message_ref} required  rows = {8}
                    helperText={
                        <>
                            Would you like to hire me? Please send me a message.                              
                        </>
                    }/>
                </div>
                <Button type="submit">Submit</Button>
            </motion.form>
        </section>
    )
}
export default Contacts;
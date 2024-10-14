import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneOutbound } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text text-5xl text-blue-500'>Get In Touch</h2>
                <p className='text-green-500 text-[18px] pt-2'>
                    Drop me a line, give me a call, or send me a message by submitting the form.
                </p>
                <div className='flex gap-3 items-center text-purple-500'>
                    < AiOutlineMail size={30}/> xyz123@gmail.com

                </div>
                <div className='flex gap-3 items-center text-purple-500'>
                <BsTelephoneOutbound size={30}/> (0213) 000-0000
                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact;
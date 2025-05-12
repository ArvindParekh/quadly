"use client"

import { signIn } from "next-auth/react"
import { Button } from "../ui/button"

export default function FacebookSignupButton() {
    return (
        <Button
        variant='outline'
        className='border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500'
        onClick={async () => {
            await signIn("facebook")
        }}
     >
        <svg
           className='mr-2 h-4 w-4'
           fill='currentColor'
           viewBox='0 0 24 24'
        >
           <path d='M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0zm-2.675 12h-4v10h-5v-10h-3v-4h3V7c0-3.1 1.9-4 4-4 1.1 0 2 .1 2 .1v4h-2c-1 0-1 1-1 1v3h4l-1 4z' />
        </svg>
        Facebook
     </Button> 
    )
}
"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

export default function FacebookSignupButton() {
   return (
      <Button
         variant='outline'
         className='border-pink-500/20 hover:bg-pink-500/10 hover:text-pink-500'
         onClick={async () => {
            await signIn('facebook');
         }}
      >
         <svg
            className='mr-2 h-4 w-4 text-blue-500'
            fill='currentColor'
            viewBox='0 0 24 24'
         >
            <path d='M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.311h3.59l-.467 3.622h-3.123V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .595 23.406 0 22.675 0z' />
         </svg>
         Facebook
      </Button>
   );
}

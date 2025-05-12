"use client"

import { Button, ButtonProps } from "../ui/button";
import { signIn } from "next-auth/react";

export default function LoginButton(props: ButtonProps) {
   return (
      <Button
         variant='outline'
         className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
         onClick={async () => {
            await signIn();
         }}
         {...props}
      >
         Login
      </Button>
   );
}

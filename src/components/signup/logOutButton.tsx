"use client"

import { Button, ButtonProps } from "../ui/button";
import { signOut } from "next-auth/react";

export default function LogOutButton(props: ButtonProps) {
   return (
      <Button
         variant='outline'
         className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
         onClick={async () => {
            await signOut({ callbackUrl: "/" });
         }}
         {...props}
      >
         Logout
      </Button>
   );
}

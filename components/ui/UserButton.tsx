"use client"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import UserAvatar from "./UserAvatar"
import { Session } from "next-auth"
import {signIn, signOut} from 'next-auth/react'

  

function UserButton({session }:{session:Session | null}) {
        if(session){
            return(
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <UserAvatar name={session.user?.name} image={session.user?.image} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>)
          }
          else{
            return (
              <>
               <Button  variant={"outline"} onClick={()=> signIn()} >
                Sign in
                </Button>
              </>
            )
          }
  
}


export default UserButton
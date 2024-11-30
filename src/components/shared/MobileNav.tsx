"use client"

import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetDescription, SheetTitle } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import logo from '../../../public/assets/images/logo.svg'


const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header ">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src={logo}
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger>
              <Image 
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
            <SheetHeader>
      <SheetTitle>
      <Image 
                  src={logo}
                  alt="logo"
                  width={152}
                  height={23}
                />

      </SheetTitle>
      <SheetDescription>
        
      </SheetDescription>
    </SheetHeader>
              <>
               
              <ul className="header-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname

                return (
                  <li 
                    className={`${isActive && 'bg-violet-600 text-white hover:bg-violet-700'} p-18 flex whitespace-nowrap text-dark-800 w-full rounded-full py-1 px-1 hover:bg-gray-100 `}
                    key={link.route}
                    >
                    <Link className="sidebar-link cursor-pointer" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
            <Button asChild className=" bg-violet-600 hover:bg-violet-700 px-6  text-lg bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
      </nav>
    </header>
  )
}

export default MobileNav
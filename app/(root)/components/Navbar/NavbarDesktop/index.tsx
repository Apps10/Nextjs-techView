import { Button } from "@/components/ui/button"
import { links } from "../Navbar.data"
import Link from "next/link"

export function NavbarDesktop() {
  return (
    <div className="hidden items-center gap-4 text-lg md:flex">
      {links.map((link, index) => (
        <Button key={index} variant="ghost" >
          {<Link href={link.href}>{link.name}</Link>}
          </Button>
      ))}
    </div>
  )
}

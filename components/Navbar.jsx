import Link from "next/link";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { APP_NAME, APP_NAVBAR_PAGES } from "@/constants";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <nav className="glowing sticky top-0 p-4 z-50 flex items-center justify-between bg-black">
        <div>
          <Link href="/" className="glowing-text-orange text-2xl text-white">
            {APP_NAME}
          </Link>
        </div>
        <div className="hidden sm:flex gap-4">
          {APP_NAVBAR_PAGES.map((page, index) => (
            <Link
              key={index}
              href={page.slug}
              className={
                "text-xl text-white border-b-4 hover:border-orange-400 transition-all duration-700 " +
                page.style + (router.pathname == page.slug ? " border-orange-400" : " border-transparent")
              }
            >
              {page.name}
            </Link>
          ))}
        </div>
        <div className="sm:hidden">
          <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
      <div
        className={
          "absolute z-40 top-0 w-screen h-screen transition-all bg-black " +
          (isOpen ? "left-0" : "left-[100%] hidden")
        }
      >
        <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
          {APP_NAVBAR_PAGES.map((page, index) => (
            <Link 
              key={index} 
              href={page.slug}
              onClick={() => setOpen(false)} 
              className={"text-2xl text-white " + page.style}
            >
              {page.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

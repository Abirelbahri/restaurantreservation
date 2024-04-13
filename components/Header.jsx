"use client";
import react, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Button } from "./ui/button";

const Header = () => {
  const [active, setActive] = useState(false); // useState Hook
  useEffect(() => {
    const handleScroll = () => {
      // Scroll Detecting
      setActive(window.scrollY > 100);
    };
    //eventLisener
    window.addEventListener("scroll", handleScroll);
    //clearing event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` ${
        active ? "bg-black py-4" : "bg-none py-8"
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      {" "}
      {/* // the bg-black is bg-black-heavy and need cheking after  */}
      <div className="container mx-auto">
        {/* logo nav btn */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/">
            <Image src="/logo.svg" width={75} height={30} alt="" />
          </Link>
          {/* navbar */}
          <Nav
            containerStyles="hidden xl:flex gap-x-12 text-white"
            linkStyles="capitalize"
          />
          {/* btn */}
          <ScrollLink to="reservation" smooth={true}>
            <Button variant="orange" size="sm">
              Boot a table
            </Button>
          </ScrollLink>
          {/* mobile nav */}
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl"
            linkStyles="uppercase"
          />
          {/* xl:hidden to make it dissapear in big screens */}
        </div>
      </div>
    </div>
  );
};

export default Header;

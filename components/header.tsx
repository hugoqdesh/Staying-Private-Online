import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { Github, Radar } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex w-full max-w-7xl mx-auto items-center justify-between p-4">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold flex items-center gap-2 hover:text-green-600 transition-all duration-300 group"
        >
          <Radar className="text-green-600 group-hover:rotate-180 transition-transform duration-700 size-6 md:size-8" />
          Veilr
        </Link>

        <nav className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
          <Link
            href="/"
            className="relative hover:text-green-600 transition-colors duration-300
                after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 
                after:bg-green-600 after:transition-all after:duration-300
                hover:after:w-full"
          >
            About
          </Link>

          <Link
            href="/"
            className="relative hover:text-green-600 transition-colors duration-300
                after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 
                after:bg-green-600 after:transition-all after:duration-300
                hover:after:w-full"
          >
            Donate
          </Link>
        </nav>

        <div className="flex items-center gap-1 md:gap-3">
          <Link href="/" target="_blank">
            <Button variant="ghost" size="icon">
              <Github />
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { Github, Radar } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex w-full max-w-7xl mx-auto items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold flex items-center gap-3 hover:text-green-500 transition-all duration-300 group"
        >
          <Radar className="text-green-500 group-hover:rotate-180 group-hover:scale-110 transition-all duration-700 size-6 md:size-8" />
          <span className="tracking-tight">Veilr</span>
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/" target="_blank">
            <Button variant="ghost" size="icon">
              <Github className="size-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;

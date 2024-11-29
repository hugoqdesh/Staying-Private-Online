import Image from "next/image";
import Link from "next/link";
import React from "react";

const Level4 = () => {
  return (
    <div className="py-32 px-8 max-w-6xl mx-auto">
      <div className="flex flex-col items-center justify-center space-y-10 mb-10">
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <Image
            src="/level4.png"
            alt="Level 4"
            width={200}
            height={200}
            className="rounded-full border-2 border-primary/20 p-3 shadow-lg transition-transform group-hover:scale-105"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-center">Level 4</h2>
        </div>
      </div>

      <div className="rounded-2xl p-8 md:p-12 mb-16 border-2 border-primary/10 text-start bg-primary/5 shadow-xl">
        <h3 className="text-3xl font-semibold mb-10 text-primary/90">
          Privacy Measures
        </h3>
        <ol className="space-y-6 max-w-3xl mx-auto text-lg list-decimal list-inside">
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Build a ghost, untraceable laptop{" "}
            <Link
              href="https://youtu.be/SLoiSCO2g7k?si=YYlcGqUjY9pJDkBE"
              target="_blank"
            >
              [Build a Ghost Untraceable Laptop]
            </Link>
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Encrypt every electronic device you use or avoid using them
            altogether
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Set up everything under an anonymous LLC to shield your identity
            legally
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Remove the camera and microphone from all devices to avoid being
            recorded or spied on
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Switch to using dumb and burner phones to reduce your digital
            footprint
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Avoid using email entirely to prevent tracking and leaks
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Never use real identification for any online or offline activity
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Have no social media presence to avoid exposure
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Avoid surveillance cameras as much as possible to stay off the grid
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Level4;

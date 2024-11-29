import Link from "next/link";
import React from "react";

const Test = () => {
  const securityTools = [
    {
      name: "Fingerprint.com",
      href: "https://fingerprint.com/",
      description: "Check your browser's unique fingerprint",
    },
    {
      name: "First Party Simulator",
      href: "https://firstpartysimulator.org/",
      description: "Visualize first-party tracking methods",
    },
    {
      name: "Browserleaks",
      href: "https://browserleaks.com/",
      description: "Test for browser security vulnerabilities",
    },
    {
      name: "Privacytests",
      href: "https://privacytests.org/",
      description: "Compare browser privacy features",
    },
    {
      name: "Amiunique",
      href: "https://www.amiunique.org/",
      description: "Analyze your browser uniqueness",
    },
    {
      name: "Ipleak",
      href: "https://ipleak.net/",
      description: "Check for IP and WebRTC leaks",
    },
    {
      name: "Adblock Tester",
      href: "https://d3ward.github.io/toolz/adblock.html",
      description: "Verify your ad-blocking effectiveness",
    },
    {
      name: "Identity Theft Checker",
      href: "https://www.f-secure.com/en/identity-theft-checker",
      description: "Scan for identity compromises",
    },
    {
      name: "Have I Been Pwned",
      href: "https://haveibeenpwned.com/",
      description: "Find data breaches linked to your email",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="scroll-m-20 pb-8 text-4xl font-bold tracking-tight first:mt-0 text-center">
        Security Testing Tools
      </h2>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Explore these tools to assess your digital security and privacy posture.
        Each tool provides unique insights into different aspects of your online
        presence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {securityTools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            target="_blank"
            className="group rounded-lg border p-6 hover:border-foreground transition-all hover:shadow-md hover:-translate-y-1"
          >
            <h3 className="font-semibold mb-3 text-lg group-hover:text-primary">
              {tool.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Test;

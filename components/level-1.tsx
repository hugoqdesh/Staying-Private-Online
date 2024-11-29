import Image from "next/image";
import React from "react";

const Level1 = () => {
  return (
    <div className="py-32 px-8 max-w-6xl mx-auto">
      <div className="flex flex-col items-center justify-center space-y-10 mb-10">
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <Image
            src="/level1.png"
            alt="Level 1"
            width={200}
            height={200}
            className="rounded-full border-2 border-primary/20 p-3 shadow-lg transition-transform group-hover:scale-105"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-center">Level 1</h2>
        </div>
      </div>

      <div className="rounded-2xl p-8 md:p-12 mb-16 border-2 border-primary/10 text-start bg-primary/5 shadow-xl">
        <h3 className="text-3xl font-semibold mb-10 text-primary/90">
          Privacy Measures
        </h3>
        <ol className="space-y-6 max-w-3xl mx-auto text-lg list-decimal list-inside">
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Protect your phone and computer with a strong password
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Download and use a password manager like KeePassXC (KeePassDX for
            Android) or Bitwarden to store passwords securely
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Enable Two-Factor Authentication (2FA) using Aegis for Android or
            Tofu for iOS
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Set up a password for your SIM card
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Never share your passwords with anyone to maintain your account's
            privacy
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Regularly update your software and apps to patch security
            vulnerabilities
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Always ensure you're browsing using HTTPS connections
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Avoid clicking on unknown or suspicious links to prevent phishing
            and malware attacks
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Never plug random or untrusted USB devices into your computer or
            phone
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Level1;

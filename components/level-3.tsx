import Link from "next/link";
import React from "react";
import Image from "next/image";

const Level3 = () => {
  return (
    <div className="py-32 px-8 max-w-6xl mx-auto">
      <div className="flex flex-col items-center justify-center space-y-10 mb-10">
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <Image
            src="/level3.png"
            alt="Level 3"
            width={200}
            height={200}
            className="rounded-full border-2 border-primary/20 p-3 shadow-lg transition-transform group-hover:scale-105"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-center">Level 3</h2>
        </div>
      </div>

      <div className="rounded-2xl p-8 md:p-12 mb-16 border-2 border-primary/10 text-start bg-primary/5 shadow-xl">
        <h3 className="text-3xl font-semibold mb-10 text-primary/90">
          Privacy Measures
        </h3>
        <ol className="space-y-6 max-w-3xl mx-auto text-lg list-decimal list-inside">
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Switch to using the Tor Browser for anonymous browsing
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use Tails OS
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Install F-Droid and Aurora Store from there to get open-source apps
            securely
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Install Orbot on Android to route your internet traffic through Tor
            on mobile
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use the NoScript extension to block unwanted scripts while browsing
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use fake information about yourself where you can
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use virtual cards like those from{" "}
            <Link href="https://privacy.com/" target="_blank">
              [privacy.com]
            </Link>{" "}
            for online payments
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Pay with Monero or cash whenever possible to avoid being tracked.
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Remove your SIM card if you don't need it to avoid location tracking
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use airplane mode whenever possible
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Leave devices at home when possible to avoid being tracked
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Sign out of iCloud to reduce cloud-based tracking of your activities
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Disable biometrics on your devices
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Cover your device's cameras to prevent surveillance
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use Faraday bags to block all wireless signals when you're carrying
            devices
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use websites instead of apps to limit app-based tracking
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use apps like OsmAnd for privacy-focused GPS navigation and offline
            maps
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use the Trail Sense app for secure, offline navigation tools
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Buy a Pixel phone with cash, update it using store Wi-Fi, and
            install GrapheneOS
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            On GrapheneOS, set up different profiles to compartmentalize data
            and apps
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Reboot and factory reset your devices at times if needed
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Boot from a USB drive with a secure OS when you need extra security
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use a YubiKey for two-factor authentication for sensitive accounts{" "}
            <Link href="https://www.yubico.com/" target="_blank">
              [Yubico]
            </Link>
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Delete your Google account to minimize your data footprint{" "}
            <Link
              href="https://myactivity.google.com/myactivity"
              target="_blank"
            >
              [Google My Activity]
            </Link>
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use{" "}
            <Link href="https://justdeleteme.xyz/" target="_blank">
              [justdeleteme]
            </Link>{" "}
            to check how hard it is to delete other online accounts
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            When you don’t want to be recognized: avoid wearing identifiable
            jewelry, use a masquerade or plain mask (e.g., scarf, neck gaiter),
            conceal your hairstyle with a hoodie or hat, cover tattoos, and wear
            sunglasses that hide your eyebrows and eyes. Choose plain dark
            clothing with no identifiable patterns. Consider bringing a
            quick-change outfit in a backpack
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Install{" "}
            <Link href="https://jan.ai/" target="_blank">
              [jan.ai]
            </Link>
            , add a model to it, and use{" "}
            <Link
              href="https://huggingface.co/chat/assistants?sort=trending"
              target="_blank"
            >
              [huggingface assistants]
            </Link>{" "}
            to get what you need
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Level3;

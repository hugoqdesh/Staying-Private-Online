import Link from "next/link";
import React from "react";
import Image from "next/image";

const Level2 = () => {
  return (
    <div className="py-32 px-8 max-w-6xl mx-auto">
      <div className="flex flex-col items-center justify-center space-y-10 mb-10">
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <Image
            src="/level2.png"
            alt="Level 2"
            width={200}
            height={200}
            className="rounded-full border-2 border-primary/20 p-3 shadow-lg transition-transform group-hover:scale-105"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-center">Level 2</h2>
        </div>
      </div>

      <div className="rounded-2xl p-8 md:p-12 mb-16 border-2 border-primary/10 text-start bg-primary/5 shadow-xl">
        <h3 className="text-3xl font-semibold mb-10 text-primary/90">
          Privacy Measures
        </h3>
        <ol className="space-y-6 max-w-3xl mx-auto text-lg list-decimal list-inside">
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Start using Linux distributions like Fedora, Arch, or Debian
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Secure your computer BIOS
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Install Mullvad Browser as your main browser; you can also use
            Librewolf or Brave. Use Brave on mobile as well
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Set up a VPN like Mullvad VPN or ProtonVPN
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use DuckDuckGo, Startpage, or Brave Search for privacy-focused
            search engines
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Install the Ublock Origin extension to block ads and trackers
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use multiple browsers and search engines for different tasks to
            compartmentalize your activities
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Switch to privacy-focused email providers like ProtonMail or
            Tutanota
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Have more than one email address for different purposes
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use an email alias with services like{" "}
            <Link href="https://simplelogin.io/" target="_blank">
              [simplelogin]
            </Link>
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use a temporary email service when necessary, like{" "}
            <Link href="https://temp-mail.org/en/" target="_blank">
              [temp-mail]
            </Link>
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Opt out of phone OS analytics and tracking services
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Disable Bluetooth and NFC when not in use
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Set a strong password for your router
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Spoof your MAC address
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Activate screen lock when idle, and always lock your devices when
            not in use
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Keep notifications off on the lock screen to avoid revealing
            sensitive information
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use a privacy screen protector
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Never reuse passwords; use unique passwords for every account.
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Don't save passwords in your browser
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use unique usernames
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Avoid using truthful answers to security questions
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Don’t rely on 4-digit PINs; use longer, more secure PINs
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Check ATMs for card skimmers to protect against fraud
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Set all social media accounts to private
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Switch to encrypted messaging apps like Signal or SimpleX for secure
            communication
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Spend less time on social media
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Delete old social media accounts that you no longer use
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Uninstall every app you don’t need or use
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Clear app cache regularly
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Disable any unnecessary settings or features you don't use on your
            devices
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Clean your web history frequently
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Perform system cleanup: File Explorer {">"} right-click drive {">"}{" "}
            Properties {">"} Disk Cleanup {">"} Clean up system files {">"}{" "}
            Select everything {">"} Delete
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Backup important data to a USB or external drive
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Avoid SMS and native calls when possible
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Don't connect to public Wi-Fi unless absolutely necessary
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Install the Exodus app on Android to check for app permissions and
            trackers
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            Use VirtualBox to run virtual machines for additional privacy when
            performing certain tasks
          </li>
          <li className="p-3 hover:bg-primary/5 rounded-lg transition-colors">
            For private note-taking, use{" "}
            <Link href="https://notesnook.com/" target="_blank">
              [notesnook]
            </Link>{" "}
            for encrypted, secure storage
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Level2;

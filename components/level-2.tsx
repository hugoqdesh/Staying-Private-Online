import React from "react";

const Level2 = () => {
  return (
    <div className="py-32 px-8 max-w-7xl mx-auto">
      <main>
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-4">Level 2</h1>
        </div>

        <div className="space-y-16">
          <section id="device-security">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl font-semibold">Privacy Measures</h2>
            </div>

            <div className="space-y-8">
              <div className="rounded-lg border-2 border-green-500/10 p-6">
                <div className="space-y-4">
                  <div className="prose prose-sm max-w-none">
                    <ol className="list-decimal pl-6 space-y-6 text-lg">
                      <li>
                        Start using Linux distributions like Fedora, Arch, or
                        Debian
                      </li>
                      <li>
                        Install Browsers:
                        <ul className="list-disc pl-4 mt-2">
                          <li>Desktop: Mullvad Browser, Librewolf, Brave</li>
                          <li>Mobile: Brave</li>
                        </ul>
                      </li>
                      <li>
                        Set up a VPN:
                        <ul className="list-disc pl-4 mt-2">
                          <li>Mullvad VPN</li>
                          <li>ProtonVPN</li>
                        </ul>
                      </li>
                      <li>
                        Search Engines:
                        <ul className="list-disc pl-4 mt-2">
                          <li>DuckDuckGo</li>
                          <li>Startpage</li>
                          <li>Brave Search</li>
                        </ul>
                      </li>
                      <li>Install Ublock Origin extension</li>
                      <li>
                        Use privacy-focused email providers:
                        <ul className="list-disc pl-4 mt-2">
                          <li>ProtonMail</li>
                          <li>Tutanota</li>
                        </ul>
                      </li>
                      <li>
                        Spoof your MAC address:
                        <ul className="list-disc pl-4 mt-2">
                          <li></li>
                        </ul>
                      </li>
                      <li>Get a privacy screen protector</li>
                      <li>Use unique usernames</li>
                      <li>Set all social media accounts to private</li>
                      <li>
                        Use encrypted messaging apps like Signal or SimpleX as
                        much as possible
                      </li>
                      <li>Uninstall EVERYTHING you don't need or use</li>
                      <li>
                        Perform system cleanup:
                        <ul className="list-disc pl-4 mt-2">
                          <li>File Explorer</li>
                          <li>right-click drive</li>
                          <li>Properties</li>
                          <li>Disk Cleanup</li>
                          <li>Clean up system files</li>
                          <li>Select everything</li>
                          <li>Delete</li>
                        </ul>
                      </li>
                      <li>Backup important data to a USB or external drive</li>
                      <li>
                        Install Exodus app on Android to check for app
                        permissions and trackers
                      </li>
                      <li>
                        Use VirtualBox to run virtual machines for additional
                        privacy when performing certain tasks
                      </li>
                      <li>For private note-taking, use [notesnook]</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border-2 border-green-500/10 p-6">
                <div className="space-y-4">
                  <div className="prose prose-sm max-w-none">
                    <ol className="list-decimal pl-6 space-y-6 text-lg">
                      <li>
                        Use multiple browsers and search engines for different
                        tasks to compartmentalize your activities
                      </li>
                      <li>
                        Have more than one email address for different purposes
                      </li>
                      <li>
                        Use an email alias with services like [simplelogin]
                      </li>
                      <li>
                        Use a temporary email service when necessary, like
                        [temp-mail]
                      </li>
                      <li>
                        Activate screen lock when idle, and always lock your
                        devices when not in use
                      </li>
                      <li>
                        Delete old social media accounts that you no longer use
                      </li>
                      <li>Clear app cache regularly</li>
                      <li>Clean your web history frequently</li>
                      <li>Avoid SMS and native calls when possible</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Level2;

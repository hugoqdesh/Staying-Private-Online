import Link from "next/link";
import React from "react";
import Image from "next/image";

const Level3 = () => {
  return (
    <div className="py-32 px-8 max-w-7xl mx-auto">
      <main>
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-4">Level 3</h1>
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
                      <li>Switch to Tor Browser for anonymous browsing</li>
                      <li>Install Tails OS</li>
                      <li>Install F-Droid and Aurora Store from there</li>
                      <li>
                        Install Orbot on Android to route your internet traffic
                        through Tor
                      </li>
                      <li>Install NoScript extension</li>
                      <li>
                        Use virtual cards like from{" "}
                        <Link href="https://privacy.com/" target="_blank">
                          [privacy.com]
                        </Link>
                      </li>
                      <li>Remove SIM card if you don't need it</li>
                      <li>Keep airplane mode on when you can</li>
                      <li>Sign out of iCloud</li>
                      <li>
                        Cover your device's cameras to prevent surveillance
                      </li>
                      <li>
                        Buy Faraday bags to block all wireless signals when
                        you're carrying devices
                      </li>
                      <li>
                        Use websites instead of apps to limit app-based tracking
                      </li>
                      <li>Install OsmAnd & Trail Sense on Android</li>
                      <li>
                        GrapheneOS
                        <ul className="list-disc pl-4 mt-2">
                          <li>Buy a Pixel phone with cash</li>
                          <li>update it using store Wi-Fi</li>
                          <li>install GrapheneOS</li>
                        </ul>
                      </li>
                      <li>
                        On GrapheneOS, set up different profiles to
                        compartmentalize data and apps
                      </li>
                      <li>Use bootable USB drives</li>
                      <li>
                        Use a YubiKey for two-factor authentication for
                        sensitive accounts{" "}
                        <Link href="https://www.yubico.com/" target="_blank">
                          [Yubico]
                        </Link>
                      </li>
                      <li>
                        Delete your Google account to minimize your data
                        footprint{" "}
                        <Link
                          href="https://myactivity.google.com/"
                          target="_blank"
                        >
                          [Google My Activity]
                        </Link>
                      </li>
                      <li>
                        Install{" "}
                        <Link href="https://jan.ai/" target="_blank">
                          [jan.ai]
                        </Link>
                        , add a model to it, and use{" "}
                        <Link
                          href="https://huggingface.co/chat/assistants"
                          target="_blank"
                        >
                          [huggingface assistants]
                        </Link>{" "}
                        to get different assistants
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border-2 border-green-500/10 p-6">
                <div className="space-y-4">
                  <div className="prose prose-sm max-w-none">
                    <ol className="list-decimal pl-6 space-y-6 text-lg">
                      <li>Use fake information about yourself where you can</li>
                      <li>
                        Pay with Monero or cash whenever possible to avoid being
                        tracked
                      </li>
                      <li>
                        Leave devices at home when possible to avoid being
                        tracked
                      </li>
                      <li>
                        Reboot and factory reset your devices at times if needed
                      </li>
                      <li>
                        Use{" "}
                        <Link href="https://justdeleteme.xyz/" target="_blank">
                          [justdeleteme]
                        </Link>{" "}
                        to check how hard it is to delete other online accounts
                      </li>
                      <li>
                        When you don’t want to be recognized: avoid wearing
                        identifiable jewelry, use a masquerade or plain mask
                        (e.g., scarf, neck gaiter), conceal your hairstyle with
                        a hoodie or hat, cover tattoos, and wear sunglasses that
                        hide your eyebrows and eyes. Choose plain dark clothing
                        with no identifiable patterns. Consider bringing a
                        quick-change outfit in a backpack
                      </li>
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

export default Level3;

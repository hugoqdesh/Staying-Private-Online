import React from "react";

const Level1 = () => {
  return (
    <div className="py-32 px-8 max-w-7xl mx-auto">
      <main>
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-4">Level 1</h1>
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
                        Protect your phone and computer with a strong password
                      </li>
                      <li>Disable biometrics on your devices</li>
                      <li>
                        Download and use a password manager:
                        <ul className="list-disc pl-4 mt-2">
                          <li>
                            Desktop: KeePassXC (recommended for offline use)
                          </li>
                          <li>
                            Mobile: KeePassDX (Android) or Bitwarden (iOS)
                          </li>
                          <li>Create a strong master password</li>
                        </ul>
                      </li>
                      <li>
                        Secure your computer BIOS:
                        <ul className="list-disc pl-4 mt-2">
                          <li></li>
                        </ul>
                      </li>
                      <li>
                        Enable Two-Factor Authentication (2FA)
                        <ul className="list-disc pl-4 mt-2">
                          <li>Android: Aegis</li>
                          <li>iOS: Tofu</li>
                        </ul>
                      </li>
                      <li>Set up a password for your SIM card</li>
                      <li>Set a strong password for your router</li>
                      <li>Keep Bluetooth and NFC off when not in use</li>
                      <li>Disable notifications from lock screen</li>
                      <li>
                        Opt out of phone OS analytics and tracking services
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border-2 border-green-500/10 p-6">
                <div className="space-y-4">
                  <div className="prose prose-sm max-w-none">
                    <ol className="list-decimal pl-6 space-y-6 text-lg">
                      <li>Regularly update your software and apps</li>
                      <li>
                        Never share your passwords with anyone to maintain your
                        account's privacy
                      </li>
                      <li>
                        Always ensure you're browsing using HTTPS connections
                      </li>
                      <li>
                        Avoid clicking on unknown or suspicious links to prevent
                        phishing and malware attacks
                      </li>
                      <li>
                        Never plug random or untrusted USB devices into your
                        computer or phone
                      </li>
                      <li>
                        Never reuse passwords; use unique passwords for every
                        account
                      </li>
                      <li>Don't save passwords in your browser</li>
                      <li>Never answer truthfully to security questions</li>
                      <li>
                        Check ATMs for card skimmers to protect against fraud
                      </li>
                      <li>Don't connect to public Wi-Fi</li>
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

export default Level1;

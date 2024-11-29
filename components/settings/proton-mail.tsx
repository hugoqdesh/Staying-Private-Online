import React from "react";

const ProtonMail = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Proton Mail Settings
      </h2>

      <div className="space-y-8 w-10/12">
        <section>
          <h3 className="text-xl font-medium mb-4">Recovery</h3>
          <div className="space-y-4 pl-4 border-l-2 border-purple-500">
            <p className="leading-7">
              Recovery phrase: On {">"} Generate recovery phrase {">"} Enter
              Password {">"}
              Submit {">"} Save Recovery phrase {">"} Done/Download.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Security and privacy</h3>
          <div className="space-y-4 pl-4 border-l-2 border-purple-500">
            <p className="leading-7">
              Revoke any old sessions which you don't use anymore.
            </p>
            <p className="leading-7">Send crash reports: Off</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Messages and composing</h3>
          <div className="space-y-4 pl-4 border-l-2 border-purple-500">
            <p className="leading-7">Auto-load embedded images: Off</p>
            <p className="leading-7">Confirm link URLs: On</p>
            <p className="leading-7">
              Undo send: 20 seconds (Not necessarily a privacy feature but might
              come in handy)
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Email privacy</h3>
          <div className="space-y-4 pl-4 border-l-2 border-purple-500">
            <p className="leading-7">
              Auto show remote images: On (Make sure to enable the next setting
              below too)
            </p>
            <p className="leading-7">Block email tracking: On</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Encryption and keys</h3>
          <div className="space-y-4 pl-4 border-l-2 border-purple-500">
            <p className="leading-7">Sign external messages: On</p>
            <p className="leading-7">Attach public key: On</p>
            <p className="leading-7">Default PGP scheme: PGP/MIME</p>
          </div>
        </section>

        <section className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Red dots indicate features to disable, green dots indicate features
            to enable. These settings help maximize your email privacy and
            security while using Proton Mail.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProtonMail;

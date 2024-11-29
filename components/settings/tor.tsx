import React from "react";

const Tor = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-3xl font-semibold mb-8 text-center">Tor Settings</h2>

      <div className="space-y-8 w-10/12">
        <section>
          <h3 className="text-xl font-medium mb-4">Security Settings</h3>
          <div className="space-y-4 pl-4 border-l-2 border-purple-500">
            <p className="leading-7">HTTPS-Only Mode: Enabled</p>
            <p className="leading-7">Security Level: Safest or Safer</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Useful Resources</h3>
          <div className="space-y-4 pl-4 border-l-2 border-purple-500">
            <p className="leading-7">Hidden Wiki</p>
            <p className="text-sm text-muted-foreground">
              A directory of .onion sites and services
            </p>
          </div>
        </section>

        <section className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Note: These settings help maintain your privacy and security while
            using the Tor network. Always verify you're using official Tor
            sources and keep your browser updated.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Tor;

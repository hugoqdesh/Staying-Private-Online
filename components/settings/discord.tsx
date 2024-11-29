import React from "react";

const Discord = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Discord Settings
      </h2>

      <div className="space-y-8 w-10/12">
        <section>
          <h3 className="text-xl font-medium mb-4">Privacy & safety</h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">Safe Direct Messaging: Do not scan</p>

            <p className="leading-7">Find Your Friends: Sync Contacts: Off</p>

            <p className="leading-7">
              Discovery Permissions: Phone Number & Email: Off
            </p>
            <p className="leading-7">Use data to improve Discord: Off</p>

            <p className="leading-7">
              Use data to customize my Discord experience: Off
            </p>
            <p className="leading-7">
              Allow Discord to track screen reader usage: Off
            </p>
          </div>
        </section>

        <section className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            These settings are recommended for maximum privacy. Adjust them
            according to your needs in Discord's Privacy & Safety settings.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Discord;

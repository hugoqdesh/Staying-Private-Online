import React from "react";

const Instagram = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Instagram Settings
      </h2>

      <div className="space-y-8 w-10/12">
        <section>
          <h3 className="text-xl font-medium mb-4">Ads</h3>
          <div className="space-y-4 pl-4 border-l-2 border-purple-500">
            <p className="leading-7">
              Data About your Activity From Partners {">"} Use Data from
              Partners: Off
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Account</h3>
          <div className="space-y-4 pl-4 border-l-2 border-purple-500">
            <p className="leading-7">Browsing Data: Clear</p>
            <p className="leading-7">Autofill Contact Forms: Off</p>
            <p className="leading-7">Autofill Payment Forms: Off</p>
            <p className="leading-7">Connect Contacts: Off</p>
          </div>
        </section>

        <section className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Red dots indicate features that should be disabled for maximum
            privacy. Regularly review these settings as Instagram may add new
            features or change existing ones.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Instagram;

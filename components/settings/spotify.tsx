import React from "react";

const Spotify = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Spotify Settings
      </h2>

      <div className="space-y-8 w-10/12">
        <section>
          <h3 className="text-xl font-medium mb-4">Edit Profile</h3>
          <div className="space-y-4 pl-4 border-l-2 border-green-500">
            <p className="leading-7">Give false info in Date of birth</p>
            <p className="leading-7">
              Share my registration data with Spotify's content providers for
              marketing purposes: Off
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Privacy Settings</h3>
          <div className="space-y-4 pl-4 border-l-2 border-green-500">
            <p className="leading-7">
              Process my personal data for tailored ads: Off
            </p>
            <p className="leading-7">Process my Facebook data: Off</p>
          </div>
        </section>

        <section className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Red dots indicate features that should be disabled for maximum
            privacy. Review these settings periodically as Spotify may update
            its privacy options.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Spotify;

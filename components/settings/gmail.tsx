import React from "react";

const Gmail = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Gmail Settings
      </h2>

      <div className="space-y-8 w-10/12">
        <section>
          <h3 className="text-xl font-medium mb-4">General</h3>
          <div className="space-y-4 pl-4 border-l-2 border-orange-500">
            <p className="leading-7">
              Undo Send: 30 seconds (Not necessarily a privacy feature but might
              come in handy)
            </p>
            <p className="leading-7">
              Images: Ask before displaying external images
            </p>
            <p className="leading-7">Grammar: Grammar suggestions off</p>
            <p className="leading-7">Spelling: Spelling suggestions off</p>
            <p className="leading-7">Autocorrect: Autocorrect off</p>
            <p className="leading-7">Smart Compose: Writing suggestions off</p>
            <p className="leading-7">
              Smart Compose personalization: Personalization off
            </p>
            <p className="leading-7">Smart Reply: Smart Reply off</p>
            <p className="leading-7">
              Smart features and personalization in other Google products: Off
            </p>
          </div>
        </section>

        <section className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Red dots indicate features to disable, green dots indicate features
            to enable. These settings help minimize data collection and enhance
            privacy while using Gmail.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Gmail;

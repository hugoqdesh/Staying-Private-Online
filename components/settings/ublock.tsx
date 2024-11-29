import React from "react";

const UBlock = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        UBlock Origin Settings
      </h2>

      <div className="space-y-8 w-10/12">
        <section>
          <h3 className="text-xl font-medium mb-4">General Settings</h3>
          <div className="space-y-4 pl-4 border-l-2 border-red-500">
            <p className="leading-7">
              Hide placeholders of blocked elements: On
            </p>

            <p className="leading-7">
              Show the number of blocked requests on the icon: On
            </p>

            <p className="leading-7">
              Make use of context menu where appropriate: On
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Privacy</h3>
          <div className="space-y-4 pl-4 border-l-2 border-red-500">
            <p className="leading-7">Enable everything</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Filter Lists</h3>
          <div className="space-y-4 pl-4 border-l-2 border-red-500">
            <p className="leading-7">Auto-update filter lists: On</p>

            <p className="leading-7">
              Suspend network activity until all filter lists are loaded: On
            </p>

            <p className="leading-7">Parse and enforce cosmetic filters: On</p>

            <p className="leading-7">
              Enable everything for Built-in, Ads, etc
            </p>
          </div>
        </section>

        <section className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Green dots indicate features that should be enabled for maximum
            protection. These settings provide optimal blocking of unwanted
            content and tracking.
          </p>
        </section>
      </div>
    </div>
  );
};

export default UBlock;

import React from "react";

const BraveSearch = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Brave Search Settings
      </h2>

      <div className="space-y-8 w-10/12">
        <section>
          <h3 className="text-xl font-medium mb-4">Anonymous local results</h3>
          <div className="space-y-2 pl-4 border-l-2 border-orange-500">
            <div className="flex items-center gap-2">
              <p className="leading-7">On</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Anonymous usage metrics</h3>
          <div className="space-y-2 pl-4 border-l-2 border-orange-500">
            <div className="flex items-center gap-2">
              <p className="leading-7">Off</p>
            </div>
          </div>
        </section>

        <section className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            These settings ensure maximum privacy while using Brave Search.
            Local results improve search quality while maintaining anonymity.
          </p>
        </section>
      </div>
    </div>
  );
};

export default BraveSearch;

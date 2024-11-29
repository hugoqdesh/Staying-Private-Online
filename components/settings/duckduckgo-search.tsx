import React from "react";

const DuckDuckGoSearch = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        DuckDuckGo Search Settings
      </h2>

      <div className="space-y-8 w-10/12">
        <section>
          <h3 className="text-xl font-medium mb-4">General</h3>
          <div className="space-y-4 pl-4 border-l-2 border-orange-500">
            <p className="leading-7">Autocomplete Suggestions: Off</p>
            <p className="leading-7">Advertisements: Off</p>
            <p className="leading-7">Install DuckDuckGo: Off</p>
            <p className="leading-7">Homepage Privacy Tips: Off</p>
            <p className="leading-7">Help Improve DuckDuckGo: Off</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Privacy</h3>
          <div className="space-y-4 pl-4 border-l-2 border-orange-500">
            <p className="leading-7">GET Requests: Off</p>
          </div>
        </section>

        <section className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            All features above are recommended to be disabled for maximum
            privacy. DuckDuckGo will still function normally with these
            settings.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DuckDuckGoSearch;

import React from "react";

const StartPageSearch = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Startpage Search Settings
      </h2>

      <div className="space-y-8 w-10/12">
        <section>
          <h3 className="text-xl font-medium mb-4">General</h3>
          <div className="space-y-4 pl-4 border-l-2 border-primary">
            <p className="leading-7">Search suggestions: Off</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Appearance</h3>
          <div className="space-y-4 pl-4 border-l-2 border-primary">
            <p className="leading-7">Promotional messaging: Off</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Privacy and Safety</h3>
          <div className="space-y-4 pl-4 border-l-2 border-primary">
            <p className="leading-7">HTTP request method: POST</p>
            <p className="leading-7">Show safety suggestion: On</p>
          </div>
        </section>

        <section className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            These settings are configured for optimal privacy. Using POST
            requests helps prevent search terms from appearing in server logs,
            while safety suggestions help protect against malicious sites.
          </p>
        </section>
      </div>
    </div>
  );
};

export default StartPageSearch;

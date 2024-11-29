import React from "react";

const Apple = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Apple Settings
      </h2>

      <div className="space-y-8 w-10/12">
        <section>
          <h3 className="text-xl font-medium mb-4">Personal Information</h3>
          <div className="space-y-4 pl-4 border-l-2 border-primary">
            <p className="leading-7">Date of Birth Provide false info</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Payment Methods</h3>
          <div className="space-y-4 pl-4 border-l-2 border-primary">
            <p className="leading-7">Don't save any payment info</p>
            <p className="leading-7">Don't save any payment info</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Privacy</h3>
          <div className="space-y-4 pl-4 border-l-2 border-primary">
            <p className="leading-7">Share iCloud analytics: Off</p>
            <p className="leading-7">Gender Not selected or Decline to State</p>
            <p className="leading-7">Gender Not selected or Decline to State</p>
          </div>
        </section>

        <section className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Red dots indicate features that should be disabled for maximum
            privacy. These settings help minimize data collection and storage on
            Apple services.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Apple;

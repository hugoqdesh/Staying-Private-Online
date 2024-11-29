import React from "react";

const Tutanota = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Tutanota Mail Settings
      </h2>

      <div className="space-y-8 w-10/12">
        <section>
          <h3 className="text-xl font-medium mb-4">Login</h3>
          <div className="space-y-4 pl-4 border-l-2 border-red-500">
            <p className="leading-7">Usage data decision: Deactivated</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Email</h3>
          <div className="space-y-4 pl-4 border-l-2 border-red-500">
            <p className="leading-7">Default delivery: Confidential</p>
          </div>
        </section>

        <section className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Red dots indicate features to disable, green dots indicate features
            to enable. These settings help maximize your email privacy and
            security while using Tutanota.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Tutanota;

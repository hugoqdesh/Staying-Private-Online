import React from "react";

const LinkedIn = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Twitter (X) Settings
      </h2>

      <div className="space-y-8 w-10/12">
        <section>
          <h3 className="text-xl font-medium mb-4">Your account</h3>
          <div className="space-y-4 pl-4 border-l-2 border-primary">
            <p className="leading-7">Phone: Remove phone number if added</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">
            Security and account access
          </h3>
          <div className="space-y-4 pl-4 border-l-2 border-primary">
            <p className="leading-7">Password reset protect: On</p>
            <p className="leading-7">
              Connected Apps {">"} Remove anything you don't use
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Privacy and safety</h3>
          <div className="space-y-4 pl-4 border-l-2 border-primary">
            <p className="leading-7">
              Photo tagging: Only people you follow can tag you
            </p>
            <p className="leading-7">
              Add location information to your posts: Off
            </p>
            <p className="leading-7">
              Allow message requests from: No one (Your followers will still be
              able to message you)
            </p>
            <p className="leading-7">Show/send read receipts: Off</p>
            <p className="leading-7">
              Allow followers to see which Spaces you're listening to: Off
            </p>
            <p className="leading-7">
              Let people who have your email find you on X: Off
            </p>
            <p className="leading-7">
              Let people who have your phone number find you on X: Off
            </p>
            <p className="leading-7">
              Manage contacts {">"} Remove all contacts
            </p>
            <p className="leading-7">Personalized ads: Off</p>
            <p className="leading-7">
              Personalize based on your inferred identity: Off
            </p>
            <p className="leading-7">
              Allow additional information sharing with business partners: Off
            </p>
            <p className="leading-7">
              Personalize based on places you've been: Off
            </p>
            <p className="leading-7">
              Allow your posts as well as your interactions, inputs, and results
              with Grok to be used for training and fine-tuning: Off
            </p>
          </div>
        </section>

        <section className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Red dots indicate features that should be disabled for maximum
            privacy. Review these settings periodically as LinkedIn may
            introduce new features or change existing privacy options.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LinkedIn;

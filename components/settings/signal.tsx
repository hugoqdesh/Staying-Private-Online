import React from "react";

const Signal = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Signal Settings
      </h2>

      <div className="space-y-8 w-10/12">
        <section>
          <h3 className="text-xl font-medium mb-4">Set username</h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">
              Tap on your profile pic {">"} Username {">"} Save
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Account</h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">
              Create your PIN {">"} Create a secure PIN (1234 or 0987 is not a
              secure pin. Create with at least 6-8 numbers.)
            </p>
            <p className="leading-7">
              Registration Lock: On (after PIN is created)
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Linked devices</h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">Remove any device you don't use.</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Chats</h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">Generate link previews: Off</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Notifications</h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">Show: Select whatever suits you</p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-4">Privacy</h3>
          <div className="space-y-4 pl-4 border-l-2 border-blue-500">
            <p className="leading-7">Who can see my number: Nobody</p>
            <p className="leading-7">Typing indicators: Off</p>
            <p className="leading-7">
              Default timer for new chats: Select whatever suits you
            </p>
            <p className="leading-7">Screen lock: On</p>
            <p className="leading-7">
              Screen lock inactivity timeout: Enter whatever suits you
            </p>
            <p className="leading-7">Screen security: On</p>
            <p className="leading-7">Incognito keyboard: On</p>
            <p className="leading-7">Payment lock: On</p>
            <p className="leading-7">
              Always relay calls: On (Call quality will be reduced, but it'll
              prevent your location from being exposed through your IP address
              to the other person on the call.)
            </p>
          </div>
        </section>

        <section className="bg-muted/50 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Note: These settings help maintain your privacy and security while
            using the Tor network. Always verify you're using official Tor
            sources and keep your browser updated.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Signal;

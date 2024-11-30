import React from "react";

const Level4 = () => {
  return (
    <div className="py-32 px-8 max-w-7xl mx-auto">
      <main>
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-4">Level 4</h1>
        </div>

        <div className="space-y-16">
          <section id="device-security">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl font-semibold">Privacy Measures</h2>
            </div>

            <div className="space-y-8">
              <div className="rounded-lg border-2 border-green-500/10 p-6">
                <div className="space-y-4">
                  <div className="prose prose-sm max-w-none">
                    <ol className="list-decimal pl-6 space-y-6 text-lg">
                      <li>
                        Build a ghost, untraceable laptop [Build a Ghost
                        Untraceable Laptop]
                      </li>
                      <li>
                        Encrypt every electronic device you use or avoid using
                        them altogether
                      </li>
                      <li>
                        Set up everything under an anonymous LLC to shield your
                        identity legally
                      </li>
                      <li>
                        Remove the camera and microphone from all devices to
                        avoid being recorded or spied on
                      </li>
                      <li>
                        Switch to using dumb and burner phones to reduce your
                        digital footprint
                      </li>
                      <li>
                        Avoid using email entirely to prevent tracking and leaks
                      </li>
                      <li>Get rid of all social media</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border-2 border-green-500/10 p-6">
                <div className="space-y-4">
                  <div className="prose prose-sm max-w-none">
                    <ol className="list-decimal pl-6 space-y-6 text-lg">
                      <li>
                        Never use real identification for any online or offline
                        activity
                      </li>
                      <li>
                        Avoid surveillance cameras as much as possible to stay
                        off the grid
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Level4;

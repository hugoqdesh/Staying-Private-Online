import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Firefox = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 lg:px-0">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Firefox Configuration
      </h2>

      <div className="space-y-8 w-96">
        <section>
          <div className="space-y-4 mx-auto w-max">
            <div>
              <Link
                href="https://github.com/yokoffing/BetterFox"
                target="_blank"
              >
                <Button variant="outline">BetterFox User.js</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Firefox;

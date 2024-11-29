"use client";

import Header from "@/components/header";
import Level1 from "@/components/level-1";
import Level2 from "@/components/level-2";
import Level3 from "@/components/level-3";
import Level4 from "@/components/level-4";
import Test from "@/components/test";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 space-y-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Guide to Achieving Online Anonymity
            </h1>
            <blockquote className="text-xl italic text-muted-foreground py-2">
              "Your data in the wrong hands, can be weaponized against you, your
              family, or your organization."
            </blockquote>

            <div className="mt-12 rounded-2xl p-6 sm:p-8 bg-card border border-border shadow-sm">
              <div className="space-y-4 text-lg">
                <p className="leading-relaxed">
                  In this modern world, privacy is growing peoples concern and
                  everyone is being watched. Achieving a fully complete
                  anonymity level is almost impossible, but taking proactive
                  steps to get there increases your privacy a lot.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  You can skip steps and implement them everything is up to you.
                </p>
              </div>
            </div>

            <div>
              <p className="leading-relaxed text-muted-foreground">
                Also check out the{" "}
                <Link
                  href="/settings"
                  className="underline hover:text-foreground"
                >
                  settings page
                </Link>
              </p>
            </div>
          </div>

          <div className="space-y-20">
            <Level1 />
            <Level2 />
            <Level3 />
            <Level4 />
            <Test />
          </div>
        </div>
      </main>
    </>
  );
}

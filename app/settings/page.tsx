"use client";

import Header from "@/components/header";
import Apple from "@/components/settings/apple";
import BraveSearch from "@/components/settings/brave-search";
import BreaveSearch from "@/components/settings/brave-search";
import Discord from "@/components/settings/discord";
import DuckDuckGoSearch from "@/components/settings/duckduckgo-search";
import Facebook from "@/components/settings/facebook";
import Firefox from "@/components/settings/firefox";
import Gmail from "@/components/settings/gmail";
import Instagram from "@/components/settings/instagram";
import ProtonMail from "@/components/settings/proton-mail";
import Signal from "@/components/settings/signal";
import Spotify from "@/components/settings/spotify";
import StartPageSearch from "@/components/settings/startpage-search";
import Tor from "@/components/settings/tor";
import Tutanota from "@/components/settings/tutanota";
import Twitter from "@/components/settings/twitter";
import UBlock from "@/components/settings/ublock";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center max-w-4xl mx-auto gap-16 py-16">
        <Signal />

        <Tor />

        <Discord />

        <Firefox />

        <BraveSearch />

        <DuckDuckGoSearch />

        <StartPageSearch />

        <Facebook />

        <Instagram />

        <Twitter />

        <Spotify />

        <Gmail />

        <ProtonMail />

        <Tutanota />

        <UBlock />

        <Apple />
      </main>
    </>
  );
}

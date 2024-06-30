"use client";
import Hero from "./_components/Hero";
import Top from "./_components/Top";

export default function Home() {
  return (
    <main
      className="min-h-screen grow px-10 flex flex-col gap-12 pb-12"
      style={{
        background: "linear-gradient(180deg, #3333A3 5.09%, #121212 33.4%)",
      }}
    >
      <Hero />
      {/* top mixes */}
      <Top title="Top mixes" />
      {/* Made for you */}
      <Top title="Made for you" />
    </main>
  );
}

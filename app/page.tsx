import Image from "next/image";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <main
      className="min-h-screen grow"
      style={{
        background: "linear-gradient(180deg, #3333A3 5.09%, #121212 33.4%)",
      }}
    >
      <Hero />
    </main>
  );
}

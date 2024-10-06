import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/hero"));

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
    </div>
  );
}

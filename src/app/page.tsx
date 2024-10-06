import dynamic from "next/dynamic";

const ParkingSystem = dynamic(() => import("@/components/parkingSystem"));

export default function Home() {
  return <ParkingSystem />;
}

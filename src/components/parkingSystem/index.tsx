"use client";

import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { Vehicle } from "@/constants/types";

const Hero = dynamic(() => import("@/components/hero"));
const ParkVehicle = dynamic(() => import("@/components/parkVehicle"));
const ParkingSpot = dynamic(() => import("@/components/parkingSpot"));

const SpotFilter = dynamic(() => import("@/components/spotFilter"));

const TOTAL_SPOTS = 10;

export default function Home() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const addVehicle = (licensePlate: string) => {
    if (licensePlate && vehicles.length < TOTAL_SPOTS) {
      const availableSpot = Array.from(
        { length: TOTAL_SPOTS },
        (_, i) => i + 1,
      ).find((spot) => !vehicles.some((v) => v.spot === spot));

      if (availableSpot) {
        const newVehicle: Vehicle = {
          licensePlate,
          spot: availableSpot,
          parkedAt: new Date(),
        };
        setVehicles([...vehicles, newVehicle]);
        setIsDialogOpen(false);
      }
    }
  };

  const removeVehicle = (spot: number) => {
    setVehicles(vehicles.filter((v) => v.spot !== spot));
  };

  const filteredVehicles = vehicles.filter((v) =>
    v.licensePlate.toLowerCase().includes(filterText.toLowerCase()),
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <div className="flex-grow bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
          <ParkVehicle
            isDialogOpen={isDialogOpen}
            setIsDialogOpen={setIsDialogOpen}
            isParkingFull={vehicles.length >= TOTAL_SPOTS}
            addVehicle={addVehicle}
          />
          <SpotFilter filterText={filterText} setFilterText={setFilterText} />
          {filteredVehicles.length === 0 && filterText !== "" ? (
            <div className="text-center py-8 text-gray-500">
              No results found for &quot;{filterText}&quot;
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Array.from({ length: TOTAL_SPOTS }, (_, i) => i + 1).map(
                (spot) => {
                  const vehicle =
                    filteredVehicles.find((v) => v.spot === spot) || null;
                  if (!vehicle && filterText !== "") return null;
                  return (
                    <ParkingSpot
                      key={spot}
                      spot={spot}
                      vehicle={vehicle}
                      onRemove={() => removeVehicle(spot)}
                      currentTime={currentTime}
                    />
                  );
                },
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Vehicle } from "@/constants/types";

import CarImage from "@/assets/car.png";

const Button = dynamic(() => import("@/components/button"));

const ParkingSpot: React.FC<{
  spot: number;
  vehicle: Vehicle | null;
  onRemove: () => void;
  currentTime: Date;
}> = ({ spot, vehicle, onRemove, currentTime }) => {
  console.log("vehicle", vehicle);
  const [isHovered, setIsHovered] = useState(false);

  const formatDuration = (start: Date) => {
    const diff = Math.floor((currentTime.getTime() - start.getTime()) / 1000);
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = diff % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="relative w-full h-full min-h-[352px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full">
        {vehicle ? (
          <div className="w-full h-full relative bg-gray-200 rounded-lg p-2">
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gray-800 to-gray-600 text-white p-2 rounded-t-lg text-center">
              <div className="font-bold line-clamp-1">
                {vehicle.licensePlate}
              </div>
              <div className="text-sm">{formatDuration(vehicle.parkedAt)}</div>
            </div>
            <Image
              src={CarImage}
              alt="Parked car"
              className="w-full h-full object-contain mt-9"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-green-500 flex flex-col items-center justify-between p-2 rounded-lg">
            <div className="w-full h-full border-2 border-white rounded-lg flex items-center justify-center">
              <div className="text-white font-bold text-2xl">{spot}</div>
            </div>
          </div>
        )}
      </div>
      {vehicle && isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
          <Button
            onClick={onRemove}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 h-9 px-4 py-2"
          >
            Remove Vehicle
          </Button>
        </div>
      )}
    </div>
  );
};

export default ParkingSpot;

"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Cross2Icon, InfoCircledIcon } from "@radix-ui/react-icons";

const Input = dynamic(() => import("@/components/input"));
const Button = dynamic(() => import("@/components/button"));

type AddVehicleFunction = (licensePlate: string) => void;

const ParkVehicle: React.FC<{
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isParkingFull: boolean;
  addVehicle: AddVehicleFunction;
  error?: string | null;
}> = ({ isDialogOpen, setIsDialogOpen, isParkingFull, addVehicle, error }) => {
  const [licensePlate, setLicensePlate] = useState("");

  useEffect(() => {
    if (!isDialogOpen) {
      setLicensePlate("");
    }
  }, [isDialogOpen]);

  return (
    <div className="mb-8 flex justify-between items-center">
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold mr-2">Parking Spots</h2>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger>
              <InfoCircledIcon className="text-gray-500 cursor-pointer" />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                sideOffset={8}
                className="z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
              >
                <p>Hover on the parked vehicle slot to remove the vehicle</p>
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
      <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Dialog.Trigger asChild>
          <Button
            className="inline-flex font-bold items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            type="button"
            disabled={isParkingFull}
          >
            {isParkingFull ? "No spots available" : "Park Vehicle"}
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
            <div className="flex flex-col space-y-1.5 text-center sm:text-left">
              <Dialog.Title className="text-lg font-semibold leading-none tracking-tight">
                Park a Vehicle
              </Dialog.Title>
            </div>
            <div className="flex flex-col gap-4 py-4">
              <Input
                type="text"
                value={licensePlate}
                onChange={(e) => setLicensePlate(e.target.value)}
                placeholder="Enter license plate"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button
                onClick={() => addVehicle(licensePlate)}
                disabled={isParkingFull || !licensePlate}
              >
                Park Vehicle
              </Button>
            </div>
            <Dialog.Close asChild>
              <Button className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none">
                <Cross2Icon />
              </Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default ParkVehicle;

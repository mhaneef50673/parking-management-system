import dynamic from "next/dynamic";
import { Cross2Icon } from "@radix-ui/react-icons";

const Input = dynamic(() => import("@/components/input"));
const Button = dynamic(() => import("@/components/button"));

type SetFilterTextFunction = (text: string) => void;

const SpotFilter: React.FC<{
  filterText: string;
  setFilterText: SetFilterTextFunction;
}> = ({ filterText = "", setFilterText }) => {
  const clearFilter = () => {
    setFilterText("");
  };

  return (
    <div className="mb-4 relative">
      <Input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Filter by license plate"
      />
      {filterText && (
        <Button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-7 w-7 absolute right-2 top-1/2 transform -translate-y-1/2"
          onClick={clearFilter}
        >
          <Cross2Icon className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default SpotFilter;

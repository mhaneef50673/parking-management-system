"use client";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import Logo from "@/components/logo";

const Button = dynamic(() => import("@/components/button"), {
  ssr: false,
});

const Header: React.FC = ({}) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-background text-foreground shadow-md sticky top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Logo />
          <span className="text-xl font-bold">ParkEase</span>
        </div>
        <Button
          className={`hover:bg-accent hover:text-accent-foreground h-9 w-9 flex items-center justify-center rounded`}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "dark" ? (
            <SunIcon className="h-[1.2rem] w-[1.2rem]" data-testid="sun-icon" />
          ) : (
            <MoonIcon
              className="h-[1.2rem] w-[1.2rem]"
              data-testid="moon-icon"
            />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;

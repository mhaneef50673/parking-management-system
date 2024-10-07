import Logo from "@/components/logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-foreground border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0 justify-center w-full">
            <Logo />
            <span className="ml-2 text-sm font-semibold">ParkEase</span>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ParkEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

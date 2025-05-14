
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-2 px-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-10 w-10 bg-digital-blue rounded-md flex items-center justify-center text-white font-bold text-xl">D</div>
          <span className="ml-2 text-xl font-bold hidden sm:block">Digital Services</span>
        </div>
        
        <div className="hidden md:flex items-center gap-x-6">
          <a href="#" className="text-gray-700 hover:text-digital-blue transition-colors">Home</a>
          <a href="#leadership" className="text-gray-700 hover:text-digital-blue transition-colors">Leadership</a>
          <a href="#services" className="text-gray-700 hover:text-digital-blue transition-colors">Services</a>
          <a href="#dashboard" className="text-gray-700 hover:text-digital-blue transition-colors">Dashboard</a>
          <a href="#partners" className="text-gray-700 hover:text-digital-blue transition-colors">Partners</a>
        </div>
        
        <div className="flex items-center gap-x-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
          </Button>
          <Button className="bg-digital-blue hover:bg-blue-800">Login</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

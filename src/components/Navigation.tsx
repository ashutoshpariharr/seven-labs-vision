import { Button } from "@/components/ui/button";
import LOGO from "@/assets/main-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">
              <img src={LOGO} alt="Landing Craft 49" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Solutions Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    Solutions
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-popover border border-border shadow-lg z-50">
                  <DropdownMenuItem>
                    <Link to="/services/performance-optimization" className="w-full">Performance Optimization</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services/organization-structure" className="w-full">Organization Structure & Hierarchy</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services/process-optimisation" className="w-full">Process Optimisation</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services/inventory-supply-chain" className="w-full">Inventory & Supply Chain</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services/financial-planning" className="w-full">Financial Planning & Budget</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/services/erp-implementation" className="w-full">ERP Implementation</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* About Us */}
              <Button variant="ghost" asChild>
                <Link to="/about">About Us</Link>
              </Button>

              <Button variant="ghost" asChild>
                <Link to="/career">Career</Link>
              </Button>

              {/* CTA Button */}
              <Button>
                <Link to="/contact">
                  Schedule Free Audit
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
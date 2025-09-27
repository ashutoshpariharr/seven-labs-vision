import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PerformanceOptimization from "./pages/services/PerformanceOptimization";
import OrganizationStructure from "./pages/services/OrganizationStructure";
import ProcessOptimisation from "./pages/services/ProcessOptimisation";
import InventorySupplyChain from "./pages/services/InventorySupplyChain";
import FinancialPlanning from "./pages/services/FinancialPlanning";
import ERPImplementation from "./pages/services/ERPImplementation";
import AboutPage from "./pages/About";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/Contact";
import IndustriesSection from "./pages/Industries";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/services/performance-optimization" element={<PerformanceOptimization />} />
          <Route path="/services/organization-structure" element={<OrganizationStructure />} />
          <Route path="/services/process-optimisation" element={<ProcessOptimisation />} />
          <Route path="/services/inventory-supply-chain" element={<InventorySupplyChain />} />
          <Route path="/services/financial-planning" element={<FinancialPlanning />} />
          <Route path="/services/erp-implementation" element={<ERPImplementation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

          {/* NEW Industry Route */}
          {/* <Route path="/industry/:id" element={<IndustriesSection />} /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

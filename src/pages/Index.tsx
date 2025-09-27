import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, HelpCircle, TrendingUp, Users, Building, Settings, Package, BarChart3, Laptop } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import businessCollaboration from "@/assets/business-collaboration.jpg";
import businessGrowth from "@/assets/business-growth.jpg";
import { Link } from "react-router-dom";
import LogoCarousel from "./LogoCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-primary/10 via-accent to-background overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={businessCollaboration}
            alt="Business collaboration"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Stop Running Your Business Blind
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform chaotic manual processes into clear, controlled operations with our 'What Could Go Wrong' methodology.
          </p>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Still Struggling With...
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover-lift">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Everything Depends On You Being There</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Manual paperwork, no systems—your business stops when you're not at your desk.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover-lift">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <HelpCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">No Clear Picture Of Your Money</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Can't track funds, don't know what's working—making decisions based on gut feeling.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover-lift">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Can't Scale Like The Big Players</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Confused by software options, wondering how corporates manage growth while you're stuck wrestling with daily challenges.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              From What Could Go Wrong to What's Going Right
            </h2>
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Making Business Predictable
            </h3>
            <p className="text-lg text-muted-foreground">
              "Every process documented. Every metric tracked. Every risk controlled."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/performance-optimization" className="block">
              <Card className="p-6 hover-lift cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    KRAs, KPIs, appraisal systems, real-time dashboards—make every team member accountable with clear metrics.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/organization-structure" className="block">
              <Card className="p-6 hover-lift cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Structure Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    Clear roles, reporting lines, decision authority, accountability frameworks—build scalable organizational systems.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/process-optimisation" className="block">
              <Card className="p-6 hover-lift cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Process Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    SOPs, workflow automation, 'What Could Go Wrong' analysis, risk controls—eliminate chaos and inefficiencies.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/inventory-supply-chain" className="block">
              <Card className="p-6 hover-lift cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Stock Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    Real-time inventory tracking, automated reordering, supplier management—reduce wastage and stockouts.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/financial-planning" className="block">
              <Card className="p-6 hover-lift cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Financial Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    Business models, budget vs actual analysis, financial forecasting, variance reporting—complete money visibility.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/erp-implementation" className="block">
              <Card className="p-6 hover-lift cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Laptop className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">Technology Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    Zoho, Odoo, custom systems implementation, software selection—centralize and automate all operations.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 px-4 bg-accent relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={businessGrowth}
            alt="Business growth visualization"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            What Sets Us Apart
          </h2>
          <div className="space-y-6 text-lg">
            <p className="text-foreground font-semibold">
              We will sit in your office till we get your operations streamlined.
            </p>
            <p className="text-muted-foreground">
              We don't give any gyaan, we implement that gyaan right from day 1.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Trusted by MSME's and Startups
            </h2>
            <div className="text-2xl font-semibold text-primary mb-8">
              40+ organisations and 3000+ employees covered
            </div>
          </div>

          {/* Company Logos */}
          <LogoCarousel />

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Their 'What Could Go Wrong' methodology completely transformed our operations. We went from chaos to clarity in just 3 months."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold text-sm">MI</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Modi Illva India Pvt. Ltd.</p>
                    <p className="text-xs text-muted-foreground">Manager and Team</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Finally, we have complete visibility into our finances and operations. The team actually sits with you until everything works perfectly."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold text-sm">TO</span> 
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Tonoto</p>
                    <p className="text-xs text-muted-foreground">Founder, Manufacturing MSME</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "The automation solutions they implemented saved us 15+ hours weekly on inventory management. Our order processing is now seamless and error-free."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold text-sm">MS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Machphy Solution</p>
                    <p className="text-xs text-muted-foreground">Operations Head, Tech Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-muted-foreground italic mb-4">
                    "Their logistics optimization reduced our delivery costs by 30% while improving customer satisfaction. Exceptional support throughout the implementation."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold text-sm">CP</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Carry Pro</p>
                    <p className="text-xs text-muted-foreground">CEO, Logistics & Supply Chain</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Ready to See Everything?
          </h2>
          <Link to="/contact" className="inline-block">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Schedule Free Business Audit
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-trucks.jpg";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Reliable Truck Dispatching,{" "}
              <span className="text-gradient">Simplified</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              We move loads, so you don't have to. Dispatching made simple for owner-operators 
              and fleet managers with real-time tracking, load matching, and 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-white px-8 py-3 text-lg group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-12 flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">500+</span>
                <span>Active Drivers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">24/7</span>
                <span>Support</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">99.9%</span>
                <span>Uptime</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Modern truck dispatching service"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
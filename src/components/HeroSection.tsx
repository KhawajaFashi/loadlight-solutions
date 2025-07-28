import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          {/* Fallback gradient background */}
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 gradient-hero opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Reliable Truck Dispatching,{" "}
              <span className="text-gradient">Simplified</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              We move loads, so you don't have to. Dispatching made simple for owner-operators 
              and fleet managers with real-time tracking, load matching, and 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-white px-8 py-3 text-lg group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg group border-white text-white hover:bg-white hover:text-secondary">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-12 flex items-center space-x-8 text-sm text-gray-200">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">500+</span>
                <span>Active Drivers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">24/7</span>
                <span>Support</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">99.9%</span>
                <span>Uptime</span>
              </div>
            </div>
          </div>

          {/* Hero Image - Hidden on mobile for video focus */}
          <div className="hidden lg:block animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"></div>
              <div className="relative p-8 rounded-2xl">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">Trusted by Industry Leaders</h3>
                  <p className="text-gray-200">Join thousands of successful logistics companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
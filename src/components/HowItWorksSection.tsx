import { Card, CardContent } from "@/components/ui/card";
import { Search, UserCheck, MapPin, CreditCard } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Get Matched with Loads",
      description: "Our intelligent system matches you with the best available loads based on your preferences and location.",
      number: "01"
    },
    {
      icon: UserCheck,
      title: "Assign Drivers",
      description: "Easily assign qualified drivers to loads with our streamlined driver management system.",
      number: "02"
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Monitor your fleet in real-time with live GPS tracking and automated status updates.",
      number: "03"
    },
    {
      icon: CreditCard,
      title: "Automated Billing",
      description: "Handle invoicing and payments automatically with our integrated billing system.",
      number: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            How <span className="text-gradient">It Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes truck dispatching simple and efficient. 
            Get started in minutes and see results immediately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative bg-card border-border hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center mt-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connection lines for desktop */}
        <div className="hidden lg:block relative -mt-32 pointer-events-none">
          <div className="absolute top-16 left-1/4 w-1/4 h-0.5 bg-primary/20"></div>
          <div className="absolute top-16 left-2/4 w-1/4 h-0.5 bg-primary/20"></div>
          <div className="absolute top-16 left-3/4 w-1/4 h-0.5 bg-primary/20"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;